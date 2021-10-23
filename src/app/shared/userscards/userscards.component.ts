import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-userscards',
  templateUrl: './userscards.component.html',
  styleUrls: ['./userscards.component.css']
})
export class UserscardsComponent implements OnInit {

  @Input() user!: User;

  constructor() { }

  ngOnInit(): void {
  }

}
