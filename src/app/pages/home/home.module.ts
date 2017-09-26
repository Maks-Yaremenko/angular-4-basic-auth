import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MdButtonModule, MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ModalsModule } from '../../shared/modals';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MdInputModule,
    FormsModule,
    ModalsModule,
    MdButtonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
