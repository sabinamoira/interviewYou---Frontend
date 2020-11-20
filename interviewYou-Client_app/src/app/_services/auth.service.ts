import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { LoginService } from '../login';
import { Router, CanActivate, CanActivateChild,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';



const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
        // private loginService: LoginComponent,
        // private userInfoService: UserInfoService
    
    
    ) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    // return this.checkLogin(url);
    return true;
}

canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
}

// checkLogin(url: string): boolean {
//     if (this.loginService.isLoggedIn() {
//         return true;
//     }
//     console.log("User is not logged - This routing guard prvents redirection to any routes that needs logging.");
//     //Store the original url in login service and then redirect to login page
//     // this.loginService.reloadPage = url;
//     this.router.navigate(['login',]);
//     return false;
// }




}