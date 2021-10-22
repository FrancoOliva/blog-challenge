import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/core/interfaces/posts.interface';
import { JsonPlaceholderService } from '../../../core/services/json-placeholder.service';
import { switchMap } from 'rxjs/operators';
import { User } from 'src/app/core/interfaces/user.interface';


@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  user!: User;

  posts: Posts[] = [];
  mostrar: boolean = false;    

  constructor( private activatedRoute: ActivatedRoute, private jsonService: JsonPlaceholderService, private router: Router) { 

    if( localStorage.getItem('user') ){
      this.user = JSON.parse( localStorage.getItem('user')! );
      
    }

    if( !localStorage.getItem('mispost') ){

      // get url id
      this.activatedRoute.params.
      pipe(
        switchMap( ({ id }) => this.jsonService.getUserPosts(id) )
      ).subscribe( userPosts => {

        this.posts = userPosts;
        this.mostrar = true;

        localStorage.setItem('mispost', JSON.stringify(this.posts));
        
      });

    } else {
      this.posts = JSON.parse( localStorage.getItem('mispost')! );
      this.mostrar = true;
    }


  }

  ngOnInit(): void {

    
  }

  deletePost(i: number){
    
    this.jsonService.deletePost(this.posts[i].id).subscribe( d => {
      this.posts.splice(i,1);
      localStorage.setItem('mispost', JSON.stringify(this.posts));
    });

  }

  modify(post: Posts){

    
    this.router.navigate(['home/modificar', post.id]);
  }

  createPost(){
    this.router.navigate(['home/crear-post']);
  }

  details(post: Posts){
    
    this.router.navigate(['home/detalles/post/', post.id]);
  }

}
