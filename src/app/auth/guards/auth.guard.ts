import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authService.verificaAutenticacion().
      pipe(
        tap(estaAutenticado => {
          if (!estaAutenticado) {
            this.router.navigate(['./auth/login']);
          }
        })
      )
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> {
    // if (this.authService.auth.id) {
    //   return true;
    // }

    // console.log('Bloqueado por el AuthGuard - CanActivate');


    // return false;
    return this.checkAuthStatus();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean | Observable<boolean> {
    //   if (this.authService.auth.id) {
    //     return true;
    //   }

    //   console.log('Bloqueado por el AuthGuard - CanLoad');


    //   return false;
    return this.checkAuthStatus();
  }
}
