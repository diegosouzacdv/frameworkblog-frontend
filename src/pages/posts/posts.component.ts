import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';
import Swal from 'sweetalert2';
import { Categoria } from './../../models/categoria';
import { CategoriaService } from './../../services/categoria.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  ngOnInit(): void {
  }
  postForm!: FormGroup;
  @ViewChild('closeModal') closeModal!: ElementRef;
  files: File[] = [];
  fotos: string[] = [];
  urls: string[] = [];
  categorias!: Observable<Categoria[]>;
  constructor(
    private categoriaService: CategoriaService,
    private postService: PostsService, 
    private router: Router) {
    this.getCategorias();
    this.createForm(new Post());
  }

  getCategorias() {
    this.categorias = this.categoriaService.getCategorias();
  }

  createForm(post: Post) {
    this.postForm = new FormGroup({
      titulo: new FormControl(post.action),
      categoriaId: new FormControl(post.categoriaId, [Validators.required]),
      descricao: new FormControl(post.descricao, [Validators.required]),
      links: new FormControl(post.imagens),
      imagens: new FormControl(post.imagens),
    })
  }

  onSubmit() {
    Swal.fire("").then(() => { });
    this.postForm.get('imagens')?.setValue(this.fotos);
    this.postForm.get('links')?.setValue(this.urls);
    console.log(this.postForm.value)
    this.postService.salvandoPost(this.postForm.value).subscribe((response: any) => {
      console.log(response)
      this.closeModal.nativeElement.click();
      Swal.fire('Salvo!', '', 'success');
      this.postForm.reset();
      this.router.navigate(['/']);
    }, (errors => {
    }))
  }

  addUrl(url: string) {
    this.urls.push(url);
  }

  limparUrl() {
    this.urls.length = 0;
  }

  get postFormControl() {
    return this.postForm.controls;
  }

  onSelect(event: any) {
    var foto: string[] = [];
    Swal.fire().then(() => { });
    foto.push(...event.addedFiles);
    this.files.push(...event.addedFiles);
    const formData = new FormData();
      formData.append("foto", foto[0]);
    
    this.postService.uploadFoto(formData)
      .subscribe((res: any) => {
        this.fotos.push(res.imagemNome);
      }, error => {
        console.log('eeror' + error)
      })

  }


  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
