import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/core/interfaces/todos.interface';
import { JsonPlaceholderService } from '../../../core/services/json-placeholder.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todos[] = [];
  mostrar: boolean = false;

  constructor( private jsonService: JsonPlaceholderService ) { }

  ngOnInit(): void {

    // this.jsonService.getAllToDos().subscribe( todos => {
    //   this.todos = todos;
    //   this.mostrar = true;
    // });
  }

}
