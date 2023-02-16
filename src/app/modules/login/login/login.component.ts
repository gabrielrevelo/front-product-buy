import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RolesService } from '../../../shared/services/roles.service';
import { Role } from '../../../interfaces/role.interface';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  form: FormGroup;
  role!: Role;
  roleActualUser: string;

  constructor(private login$: AuthService, private roles$: RolesService, private cookie$: CookieService) {
    this.roleActualUser = this.cookie$.get("role");
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  async login() {

    const email = this.form.value.email;
    const password = this.form.value.password;

    await this.login$.login(email, password);

    this.roles$.loadRoles().subscribe(
      role => {

        let data = Object.values(role)
        data.forEach(user => {
          if (user.email == email) {
            this.cookie$.set("role", user.role)
            this.roleActualUser = user.role;

          }
        });
        window.location.reload();
      }
    );

  }

  enviar() {
    this.roles$.loadRoles().subscribe(
      role => {

        let data = Object.values(role)
        data.forEach(user => console.log(user.role))
      }
    )

    console.log(this.roleActualUser)

    //this.roles$.saveRoles("usuario@mail.com", "ADMIN");

  }

}
