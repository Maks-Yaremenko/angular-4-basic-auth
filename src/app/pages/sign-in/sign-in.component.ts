import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../api/api.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit{

  user: any = {};
  returnUrl: string;
  error: any = false;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  onSubmit() {

    this.api.auth.signIn(this.user).subscribe(() => {
      this.router.navigate([this.returnUrl]);
      this.error = false;
    }, err => {
      console.log('err => ', err);
      this.error = true;
    });

  }
}
