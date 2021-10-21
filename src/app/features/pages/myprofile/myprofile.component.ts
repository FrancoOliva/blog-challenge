import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/user.interface';
import { JsonPlaceholderService } from '../../../core/services/json-placeholder.service';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  user!: User;
  mostrar: boolean = false;

  constructor(private jsonService: JsonPlaceholderService, private router: Router) { }

  ngOnInit(): void {

    this.jsonService.getUser().subscribe( user => {
      
      this.user = user;

      this.mostrar = true;

      localStorage.setItem('user', JSON.stringify(this.user) );
    });

  }

  posts(userID: number){
    
    this.router.navigate(['/home/mis-posts/', userID]);
  }

  albums(userID: number){
    console.log('mostrar todos los albums');
    console.log(userID);
  }

  todos(userID: number){
    console.log('mostrar todos los to dos');
    console.log(userID);
  }

}
