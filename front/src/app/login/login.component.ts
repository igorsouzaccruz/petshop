import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Login } from '../core/entities/login';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormField,
    MatInputModule,
    MatButton,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public loginForm: FormGroup;
  public hide = true;
  public errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private _snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    const { username, password } = this.loginForm.value;

    var login = new Login();
    login.login = username;
    login.senha = password;

    this.service.login(login).subscribe((result) => {
      if (result) {
        this.openSnackBar('Login bem-sucedido!');
        this.errorMessage = null;
      } else {
        this.errorMessage = 'Usuário ou senha incorretos.';
      }
    });
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }
}
