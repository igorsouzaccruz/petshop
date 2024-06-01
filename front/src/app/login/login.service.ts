import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../environments/environment';
import { Login } from '../core/entities/login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = enviroment.API_URL + 'Auth';

  constructor(private http: HttpClient) {}

  public login(login: Login) {
    return this.http.post<Login>(this.url, login);
  }
}
