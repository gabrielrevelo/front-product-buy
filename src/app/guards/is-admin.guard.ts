import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor() {}

  canActivate() {
    var role = JSON.parse(localStorage.getItem('user')!).roles[0];
    console.log("Rol", role)
    if(role !== "ROLE_ADMIN") {
      alert("Solo un Administrador puede ingresar aqui")
      //this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
