import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token!: string;

  constructor(private router: Router, private cookie$: CookieService) {

  }

  async login(email: string, password: string) {
    await firebase.auth().signInWithEmailAndPassword(email, password).then(

      response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            this.token = token;
            this.cookie$.set("token", this.token);
        
            this.router.navigate(['/']);
          }
        );
      }

    );

  }

  getIdToken() {
    //return this.token;
    return this.cookie$.get("token");
  }

  isLoged() {
    return this.cookie$.get("token");
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.token = "";
      this.cookie$.set("token", this.token);
      this.cookie$.set("role", "");
      this.router.navigate(['/']);
      window.location.reload();
    });
  }



}
