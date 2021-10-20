import { Component, OnInit } from '@angular/core';
import { JsonPlaceholderService } from '../../../core/services/json-placeholder.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private jsonService: JsonPlaceholderService) { }

  ngOnInit(): void {

    this.jsonService.getUser().subscribe( console.log );
    
  }

}
