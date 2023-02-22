import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  constructor(private authService: AuthService) {
    //this.roleActualUser = this.cookie$.get("role");
  }

  login() {
    var user = {
      username: this.form.value.email,
      password: this.form.value.password
    }

    this.authService.login(user).subscribe({
      next: (v) => {
        console.log('Login', v);
        localStorage.setItem('user', JSON.stringify(v));
        if(JSON.parse(localStorage.getItem('user')!).roles[0] === "ROLE_ADMIN")
          window.location.replace('http://localhost:4200/product/list');
        if(JSON.parse(localStorage.getItem('user')!).roles[0] === "ROLE_USER")
          window.location.replace('http://localhost:4200/buy');
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete')
    });
  }

}
