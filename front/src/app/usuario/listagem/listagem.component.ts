import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../core/entities/usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    MatIcon,
    CommonModule,
  ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss',
})
export class ListagemComponent {
  formulario!: FormGroup;
  formBuilder = inject(FormBuilder);
  service = inject(UsuarioService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  public usuarios: Array<Usuario> = [];

  public fonteDados = new MatTableDataSource<Usuario>();

  ngOnInit(): void {
    this.criarFormulario();
    this.pesquisar();
  }

  private criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      cpf: [''],
    });
  }

  public limparFormulario(): void {
    this.formulario.reset();
    this.pesquisar();
  }

  public colunas: Array<IColunas> = [
    {
      def: 'id',
      cabecalho: 'Id',
      conteudo: (element: Usuario) => `${element.id}`,
    },
    {
      def: 'nome',
      cabecalho: 'Nome',
      conteudo: (element: Usuario) => `${element.nome}`,
    },
    {
      def: 'cpf',
      cabecalho: 'Cpf',
      conteudo: (element: Usuario) => `${element.cpf}`,
    },
    {
      def: 'email',
      cabecalho: 'Email',
      conteudo: (element: Usuario) => `${element.email}`,
    },
  ];

  mostrarColunasDinamicas = ['id', 'nome', 'cpf', 'email', 'acoes'];

  public pesquisar() {
    this.service.buscar().subscribe((resultado) => {
      this.fonteDados.data = resultado;
    });
  }

  public buscarPorCpf() {
    this.service
      .buscarPorCpf(this.formulario.get('cpf')?.value)
      .subscribe((resultado) => {
        this.fonteDados.data = [resultado];
      });
  }

  public cadastrar() {
    this.router.navigate([`/usuario/formulario`]);
  }

  editarUsuario(id: number) {
    this.router.navigate([`/usuario/formulario`], {
      queryParams: { id: id },
      relativeTo: this.route,
    });
  }

  deletarUsuario(id: string) {
    this.service.deletar(id).subscribe(() => {
      this.pesquisar(); // Mesmo comando do meu outro projeto, atualizar lista
    });
  }
}

export interface IColunas {
  def: string;
  cabecalho: string;
  conteudo: any;
}
