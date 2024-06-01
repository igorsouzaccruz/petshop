import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { ListagemComponent } from './listagem/listagem.component';
import { FormularioComponent } from './formulario/formulario.component';

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
        path: 'formulario',
        title: 'Cadastrar Usuario',
        component: FormularioComponent,
      },
    ],
  },
] as Routes;
