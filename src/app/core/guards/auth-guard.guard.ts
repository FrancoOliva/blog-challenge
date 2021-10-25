import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JsonPlaceholderService } from '../services/json-placeholder.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanLoad {

  constructor( private router: Router, private jsonService: JsonPlaceholderService ){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

     return this.jsonService.isON().pipe(
        tap( isON => {
          if(!isON){
            console.log('canActivate');
            this.router.navigate(['auth/login']);
          }
        })
      )

      
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    
      return this.jsonService.isON().pipe(
        tap( isON => {
          if(!isON){
            console.log('canLoad');
            this.router.navigate(['auth/login']);
          }
        })
      )
  }
}
