import { Component, OnInit } from '@angular/core';
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

  constructor(private jsonService: JsonPlaceholderService) { }

  ngOnInit(): void {

    this.jsonService.getUser().subscribe( user => {
      
      this.user = user;

      this.mostrar = true;

      localStorage.setItem('user', JSON.stringify(this.user) );
    });

  }

  posts(){
    console.log('mostrar todos los posts');
  }

  albums(){
    console.log('mostrar todos los albums');
  }

  todos(){
    console.log('mostrar todos los to dos');
  }

}
