import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent {

  user: any;

  constructor() {
    this.user = JSON.parse(localStorage.getItem("user")!);
  }

  logout() {
    localStorage.removeItem("user")
    localStorage.removeItem("cart")
    window.location.replace('http://localhost:4200');
  }

}
