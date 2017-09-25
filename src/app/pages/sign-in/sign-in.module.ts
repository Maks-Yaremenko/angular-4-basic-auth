import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import { ApiModule } from "../../api/api.module";

@NgModule({
  imports: [
    CommonModule,
    SignInRoutingModule,
    ApiModule,
    FormsModule
  ],
  declarations: [SignInComponent]
})
export class SignInModule { }
