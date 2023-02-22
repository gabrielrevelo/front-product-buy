import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuard implements CanActivate {

  constructor() {}

  canActivate() {
    var role = JSON.parse(localStorage.getItem('user')!).roles[0];
    console.log("Rol", role)
    if(role !== "ROLE_ADMIN") {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Solo un Administrador puede ingresar aqui',
        showConfirmButton: false,
        timer: 1500
      })
      //alert("Solo un Administrador puede ingresar aqui")
      //this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
