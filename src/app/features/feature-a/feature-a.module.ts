import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureARoutingModule } from './feature-a-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    FeatureARoutingModule,
    SharedModule
  ]
})
export class FeatureAModule { }
