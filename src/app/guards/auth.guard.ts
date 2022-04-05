import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

constructor(private router: Router,private authService:AuthService){

}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    return this.isLogin();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]){
    return this.isLogin();
  }

  private isLogin():boolean{
    if(this.authService.userLocalStorage || this.authService.userSessionStorage){  
      return true;
    }
    this.router.navigate(['/auth/login']);
    return false;
  }
}
