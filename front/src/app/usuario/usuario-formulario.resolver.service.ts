import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Usuario } from '../core/entities/usuario';
import { UsuarioService } from './usuario.service';

export const usuarioFormularioResolver: ResolveFn<Usuario> = (route, state) => {
  if (route.queryParams && route.queryParams['id']) {
    return inject(UsuarioService).buscarPorId(route.queryParams['id']);
  }
  return new Usuario();
};
