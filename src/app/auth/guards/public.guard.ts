import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  private checkAuthStatus(): boolean | Observable<boolean> {
    return this.authService.verificaAutenticacion().
      pipe(
        tap(estaAutenticado => {
          if (estaAutenticado) {
            this.router.navigate(['./']);
          }
        }),
        map(estaAutenticado => !estaAutenticado)
      )
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }
}
