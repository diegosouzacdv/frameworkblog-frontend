import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Post } from '../models/post';
import { Comentario } from './../models/comentario';

@Injectable({
  providedIn: 'root',
})
export class PostsService {


  constructor(
    private http: HttpClient,
  ) {

  }

  getPost(id: string | null): Observable<Post> {

    return this.http.get<Post>(`${API_CONFIG.baseUrl}/posts/${id}`);
  }

  getPosts(size: number, page: number): Observable<Post[]> {

    return this.http.get<Post[]>(`${API_CONFIG.baseUrl}/posts?size=${size}&page=${page}`);
  }

  getComentario(idPost: string | null): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(`${API_CONFIG.baseUrl}/posts/comentarios/${idPost}`);
  }

  salvandoPost(post: Post) {
    return this.http.post(`${API_CONFIG.baseUrl}/posts`, post);
  }

  deletePost(id: number) {
    return this.http.delete(`${API_CONFIG.baseUrl}/posts?id=${id}`);
  }

  deleteComentario(id: number) {
    return this.http.delete(`${API_CONFIG.baseUrl}/posts/excluir/comentario/${id}`);
  }

  curtidaPost(id: number): Observable<Post> {
    return this.http.put<Post>(`${API_CONFIG.baseUrl}/posts/curtir/${id}`,{});
  }

  comentarioPost(comentario: Comentario) {
    console.log('service do COmentario')
    console.log(comentario)
    return this.http.put(`${API_CONFIG.baseUrl}/posts/comentar`, comentario);
  }

  uploadFoto(formData: FormData): Observable<any> {
    return this.http.put<File>(`${API_CONFIG.baseUrl}/posts/imagens`, formData);
  }

}