
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonPlaceholderService } from '../../../../core/services/json-placeholder.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private jsonService: JsonPlaceholderService ) { }

  ngOnInit(): void {
  }

  login(){
    this.jsonService.getDataById('users','1').subscribe( user => {

      localStorage.setItem('userON', JSON.stringify( user ) );
      this.router.navigate(['blog-challenge/mi-perfil']);

    });
  }

}
