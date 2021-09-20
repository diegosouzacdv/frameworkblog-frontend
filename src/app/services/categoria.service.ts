import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { Categoria } from '../models/categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {


  constructor(
    private http: HttpClient,
  ) {

  }

  getCategoria(id: number): Observable<Categoria>{
    return this.http.get<Categoria>(`${API_CONFIG.baseUrl}/categorias/${id}`);
  }

  getCategorias(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`${API_CONFIG.baseUrl}/categorias`);
  }

  salvandoCategoria(categoria: Categoria) {
    return this.http.post(`${API_CONFIG.baseUrl}/categorias`, categoria);
    }


}