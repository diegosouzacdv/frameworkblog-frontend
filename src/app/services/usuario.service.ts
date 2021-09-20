import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Categoria } from '../models/categoria';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  constructor(
    private http: HttpClient,
  ) {

  }

  getUsuario(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`${API_CONFIG.baseUrl}/usuarios/${id}`);
  }

  getUsuarioLogado(): Observable<Usuario>{
    return this.http.get<Usuario>(`${API_CONFIG.baseUrl}/usuarios/usuario`);
  }



}