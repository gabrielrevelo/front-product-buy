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
    email: new FormControl(null, [Validators.required]),
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
        //window.location.replace('http://localhost:4200');
      },
      error: (e) => console.log(e),
      complete: () => console.info('complete')
    });
  }

}
