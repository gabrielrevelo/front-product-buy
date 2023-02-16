import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth.service';
import { RolesService } from '../../../shared/services/roles.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {

  form: FormGroup;

  constructor(private auth$: AuthService, private role$: RolesService) {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      role: new FormControl(null, [Validators.required]),
    });
  }

  register() {
    let email = this.form.value.email;
    let password = this.form.value.password;
    let role = this.form.value.role;
    this.auth$.loginRegistre(email, password).then((token)=>{
      //console.log(token)
      this.role$.saveRoles(email, role,token);
    });
    

  }

}
