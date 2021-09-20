import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal.component';
import { HeaderComponent } from './header/header.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { SectionPostsComponent } from './section-posts/section-posts.component';
import { SectionGaleriaComponent } from './section-galeria/section-galeria.component';
import { FooterComponent } from './footer/footer.component';
import { SectionCategoriasComponent } from './section-categorias/section-categorias.component';
import { SectionRecentesComponent } from './section-recentes/section-recentes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { LoginComponent } from '../admin/login/login.component';
import { CriarUsuarioComponent } from '../admin/criar-usuario/criar-usuario.component';
import { PostsComponent } from '../posts/posts.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SectionArtigosRecentesComponent } from './section-artigos-recentes/section-artigos-recentes.component';
import { PostDetalhesComponent } from '../post-detalhes/post-detalhes.component';
@NgModule({
  declarations: [
    PrincipalComponent,
    PostDetalhesComponent,
    HeaderComponent,
    SectionHeaderComponent,
    SectionPostsComponent,
    SectionGaleriaComponent,
    FooterComponent,
    SectionCategoriasComponent,
    SectionRecentesComponent,
    LoginComponent,
    CriarUsuarioComponent,
    PostsComponent,
    SectionArtigosRecentesComponent,
  ],

  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    NgxDropzoneModule
  ]
})
export class PrincipalModule { }
