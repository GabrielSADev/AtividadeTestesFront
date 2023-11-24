import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { User } from '../models/user';
// import { JwtPayload, jwtDecode } from "jwt-decode"; Professor não faço ideia do porque não estou conseguindo dar o import

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    API: string = 'http://localhost:8080/api/login';

    constructor(private http: HttpClient) { }


  logar(login: Login): Observable<User> {
    return this.http.post<User>(this.API, login);
  }

  deslogar(): Observable<any> {
    return this.http.get<any>(this.API+'/deslogar');
  }

  addToken(token: string){
    localStorage.setItem('token', token);
  }

  removerToken(){
    localStorage.removeItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
/*
  hasPermission(roleToCheck:any) {
    const userToken = this.getToken();

    if (userToken) {
      try {
        const decodedToken = jwtDecode<JwtPayload>(userToken) as User;
        if (decodedToken && decodedToken.role.includes(roleToCheck)) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
        return false;
      }
    } else {
      console.error('Token de usuário não encontrado');
      return false;
    }
  }                ERRO POR CONTA DO IMPORT MAS ESTA FUNCIONANDO
  */
}

