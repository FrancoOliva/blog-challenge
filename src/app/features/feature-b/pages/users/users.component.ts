import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../../core/interfaces/user.interface';
import { JsonPlaceholderService } from '../../../../core/services/json-placeholder.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  spinner: boolean = true;

  constructor( private jsonService: JsonPlaceholderService, private router: Router ) { }

  ngOnInit(): void {

    this.jsonService.getAll<User[]>('users').subscribe( u => {
      this.users = u;
      this.spinner = false;
    });
  }

  details(id:number){
    this.router.navigate(['blog-challenge/detalles-usuario', id]);
  }
}
