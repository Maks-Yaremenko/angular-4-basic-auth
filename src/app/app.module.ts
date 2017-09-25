import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing";
import { ApiModule } from "./api/api.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
