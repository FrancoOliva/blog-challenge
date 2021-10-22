import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { PostsComponent } from './pages/posts/posts.component';
import { UsersComponent } from './pages/users/users.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { TodosComponent } from './pages/todos/todos.component';
import { UserPostsComponent } from './pages/user-posts/user-posts.component';
import { DetailsComponent } from './pages/details/details.component';
import { CreatePostComponent } from './pages/create-post/create-post.component';
import { UpdatePostComponent } from './pages/update-post/update-post.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'mi-perfil',
    component: MyprofileComponent
  },
  {
    path: 'usuarios',
    component: UsersComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'TO-DOs',
    component: TodosComponent
  },
  {
    path: 'mis-posts/:id',
    component: UserPostsComponent
  },
  {
    path: 'detalles/post/:id',
    component: DetailsComponent
  },
  {
    path: 'crear-post',
    component: CreatePostComponent
  },
  {
    path: 'modificar/:id',
    component: UpdatePostComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
