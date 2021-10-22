import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Comments } from 'src/app/core/interfaces/comments.interface';
import { JsonPlaceholderService } from '../../../core/services/json-placeholder.service';
import { Posts } from '../../../core/interfaces/posts.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  post!: Posts;

  comments: Comments[] = [];

  text: string = 'Ver comentarios';

  mostrar: boolean = false;
  mostrar2: boolean = false;

  constructor( private activedRoute: ActivatedRoute, private jsonService: JsonPlaceholderService) { }

  ngOnInit(): void {

    this.activedRoute.params
    .pipe(
      switchMap( ({ id }) => this.jsonService.getPostById(id) )
    )
    .subscribe( post => {
      this.post = post;
      
      this.mostrar = true; // utilizar un spinner
    });
  }

  openComents(){

    if( this.text == 'Ver comentarios' && this.comments.length == 0){


      this.jsonService.getComments(this.post.id).subscribe( comments => {

        this.comments = comments;
        this.mostrar2 = true;
        
        this.text = 'Ocultar comentarios';
        
      });
        
    } else if( this.text == 'Ocultar comentarios'){
      this.mostrar2 = false;
      this.text = 'Ver comentarios';
    } else {
      this.mostrar2 = true;
      this.text = 'Ocultar comentarios';
    }


    
  }

}
