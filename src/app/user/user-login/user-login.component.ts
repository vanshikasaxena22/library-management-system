import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-user-login',
  standalone: false,
  
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
   loginForm: FormGroup;
    submitted = false;
  
    constructor(private fb: FormBuilder) {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
    }
  
    onSubmit() {
      this.submitted = true;
      if (this.loginForm.valid) {
        console.log('Login successful', this.loginForm.value);
        // Perform login API call here
      }
    }
  

}
