import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';

import { BasicModalComponent } from '../../shared/modals/basic-modal/basic-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  animal: string;
  name: string;

  constructor(public dialog: MdDialog) {}

  dialogConfig: any = {
    width: '300px',
    height: '350px'
  };

  openDialog(): void {

    this.dialogConfig.data = {name: this.name, animal: this.animal};

    const dialogRef = this.dialog.open(BasicModalComponent, this.dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
