import { Component, Input, OnInit } from '@angular/core';
import { Posts } from 'src/app/core/interfaces/posts.interface';
import { JsonPlaceholderService } from '../../../../core/services/json-placeholder.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts[] = [];
  infoPost: boolean = true;

  constructor( private jsonService: JsonPlaceholderService) { }

  ngOnInit(): void {

    this.jsonService.getAll<Posts[]>('posts').subscribe( p => {
      this.posts = p;
    });
  }

}
