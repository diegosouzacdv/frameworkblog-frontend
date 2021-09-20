import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-section-artigos-recentes',
  templateUrl: './section-artigos-recentes.component.html',
  styleUrls: ['./section-artigos-recentes.component.css']
})
export class SectionArtigosRecentesComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostsService,) { }

  ngOnInit(): void {
    this.getListPost();
  }

  getListPost() {
  this.postService.getPosts(6, 0).subscribe((res : any) => {
    console.log("compomente recente");
    console.log(res);
      this.posts = res['content'];
    })
  }

}
