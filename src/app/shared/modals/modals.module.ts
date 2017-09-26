import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicModalComponent } from './basic-modal/basic-modal.component';
import { MdButtonModule, MdDialogModule, MdFormFieldModule, MdIconModule, MdInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MdDialogModule,
    MdInputModule,
    MdFormFieldModule,
    FormsModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: [BasicModalComponent],
  entryComponents: [BasicModalComponent]
})
export class ModalsModule { }
