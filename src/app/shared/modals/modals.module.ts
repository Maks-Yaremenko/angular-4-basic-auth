import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicModalComponent } from './basic-modal/basic-modal.component';
import { MdDialogModule, MdFormFieldModule, MdInputModule } from "@angular/material";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MdDialogModule,
    MdInputModule,
    MdFormFieldModule,
    FormsModule
  ],
  declarations: [BasicModalComponent]
})
export class ModalsModule { }
