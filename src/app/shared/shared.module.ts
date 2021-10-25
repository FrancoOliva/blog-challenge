import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { UserscardsComponent } from './userscards/userscards.component';
import { CardsComponent } from './cards/cards.component';
import { SearchInputComponent } from './search-input/search-input.component';




@NgModule({
  declarations: [
    UserscardsComponent,
    CardsComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule

  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    UserscardsComponent,
    CardsComponent,
    SearchInputComponent
    
  ]
})
export class SharedModule { }
