import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ApiService } from "../../api/api.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user: any = {};
  message: string = '';
  returnUrl: string;
  signUpForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  createForm() {

    this.signUpForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })

  }

  prepareUser() {
    this.user = this.signUpForm.value;
  }

  onSubmit() {
    this.prepareUser();
    this.api.auth.signUp(this.user)
      .subscribe(() => {
        this.router.navigate([this.returnUrl]);
        this.message = '';
      }, err => {
        console.log('err => ', err);
        this.message = JSON.parse(err.error).error;
      })
  }

  get email() { return this.signUpForm.get('email'); }
  get password() { return this.signUpForm.get('password'); }

}
