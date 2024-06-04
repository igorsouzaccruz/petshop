import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../core/entities/usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
  formulario!: FormGroup;
  formBuilder = inject(FormBuilder);
  service = inject(UsuarioService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  private usuarioEdicao: Usuario = new Usuario();

  public modoEdicao!: boolean;

  ngOnInit(): void {
    this.criarFormulario();

    this.activatedRoute.data.subscribe(({ usuario }) => {
      this.modoEdicao = !!usuario;
      this.usuarioEdicao = usuario;
      this.formulario.patchValue(usuario);
    });
  }

  private criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required]],
      cpf: [
        '',
        [
          Validators.required,
          Validators.maxLength(11),
          Validators.minLength(11),
        ],
      ],
      senha: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public salvar() {
    if (this.formulario.invalid) {
      return alert('formulario invalido');
    }
    var usuario: Usuario = this.formulario.value;
    if (this.modoEdicao) {
      usuario.id = this.usuarioEdicao.id;
    }

    this.service.salvar(usuario).subscribe({
      next: (respota) => {
        console.log(respota), this.router.navigate([`/usuario`]);
      },
      error: (erro) => console.log('error', erro),
      complete: () => {
        console.log('fim');
      },
    });
    this.limparFormulario();
  }

  public voltar() {
    this.router.navigate([`/usuario`]);
    this.formulario.reset();
  }

  public limparFormulario(): void {
    this.formulario.reset();
  }
}
