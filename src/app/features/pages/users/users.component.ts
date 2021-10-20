import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user.interface';
import { JsonPlaceholderService } from '../../../core/services/json-placeholder.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  mostrar: boolean = false;

  constructor(private jsonService: JsonPlaceholderService) { }

  ngOnInit(): void {
    this.jsonService.getUsers().subscribe( users => {
      this.users = users;
      this.mostrar = true;
    });
  }

}
