import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  formulario!: FormGroup;
  formBuilder = inject(FormBuilder);
  service = inject(UsuarioService);

  ngOnInit(): void {
    this.criarFormulario();
  }

  private criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.maxLength(11), Validators.minLength(11)]],
      senha: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public salvar() {
    //console.log(this.formulario.value);
    //debugger;
    
    this.service.salvar(this.formulario.value).subscribe({
      next: (respota) => console.log(respota),
      error: (erro) => console.log('error',erro),
      complete: () => {
        console.log('fim');
      },
    });
    this.limparFormulario();
  }

  public limparFormulario(): void {
    this.formulario.reset();
  }



}