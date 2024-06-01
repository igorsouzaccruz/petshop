import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { MatButtonModule } from '@angular/material/button';
import { FormularioComponent } from './formulario/formulario.component';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ListagemComponent,
    MatButtonModule,
    FormularioComponent,
  ],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {
  title = 'Super Pet Shop';
  public cadastrando: boolean = false;

  public cadastrar() {
    this.cadastrando = !this.cadastrando;
  }
}
