import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './core/guards/auth-guard.guard';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/feature-a/feature-a.module').then( m => m.FeatureAModule)
  },
  {
    path: 'blog-challenge',
    loadChildren: () => import('./features/feature-b/feature-b.module').then( m => m.FeatureBModule),
    canActivate: [ AuthGuardGuard ],
    canLoad: [ AuthGuardGuard ]
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
