import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  isSpining: boolean = false;
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      checkPassword: [
        null,
        [Validators.required, this.confirmationValidator.bind(this)],
      ],
    });
  }

  confirmationValidator(control: FormControl): { [s: string]: boolean } | null {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.signupForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return null;
  }

  register(): void {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
