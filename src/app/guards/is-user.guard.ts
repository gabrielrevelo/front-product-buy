import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsUserGuard implements CanActivate {
  canActivate()
     {
      var role = JSON.parse(localStorage.getItem('user')!).roles[0];
      if(role == "ROLE_USER") {
        return true;
      }
      return false;
   
  }
  
}
