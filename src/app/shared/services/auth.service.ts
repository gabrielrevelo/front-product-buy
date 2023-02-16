import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token!: string;

  constructor(private router: Router, private cookie$: CookieService,

  ) {

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


  async loginRegistre(email: string, password: string) {
    let tokenAux = ""
    const auth = getAuth();

   await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in 
        const user = userCredential.user;
        await user.getIdToken().then((token) => {
          //console.log(token)
          tokenAux = token;
        })

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    return tokenAux;

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

      window.location.reload();
    });
  }



}
