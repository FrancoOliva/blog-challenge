import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/core/interfaces/todos.interface';
import { JsonPlaceholderService } from '../../../../core/services/json-placeholder.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todos[] = [];
  infoTodos: boolean = true;
  spinner: boolean = true;

  constructor( private jsonService: JsonPlaceholderService ) { }

  ngOnInit(): void {

    this.jsonService.getAll<Todos[]>('todos').subscribe( td => {

      this.todos = td;
      this.spinner = false;

    });

    
  }

}
