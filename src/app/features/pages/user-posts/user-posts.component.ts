import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor( private activatedRoute: ActivatedRoute, private jsonService: JsonPlaceholderService, private router: Router ) { }

  ngOnInit(): void {

    // get url id
    this.activatedRoute.params.
    pipe(
      switchMap( ({ id }) => this.jsonService.getUserPosts(id) )
    ).subscribe( userPosts => {

      this.posts = userPosts;
      this.mostrar = true;
      
    });
  }

  deletePost(i: number){
    
    this.jsonService.deletePost(this.posts[i].id).subscribe( d => {
      this.posts.splice(i,1);
    });

  }

  modify(post: Posts){
    console.log(post);
  }

  createPost(){
    console.log('crear post');
  }

  details(post: Posts){
    
    this.router.navigate(['home/detalles/post/', post.id]);
  }

}
