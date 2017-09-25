import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AuthGuard } from "./guard/auth.guard";

import { ApiService } from "./api.service";
import { AuthService } from "./auth/auth.service";

import { BaseUrlInterceptor } from "./interceptors/baseUrl.interceptor";
import { AuthInterceptor } from "./interceptors/auth.interceptor";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BaseUrlInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  declarations: []
})
export class ApiModule { }
