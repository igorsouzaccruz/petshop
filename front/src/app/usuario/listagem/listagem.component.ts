import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../../core/entities/usuario';


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
  ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent {

  formulario!: FormGroup;
  formBuilder = inject(FormBuilder);
  service = inject(UsuarioService);

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

  mostrarColunasDinamicas = this.colunas.map((coluna) => coluna.def);

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
}

export interface IColunas {
  def: string;
  cabecalho: string;
  conteudo: any;
}



