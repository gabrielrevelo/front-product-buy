import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  form: FormGroup;
  role: string = "";
  flagBtn: boolean = false;

  constructor(private auth$: AuthService, private toast$: ToastrService, private router$: Router) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      passwordRepeat: new FormControl(null, [Validators.required]),
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


    this.auth$.register(this.form.value.email, this.form.value.password, this.role)
      .subscribe(
        {
          next: (data) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Registro exitoso',
              showConfirmButton: false,
              timer: 1500
            })
            this.router$.navigate(['/auth/login']);
          },
          error: (e) => {
            console.log(e)
          },
          complete: () => {
            // this.toast$.success("Registro exitoso");
            // this.router$.navigate(['/auth/login']);
          },
        }
      );
  }

  passwordMatch() {
    if (this.form.value.password !== this.form.value.passwordRepeat) {
      this.flagBtn = false;
      console.log(this.flagBtn, "diferent")

    }else{
      this.flagBtn = true;
      console.log(this.flagBtn)
    }

  }

}
