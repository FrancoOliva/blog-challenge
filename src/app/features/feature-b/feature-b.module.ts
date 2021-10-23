import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureBRoutingModule } from './feature-b-routing.module';
import { CoreModule } from '../../core/core.module';
import { HomeComponent } from './pages/home/home.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { TodosComponent } from './pages/todos/todos.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent,
    MyprofileComponent,
    UsersComponent,
    PostsComponent,
    AlbumsComponent,
    TodosComponent
  ],
  imports: [
    CommonModule,
    FeatureBRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class FeatureBModule { }
