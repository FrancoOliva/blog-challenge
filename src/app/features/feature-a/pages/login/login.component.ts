
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonPlaceholderService } from '../../../../core/services/json-placeholder.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    email: ['leanne@email.com', Validators.required ],
    password: ['123456789', Validators.required ]
  });

  message1: string = '';
  message2: string = '';
  emailError: boolean = false;
  passError: boolean = false;

  constructor(private router: Router, private jsonService: JsonPlaceholderService, private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  login(){

    if( !this.loginForm.valid ){

      if( this.loginForm.controls['email'].errors ){
        this.message1 = 'Es necesario un email';
        this.emailError = true;
      }

      if( this.loginForm.controls['password'].errors ){
        this.message2 = 'Ingrese una contraseña';
        this.passError = true;
      }

    } else {
      
      if( this.loginForm.controls['email'].value == 'leanne@email.com' ){

        if( this.loginForm.controls['password'].value == '123456789' ){

          this.jsonService.getDataById('users', 1).subscribe( user => {

            localStorage.setItem('userON', JSON.stringify( user ) );
            this.router.navigate(['blog-challenge/mi-perfil']);
      
          });

        } else {
          this.loginForm.controls['password'].setErrors({ required: true});
          this.message2 = 'Contraseña incorrecta'
          this.passError = true;
        }

      } else {
        this.loginForm.controls['email'].setErrors({ required: true});
        this.message1 = 'No hay usuarios registrados con este email'
        this.emailError = true;
        
      }
    }



  }

}
