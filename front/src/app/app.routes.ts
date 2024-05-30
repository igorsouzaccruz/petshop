import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'prefix',
      },
      {
        path: 'home',
        title: 'Home',
        loadComponent: () =>
          import('./home/home.component').then((c) => c.HomeComponent),
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
