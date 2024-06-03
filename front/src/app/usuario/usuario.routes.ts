import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListagemComponent } from './listagem/listagem.component';
import { usuarioFormularioResolver } from './usuario-formulario.resolver.service';
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
        path: 'formulario',
        title: 'Cadastrar Usuario',
        component: FormularioComponent,
        resolve: { usuario: usuarioFormularioResolver },
      },
    ],
  },
] as Routes;
