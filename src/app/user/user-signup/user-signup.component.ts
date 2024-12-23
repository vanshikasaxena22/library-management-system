import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-user-signup',
  standalone: false,
  
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.css'
})
export class UserSignupComponent {
    signupForm: FormGroup;
    submitted = false;
  
    constructor(private fb: FormBuilder) {
      this.signupForm = this.fb.group(
        {
          name: ['', Validators.required],
          username: ['', Validators.required],
          contact: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
          password: ['', [Validators.required, Validators.minLength(8)]],
          confirmPassword: ['', Validators.required],
        },
        {
          validator: this.passwordMatchValidator,
        }
      );
    }
  
    passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
      return group.get('password')!.value === group.get('confirmPassword')!.value
        ? null
        : { mismatch: true };
    }
  
    onSubmit() {
      this.submitted = true;
      if (this.signupForm.valid) {
        console.log('Signup successful', this.signupForm.value);
        // Perform signup API call here
      }
    }
  

}
