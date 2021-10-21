import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/core/interfaces/posts.interface';
import { JsonPlaceholderService } from '../../../core/services/json-placeholder.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  posts: Posts[] = [];
  mostrar: boolean = false;

  constructor( private activatedRoute: ActivatedRoute, private jsonService: JsonPlaceholderService ) { }

  ngOnInit(): void {

    // get url id
    this.activatedRoute.params.
    pipe(
      switchMap( ({ id }) => this.jsonService.getUserPosts(id) )
    ).subscribe( userPosts => {

      this.posts = userPosts;
      this.mostrar = true;
      console.log(this.posts);
    });
  }

}
