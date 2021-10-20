import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/core/interfaces/posts.interface';
import { JsonPlaceholderService } from '../../../core/services/json-placeholder.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts[] = [];
  mostrar: boolean = false;

  constructor( private jsonService: JsonPlaceholderService) { }

  ngOnInit(): void {

    this.jsonService.getAllposts().subscribe( posts => {
      this.posts = posts;
      this.mostrar = true;
    });
  }

}
