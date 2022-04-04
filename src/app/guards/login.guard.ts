import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router,private authService:AuthService){
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      if(this.authService.userLocalStorage || this.authService.userSessionStorage){  
        this.router.navigate(['/pages/home']);
        return false;
      }
      return true;
  }
  
}
