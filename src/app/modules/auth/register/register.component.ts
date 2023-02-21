import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private auth$: AuthService, private toast$: ToastrService){
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      role: new FormControl(null, [Validators.required]),
    });
  }

  register() {

    console.log(this.form.value.role.value)

    // this.auth$.register(this.form.value.email,this.form.value.password,this.form.value.role )
    //   .subscribe(
    //     {
    //       next: (data) => {

            
    //       },
    //       error: (e) => {
    //         console.log(e)
    //       },
    //       complete: () => { 
    //         this.toast$.success("Registro exitoso");
            
    //       },
    //     }
    //   );
  }

}
