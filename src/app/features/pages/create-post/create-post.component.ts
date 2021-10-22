import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/interfaces/user.interface';
import { JsonPlaceholderService } from '../../../core/services/json-placeholder.service';
import { Posts } from 'src/app/core/interfaces/posts.interface';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  user!: User;
  posts: Posts[] = [];

  postForm: FormGroup = this.fb.group({
    title: ['', Validators.required ],
    body: ['', Validators.required ],
    userId: [ 1, Validators.required]
  });

  constructor( private fb: FormBuilder, private jsonService: JsonPlaceholderService ) { 

    if( localStorage.getItem('user') ){
      this.user = JSON.parse( localStorage.getItem('user')! );
    }

    if( localStorage.getItem('mispost') ){
      this.posts = JSON.parse( localStorage.getItem('mispost')! );
    }
  }

  ngOnInit(): void {
  }

  createPost(){
    
    if( this.postForm.valid ){
      this.jsonService.createPost(this.postForm).subscribe( r => {
        
        this.posts.push( r );
        localStorage.setItem('mispost', JSON.stringify(this.posts) );
        this.postForm.reset();
      });
    }
  }

}
