import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { API_CONFIG } from '../config/api.config';
import { JwtHelperService } from "@auth0/angular-jwt";
import { LocalUser } from '../models/local_user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from './../models/login';
import { CadastrarUsuario } from './../models/cadastro_usuario';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

    get usuariologado() {
      var usuarioLogado: string | null = null;
      if(this.storage.getUsuarioLogado() != null) usuarioLogado = this.storage.getUsuarioLogado()
      return usuarioLogado?.replace(/['"]+/g, '');
    }

    get localUser() {
      return JSON.stringify(this.storage.getLocalUser());
    }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ZnJhbWV3b3JrYmxvZzokMmEkMTIkLnVUem9HYkVZdUpXRVQyYXpubExxdUwuMzdqRlFMNFBtWnNUZmk2TG0yLmdJMU9mWnVXWU8='
    })
  };

  private helper = new JwtHelperService();

  constructor(
    public http: HttpClient,
    public storage: StorageService,
    public usuarioService: UsuarioService,
    private router: Router
  ) {

  }

  criarUsuario(credenciais: CadastrarUsuario) {
    console.log(credenciais)
    return this.http.post(
      `${API_CONFIG.baseUrl}/usuarios`,
      credenciais)
  }

  authenticate(creds: Login) {
    const body = `login=appsgpol&username=${creds.username}&password=${btoa(creds.password)}&grant_type=password`;

    return this.http.post(
      `${API_CONFIG.baseUrl}/oauth/token`,
      body,
      this.httpOptions)
  }

  successfullLogin(authorizationValue: string) {
    this.storage.setLocalUser(null);
    this.storage.setUsuarioLogado(null);
    
    let token = this.helper.decodeToken(authorizationValue)
    console.log(token)

    let user: LocalUser = {
      token: authorizationValue,
      id: token['user_name'],
      nomeUsuario: '',
      authorities: token['authorities']
    };
    this.storage.setLocalUser(user);

    this.usuarioService.getUsuarioLogado().subscribe(response => {
      console.log('usuariologado')
      console.log(response)
      this.storage.setUsuarioLogado(response.nome);
      location.reload();
    });
  }

  isTokenValid(token: any) {
    if (!this.helper.isTokenExpired(token)) {
      return false;
    } else {
        return true;
      }

  }

  logout() {
    this.storage.setLocalUser(null);
    this.storage.setUsuarioLogado(null);
    this.router.navigate(['']);
    location.reload();
  }
}