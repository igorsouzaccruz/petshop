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
        component: GrupoListagemComponent,
      },
      {
        path: 'cadastrar',
        title: 'Cadastrar Usuario',
        component: GrupoFormularioComponent,
      },
    ],
  },
] as Routes;
