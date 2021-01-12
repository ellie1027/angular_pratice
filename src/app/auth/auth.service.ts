import { Injectable } from '@angular/core';
import { ApiGatewayService } from '../service/api-gateway.service';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

interface LoginInfo {
  //객체를 사용하려는 경우 키의 유형을 지정해야 합니다.
  [key: string]: any;

  id: string,
  password: string
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiGateWayService: ApiGatewayService,
    private router: Router
  ) { }

  login(id: string, password: string): Observable<boolean> {
    return this.apiGateWayService.get("assets/login-info.json")
      .pipe(
        map(info => id === info.id && password === info.password),
        tap(x => sessionStorage.setItem("login", JSON.stringify({id: id, password: password})))
      );
  }

  logout() {
    sessionStorage.removeItem("login");
    this.navigate('/');
  }

  get loggedIn() : LoginInfo {
    //type : string or null
    return JSON.parse(sessionStorage.getItem("login")  || '{}');
  }

  isLoggedIn(): boolean {
    return this.loggedIn != null
      && Object.keys(this.loggedIn).map(e => this.loggedIn[e]).length > 0;
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

}
