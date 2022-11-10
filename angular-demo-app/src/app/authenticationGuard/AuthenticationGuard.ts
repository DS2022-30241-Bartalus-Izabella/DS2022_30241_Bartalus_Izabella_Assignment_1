import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {AuthService} from "../services/AuthenticationService";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {

  constructor (
    private router: Router,
    private authService: AuthService
  ){}

  canActivate(
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.isAdmin()) {
      return true;
    } else if(this.authService.isClient()){
        return this.router.parseUrl('/my-devices');
       }
      else {
        this.authService.redirectUrl = state.url;
        return this.router.parseUrl('/login');
      }
  }

}
