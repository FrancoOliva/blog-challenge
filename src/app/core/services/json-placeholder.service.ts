import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Comments } from '../interfaces/comments.interface';
import { Posts } from '../interfaces/posts.interface';
import { Todos } from '../interfaces/todos.interface';

import { FormGroup } from '@angular/forms';
import { User } from '../interfaces/user.interface';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  url: string = 'https://jsonplaceholder.typicode.com';

  constructor( private http: HttpClient, private router: Router ) { }

  isON():Observable<boolean>{

    if( localStorage.getItem('userON') ){
      return of(true);
    } else {
      return of(false);
    }
    
  }

  logOut(){

    localStorage.removeItem('userON');
    this.router.navigate(['auth/login']);

  }

  
  // GET -> ex: users/1 - albums/1 - posts/1 - todos/1
  getDataById<T>( args1: string, args2: number):Observable<T>{
    return this.http.get<T>(`${ this.url }/${ args1 }/${ args2 }`);
  }


  // GET -> ex: users/1/albums - users/1/posts
  getData<T>( args1: string, args2: number , args3: string):Observable<T>{
    return this.http.get<T>(`${ this.url }/${ args1 }/${ args2 }/${ args3 }`);
  }

  // Get all data (users , posts, albums or TO DOs)
  getAll<T>( args: string ):Observable<T>{

    return this.http.get<T>(`${ this.url }/${ args }`);

  } 
  


  // ********************* -> Generalizar código si es necesario <- *********************
  // DELETE - CREATE - PATCH - UPDATE 
  deletePost(idPost: number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${ idPost }`);
  }

  createPost( form: FormGroup):Observable<Posts>{

    let data = {
      title: form.controls['title'].value,
      body: form.controls['body'].value,
      userId: form.controls['userId'].value
    }
    
    return this.http.post<Posts>('https://jsonplaceholder.typicode.com/posts', data );
  }

  // Comments
  getComments(idPost: number):Observable<Comments[]>{
    return this.http.get<Comments[]>(`https://jsonplaceholder.typicode.com/posts/${ idPost }/comments`);
  }

  

}
