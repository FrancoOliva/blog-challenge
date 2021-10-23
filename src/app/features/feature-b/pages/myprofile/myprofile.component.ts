import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  user!: User;
  info: boolean = false;

  constructor() {

    if( localStorage.getItem('userON') ){

      this.user = JSON.parse( localStorage.getItem('userON')! );
      this.info = true;
      
    }

   }

  ngOnInit(): void {   

    
  }

}
