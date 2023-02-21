import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  form: FormGroup;
  role: string = "";

  constructor(private auth$: AuthService, private toast$: ToastrService, private router$: Router) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      role: new FormControl(null, [Validators.required]),
    });
  }

  roleMapping() {
    if (this.form.value.role == "1") {
      this.role = "ROLE_USER"
    }
    if (this.form.value.role == "2") {
      this.role = "ROLE_ADMIN"
    }
  }

  register() {
    this.roleMapping()
    console.log(this.role)
   

    this.auth$.register(this.form.value.email,this.form.value.password,this.role )
      .subscribe(
        {
          next: (data) => {


          },
          error: (e) => {
            console.log(e)
          },
          complete: () => { 
            this.toast$.success("Registro exitoso");
            this.router$.navigate(['/auth/login']);

          },
        }
      );
  }

}
