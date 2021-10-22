import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Comments } from 'src/app/core/interfaces/comments.interface';
import { JsonPlaceholderService } from '../../../core/services/json-placeholder.service';
import { Posts } from '../../../core/interfaces/posts.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user!: User;

  post!: Posts;

  storage: Posts[] = [];
  
  

  comments: Comments[] = [];

  text: string = 'Ver comentarios';

  mostrar: boolean = false;
  mostrar2: boolean = false;

  constructor( private activedRoute: ActivatedRoute, private jsonService: JsonPlaceholderService, private router: Router) { }

  ngOnInit(): void {

    if( localStorage.getItem('user') ){
      this.user = JSON.parse( localStorage.getItem('user')! );
    }

    if( localStorage.getItem('mispost') ){
      this.storage = JSON.parse( localStorage.getItem('mispost')! );

      this.activedRoute.params
      .subscribe( ({id}) => {

        let postId: number = parseInt(id);
        
        for(let i = 0; i < this.storage.length; i++){
          if( this.storage[i].id == postId ){
            this.post = this.storage[i];
            this.mostrar = true;
          }
        }
        
      });
    }

    // this.activedRoute.params
    // .pipe(
    //   switchMap( ({ id }) => this.jsonService.getPostById(id) )
    // )
    // .subscribe( post => {
    //   this.post = post;
      
    //   this.mostrar = true; // utilizar un spinner
    // });
  }

  openComents(){

    if( this.text == 'Ver comentarios' && this.comments.length == 0){


      this.jsonService.getComments(this.post.id).subscribe( comments => {

        this.comments = comments;
        this.mostrar2 = true;
        
        if(this.comments.length > 0){

          this.text = 'Ocultar comentarios';

        } else {
          this.text = 'No tiene comentarios';
        }
        
      });


        
    } else if( this.text == 'Ocultar comentarios'){
      this.mostrar2 = false;
      this.text = 'Ver comentarios';
    } else {
      this.mostrar2 = true;
      this.text = 'Ocultar comentarios';
    }
    
  }

  back(){

    this.router.navigate(['/home/mis-posts/', this.user.id]);

  }

}
