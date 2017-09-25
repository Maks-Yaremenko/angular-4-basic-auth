import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { ApiService } from "./api.service";
import { AuthService } from "./auth/auth.service";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ApiService, AuthService],
  declarations: []
})
export class ApiModule { }
