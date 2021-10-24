import { Component, Input, OnInit } from '@angular/core';
import { Posts } from 'src/app/core/interfaces/posts.interface';
import { Todos } from 'src/app/core/interfaces/todos.interface';
import { Albums } from '../../core/interfaces/albums.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() post!: Posts;
  @Input() album!: Albums;
  @Input() todos!: Todos;

  @Input() isPost!: boolean;
  @Input() isAlbum!: boolean;
  @Input() isTodos!: boolean;

  message: string = 'No se encontraron posteos.';

  constructor( ) {

    
   }

  ngOnInit(): void {

    
  }

}
