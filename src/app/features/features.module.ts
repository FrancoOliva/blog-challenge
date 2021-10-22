import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { PostsComponent } from './pages/posts/posts.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { TodosComponent } from './pages/todos/todos.component';
import { SharedModule } from '../shared/shared.module';
import { UserPostsComponent } from './pages/user-posts/user-posts.component';
import { DetailsComponent } from './pages/details/details.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatePostComponent } from './pages/update-post/update-post.component';




@NgModule({
  declarations: [
    MyprofileComponent,
    HomeComponent,
    UsersComponent,
    PostsComponent,
    AlbumsComponent,
    TodosComponent,
    UserPostsComponent,
    DetailsComponent,
    CreatePostComponent,
    UpdatePostComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FeaturesModule { }
