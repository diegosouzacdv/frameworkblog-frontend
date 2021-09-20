import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './../../../models/post';
import { PostsService } from './../../../services/posts.service';
import { CategoriaService } from './../../../services/categoria.service';
import { API_CONFIG } from 'src/app/config/api.config';


@Component({
  selector: 'app-section-posts',
  templateUrl: './section-posts.component.html',
  styleUrls: ['./section-posts.component.css']
})
export class SectionPostsComponent implements OnInit {

  
  posts$!: Observable<Post[]>;
  posts: Post[] = [];
  paginacao: any = '';
  paginaAtual = 1;
  paginaLast = false;
  page = 0;
  paginaTotal = 0;
  url: string = '';

  constructor(private postService: PostsService, private categoriaService: CategoriaService) {
    this.url = API_CONFIG.baseUrl;
   }

  ngOnInit(): void {
    this.getListPost();
  }

  ngAfterViewInit() {
    this.getListPost();
  }

  getListPost() {
    console.log(this.page);
    this.posts$ = this.postService.getPosts(3, this.page);
    this.posts$.subscribe((res : any) => {
     this.posts = res['content'];
     
     if(this.posts.length > 0) this.posts.forEach(post => {
       this.categoriaService.getCategoria(post.categoriaId).subscribe(response => {
         if(response) post.categoriaNome = response.nome;
       });
     });
     this.paginacao = res;
     this.paginaLast = this.paginacao.last;
     this.paginaAtual = this.paginacao.number + 1;
     this.paginaTotal = this.paginacao.totalPages;
     console.log(this.paginacao);
    });
  }

  retornarPagina() {
    if( this.paginaAtual > 1) {
      this.page--;
      this.getListPost();
    }
  }

  avancarPagina() {
    if(!this.paginaLast){
      this.page++;
      this.getListPost();
    }
  }

}

