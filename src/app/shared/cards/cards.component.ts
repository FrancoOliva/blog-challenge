import { Component, Input, OnInit } from '@angular/core';
import { Posts } from 'src/app/core/interfaces/posts.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() posts!: Posts;

  message: string = 'No se encontraron posteos.';

  constructor( ) {

    
   }

  ngOnInit(): void {

    console.log(this.posts);
  }

}
