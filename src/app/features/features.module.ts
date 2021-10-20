import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { TodosComponent } from './pages/todos/todos.component';


@NgModule({
  declarations: [
    MyprofileComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    AlbumsComponent,
    TodosComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
