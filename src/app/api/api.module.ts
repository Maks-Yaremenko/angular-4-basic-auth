import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { ApiService } from "./api.service";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./guard/auth.guard";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ApiService, AuthService, AuthGuard],
  declarations: []
})
export class ApiModule { }
