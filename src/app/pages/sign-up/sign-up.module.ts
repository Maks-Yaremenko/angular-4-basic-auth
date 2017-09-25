import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { ReactiveFormsModule } from "@angular/forms";
import { ApiModule } from "../../api/api.module";

@NgModule({
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ApiModule,
    ReactiveFormsModule
  ],
  declarations: [SignUpComponent]
})
export class SignUpModule { }
