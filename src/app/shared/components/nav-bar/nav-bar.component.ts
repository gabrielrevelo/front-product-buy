import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit{

  roleActualUser: string;

  constructor(private auth$: AuthService, private cookie$: CookieService){
    this.roleActualUser = this.cookie$.get("role")
  }

  ngOnInit(): void {
      
  }

  isLoged(){
    return this.auth$.isLoged();
  }

  logout(){
    return this.auth$.logout();
  }

}
