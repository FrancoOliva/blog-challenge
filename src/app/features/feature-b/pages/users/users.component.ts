import { Component, OnInit } from '@angular/core';
import { User } from '../../../../core/interfaces/user.interface';
import { JsonPlaceholderService } from '../../../../core/services/json-placeholder.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor( private jsonService: JsonPlaceholderService ) { }

  ngOnInit(): void {

    this.jsonService.getAll<User[]>('users').subscribe( u => {
      this.users = u;
    });
  }

}
