import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { enviroment } from '../../environments/environment';
import { Usuario } from '../core/entities/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private url = enviroment.API_URL + 'Usuario';

  constructor(public http: HttpClient) {}

  public salvar(usuario: Usuario) {
    return this.http.post<Usuario>(this.url, usuario);
  }

  public buscarPorCpf(cpf: string): Observable<any> {
    return this.http.get<any>(this.url + '/' + cpf).pipe(take(1));
  }

  public buscar(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
