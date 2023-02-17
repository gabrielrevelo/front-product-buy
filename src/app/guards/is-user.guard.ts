import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsUserGuard implements CanActivate {

  role: string;

  constructor(private cookie$: CookieService,  private router: Router){
    this.role = this.cookie$.get("role")
  }

  canActivate(){
    if(this.role !== "BUYER") {
      alert("Solo un Comprador puede ingresar aqui")
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
