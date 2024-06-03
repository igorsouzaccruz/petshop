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
    return this.http.get<any>(this.url + '/cpf/' + cpf).pipe(take(1));
  }

  public buscar(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  public buscarPorId(id: string): Observable<Usuario> {
    debugger;
    return this.http.get<Usuario>(`${this.url}/${id}`).pipe(take(1));
  }

  public deletar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`).pipe(take(1));
  }
}
