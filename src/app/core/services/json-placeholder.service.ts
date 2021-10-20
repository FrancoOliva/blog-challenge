import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class JsonPlaceholderService {

  constructor( private http: HttpClient) { }


  getUser():Observable<User>{
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/1');
  }


}
