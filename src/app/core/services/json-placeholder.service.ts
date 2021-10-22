import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums } from '../interfaces/albums.interface';
import { Comments } from '../interfaces/comments.interface';
import { Posts } from '../interfaces/posts.interface';
import { Todos } from '../interfaces/todos.interface';
import { User } from '../interfaces/user.interface';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  constructor( private http: HttpClient ) { }

  // USER
  getUser():Observable<User>{
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/1');
  }
  
  getUserPosts(id: number):Observable<Posts[]>{
    return this.http.get<Posts[]>(`https://jsonplaceholder.typicode.com/users/${ id }/posts`);
  }

  // USERS - POSTS - ALBUMS
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getAllposts():Observable<Posts[]>{
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPostById(idPost: number):Observable<Posts>{
    return this.http.get<Posts>(`https://jsonplaceholder.typicode.com/posts/${ idPost }`);
  }

  getAllAlbums():Observable<Albums[]>{
    return this.http.get<Albums[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAllToDos():Observable<Todos[]>{
    return this.http.get<Todos[]>('https://jsonplaceholder.typicode.com/todos');
  }

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
