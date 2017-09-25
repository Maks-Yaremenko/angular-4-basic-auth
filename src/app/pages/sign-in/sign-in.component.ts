import { Component } from '@angular/core';
import { ApiService } from "../../api/api.service";

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent {

  user: any = {};
  error: any = false;

  constructor(private api: ApiService) {}

  onSubmit() {

    this.api.auth.login(this.user).subscribe(data => {
      console.log('data => ', data);
      this.error = false;
    }, err => {
      console.log('err => ', err);
      this.error = true;
    });

  }
}
