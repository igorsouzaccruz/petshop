import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';

export default [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      {
        path: '',
        title: 'Usuario',
        component: ListagemComponent,
      },
      {
        path: 'cadastrar',
        title: 'Cadastrar Usuario',
        component: FormularioComponent,
      },
    ],
  },
] as Routes;
