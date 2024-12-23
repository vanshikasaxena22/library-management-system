import { Component } from '@angular/core';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-admin-signup',
  standalone: false,
  
  templateUrl: './admin-signup.component.html',
  styleUrl: './admin-signup.component.css'
})
export class AdminSignupComponent {
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
