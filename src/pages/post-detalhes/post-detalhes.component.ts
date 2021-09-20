import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Post } from './../../models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { Comentario } from './../../models/comentario';
import Swal from 'sweetalert2';
import { UsuarioService } from './../../services/usuario.service';
import { CategoriaService } from './../../services/categoria.service';
import { AuthService } from './../../services/auth.service';
import { API_CONFIG } from './../../config/api.config';
@Component({
  selector: 'app-post-detalhes',
  templateUrl: './post-detalhes.component.html',
  styleUrls: ['./post-detalhes.component.css']
})
export class PostDetalhesComponent implements OnInit {

  comentarioForm!: FormGroup;
  post: Post = new Post();
  comentarios: Comentario[] = [];
  id: string | null = '';
  idUsuario: number = 0;
  url: string = '';
  constructor(private route: ActivatedRoute, 
    private postService: PostsService, 
    private usuarioService: UsuarioService, 
    private categoriaService: CategoriaService, 
    private authService:AuthService,
    private router: Router
    ) {
    var localUser = this.authService.localUser;
    this.idUsuario = JSON.parse(localUser)['id'];
    this.url = API_CONFIG.baseUrl;
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.createForm(new Comentario());
    this.getPost();
  }

  getPost() {
    this.postService.getPost(this.id).subscribe(response => {
      this.post = response;
      console.log(this.post);
      this.categoriaService.getCategoria(this.post.categoriaId).subscribe(response => {
        if(response) this.post.categoriaNome = response.nome;
      });
      this.getComentarios();
    });
  }

  getComentarios() {
    this.postService.getComentario(this.id).subscribe(response => {
      this.comentarios = response;
      console.log(this.comentarios)
      this.comentarios.forEach(comentarioForEach => {
        this.usuarioService.getUsuario(comentarioForEach.usuarioId).subscribe(responseUsuario => {
          comentarioForEach.nomeUsuario = responseUsuario.nome;
        })
      })
    });
  }

  createForm(comentario: Comentario) {
    this.comentarioForm = new FormGroup({
      descricao: new FormControl(comentario.descricao, [Validators.required]),
      postId: new FormControl(this.id, [Validators.required]),
    })
  }

  curtir() {
    Swal.fire({}).then(() => {});
    this.postService.curtidaPost(this.post.id).subscribe((response: Post) => {
      this.post.totalCurtidas = response.totalCurtidas;
    });
  }

  deletePost() {
    Swal.fire({
      title: 'Deletar',
      text: "Deseja Apagar?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, apagar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {    
      if(this.post.usuarioId == this.idUsuario) this.postService.deletePost(this.post.id).subscribe(response => {
        Swal.fire(
          'Foi Apagado!',
          'success'
        )
        this.router.navigate(['/']);
      }, error => {
        this.router.navigate(['/']);
      });
      }
    })

  }

  deleteComentario(id: number, idUsuarioComentario: number) {

    Swal.fire({
      title: 'Deletar',
      text: "Deseja Apagar?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, apagar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) { 
        if(idUsuarioComentario == this.idUsuario) {
          this.postService.deleteComentario(id).subscribe(response => {
            this.getComentarios();
            console.log(response);
            Swal.fire(
              'Foi Apagado!',
              'success'
            );
          }, error => {
          });  
        }   else {
      
          Swal.fire(
            `Você não pode apagar esse comentário`,
            
          )
        }
      }
    })

    
  }

  onSubmit() {
    console.log("Onsubmit");
    Swal.fire("Enviando...").then(() => { });
    console.log(this.comentarioForm.value);
    this.postService.comentarioPost(this.comentarioForm.value).subscribe((response: any) => {
      Swal.fire('Salvo!', '', 'success');
      this.getComentarios();
      this.comentarioForm.reset();
      this.createForm(new Comentario());
    }, (errors => {
    }))
}
}
