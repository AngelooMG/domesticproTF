import { Component, OnInit } from '@angular/core';
import { Head } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-headerdialog',
  templateUrl: './headerdialog.component.html',
  styleUrls: ['./headerdialog.component.css']
})
export class HeaderdialogComponent implements OnInit{
constructor(private dialogRef: MatDialogRef<HeaderdialogComponent>){}

  ngOnInit(): void {}
  confirm(){
    this.dialogRef.close()
  }
}
