import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetalhesComponent } from './pages/post-detalhes/post-detalhes.component';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'post-detalhes/:id', component: PostDetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
