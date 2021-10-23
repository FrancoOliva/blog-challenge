import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/core/interfaces/posts.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { JsonPlaceholderService } from '../../../../core/services/json-placeholder.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  user!: User;
  info: boolean = false;
  infoPosts: boolean = false;

  posts: Posts[] = [];

  constructor( private jsonService: JsonPlaceholderService) {

    if( localStorage.getItem('userON') ){

      this.user = JSON.parse( localStorage.getItem('userON')! );
      this.info = true;
      
    }

   }

  ngOnInit(): void {

    if( this.user ){

      this.jsonService.getData<Posts[]>('users', this.user.id, 'posts').subscribe( p => {

        this.posts = p;
        
      });

      console.log(this.posts);
      
    }
    
  }

  myPosts(){

    this.info = false;

    this.infoPosts = true;

  }

}
