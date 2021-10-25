import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/core/interfaces/posts.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { JsonPlaceholderService } from '../../../../core/services/json-placeholder.service';
import { Albums } from '../../../../core/interfaces/albums.interface';
import { Todos } from '../../../../core/interfaces/todos.interface';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  user!: User;
  posts: Posts[] = [];
  albums: Albums[] = [];
  todos: Todos[] = [];

  infoUser: boolean = false;
  infoPosts: boolean = false;
  infoAlbums: boolean = false;
  infoTodos: boolean = false;

  spinner: boolean = true;

  back: boolean = false;


  constructor( private jsonService: JsonPlaceholderService) {

    if( localStorage.getItem('userON') ){

      this.user = JSON.parse( localStorage.getItem('userON')! );
      this.infoUser = true;

      this.spinner = false;
      
    }

   }

  ngOnInit(): void {

    if( this.user ){

      this.spinner = true;

      this.jsonService.getData<Posts[]>('users', this.user.id, 'posts').subscribe( p => {

        this.posts = p;
        this.spinner = false;
        
      });

      this.jsonService.getData<Albums[]>('users', this.user.id, 'albums').subscribe( a => {
        this.albums = a;
        this.spinner = false;
      });

      this.jsonService.getData<Todos[]>('users', this.user.id, 'todos').subscribe( td => {
        this.todos = td;
        this.spinner = false;
      })
      
    }
    
  }

  myPosts(){

    this.infoPosts = true;
    
    this.infoUser = false;
    this.infoAlbums = false;
    this.infoTodos  = false;

    this.back = true;

  }

  myAlbums(){
    
    this.infoAlbums = true;
    

    this.infoUser   = false;
    this.infoPosts  = false;
    this.infoTodos  = false;

    this.back = true;

  }

  myTodos(){

    this.infoTodos  = true;
    this.infoTodos = true;

    this.infoUser   = false;
    this.infoPosts  = false;
    this.infoAlbums = false;

    this.back = true;

  }

  menuBack(){
    this.infoUser   = true;
    this.infoPosts  = false;
    this.infoAlbums = false;
    this.infoTodos  = false;

    this.back = false;
  }

}
