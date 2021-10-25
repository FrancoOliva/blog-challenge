import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Albums } from 'src/app/core/interfaces/albums.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { Posts } from '../../../../core/interfaces/posts.interface';
import { Todos } from '../../../../core/interfaces/todos.interface';
import { JsonPlaceholderService } from '../../../../core/services/json-placeholder.service';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  user!   : User;
  downloading: boolean = false;

  posts   : Posts[]   = [];
  albums  : Albums[]  = [];
  todos   : Todos[]   = [];
  
  infoUser    : boolean = false;
  infoPosts   : boolean = false;
  infoAlbums  : boolean = false;
  infoTodos   : boolean = false;
  back    : boolean = false;

  constructor( private activatedRoute: ActivatedRoute , private jsonService: JsonPlaceholderService ) { 

    
  }


  ngOnInit(): void {

    this.activatedRoute.params.pipe(
      switchMap(
        ({id}) => this.jsonService.getDataById<User>('users', id)
      )
    ).subscribe( user => { 

      this.user = user
      this.infoUser = true

      // user posts
      this.jsonService.getData<Posts[]>('users', this.user.id, 'posts').subscribe( p => {

        this.posts = p;
        
      });

      // user albums
      this.jsonService.getData<Albums[]>('users', this.user.id, 'albums').subscribe( a => {
        this.albums = a;
      });

      // user to dos
      this.jsonService.getData<Todos[]>('users', this.user.id, 'todos').subscribe( td => {
        this.todos = td;
      })

     });

  }

  
  userPosts(){

    this.infoPosts = true;
    this.back = true;

    this.infoUser = false;
    this.infoAlbums = false;
    this.infoTodos = false;

  }
  userAlbums(){

    this.infoAlbums = true;
    this.back = true;

    this.infoUser = false;
    this.infoPosts = false;
    this.infoTodos = false;

  }
  userTodos(){

    this.infoTodos = true;
    this.back = true;

    this.infoUser = false;
    this.infoPosts = false;
    this.infoAlbums = false;

  }

  menuBack(){

    this.infoUser = true;
    
    this.back = false;
    this.infoPosts = false;
    this.infoAlbums = false;
    this.infoTodos = false;

  }

  getDetails(args: string, id: number){
    console.log(args,id);
  }

}
