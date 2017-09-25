import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from "./home-routing.module";
import { MdDialogModule, MdInputModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { ModalsModule } from "../../shared/modals/modals.module";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MdDialogModule,
    MdInputModule,
    FormsModule,
    ModalsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
