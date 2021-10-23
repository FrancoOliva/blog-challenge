import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './pages/albums/albums.component';
import { HomeComponent } from './pages/home/home.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { PostsComponent } from './pages/posts/posts.component';
import { TodosComponent } from './pages/todos/todos.component';
import { UsersComponent } from './pages/users/users.component';




const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
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
        path: 'to-dos',
        component: TodosComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureBRoutingModule { }
