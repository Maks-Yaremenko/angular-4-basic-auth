import { Component, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnChanges {

  signInForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.createForm();
  }

  createForm() {
    this.signInForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  ngOnChanges() {
    this.signInForm.reset({
    });
  }


  onSubmit() {
    this.ngOnChanges();
  }
}
