import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService){ }
  
  //반환 값이 true이면 해당 Component로 redirect
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    const isLoggedIn = this.auth.isLoggedIn();

    if(state.url === "/"){
      if(isLoggedIn)
        this.auth.navigate('/main');
      return !isLoggedIn;
    }

    return isLoggedIn;
  }
}
