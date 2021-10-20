import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [
    MyprofileComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
