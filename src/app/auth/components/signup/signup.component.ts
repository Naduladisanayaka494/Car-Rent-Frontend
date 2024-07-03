import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  FormControl,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { NzMessageService } from "ng-zorro-antd/message";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  isSpining: boolean = false;
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder,private authService:AuthService,private message :NzMessageService,private router:Router ) {}

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

  register() {
    this.authService.register(this.signupForm.value).subscribe((res) => {
      console.log(res)
      if (res.id != null) {
        this.message.success("Signup successful", { nzDuration: 5000 });
        this.router.navigateByUrl("/login")
      } else {
        this.message.error("Something went wrong", { nzDuration: 5000 });
    }
    })
  }
}
