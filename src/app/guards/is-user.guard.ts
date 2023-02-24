import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class IsUserGuard implements CanActivate {
  canActivate()
     {
      var role = JSON.parse(localStorage.getItem('user')!).roles[0];
      if(role !== "ROLE_USER") {
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'Solo un Comprador puede ingresar aqui',
          showConfirmButton: false,
          timer: 1500
        })
        return false;
      }
      return true;
  }

}
