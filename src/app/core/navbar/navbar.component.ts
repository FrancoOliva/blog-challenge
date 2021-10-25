import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../services/json-placeholder.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private jsonService: JsonPlaceholderService ) { }

  ngOnInit(): void {
  }

  logOut(){
    this.jsonService.logOut();
  }

}
