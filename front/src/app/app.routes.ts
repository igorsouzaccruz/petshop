import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'prefix',
      },
      {
        path: 'login',
        title: 'Login',
        loadComponent: () =>
          import('./login/login.component').then((c) => c.LoginComponent),
      },
      {
        path: 'usuario',
        title: 'Usuário',
        loadChildren: () =>
          import('./usuario/usuario.routes').then((c) => c.default),
      },
    ],
  },
];
