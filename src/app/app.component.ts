import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'product_buy';
  constructor(private login$: AuthService) { }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBwDJlChsaHaUGXvWwtesSs-DpIgpNeF5w",
      authDomain: "angular-509fd.firebaseapp.com"
      // apiKey: "AIzaSyBa-k4ybLVK1adbh_yb_vNotMCnc-u7x-U",
      // authDomain: "login-78788.firebaseapp.com"
    });


  }

  isLoged() {
    return this.login$.isLoged();
  }

  logout() {
    return this.login$.logout();
  }

}
