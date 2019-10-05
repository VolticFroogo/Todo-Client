import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ConfirmDeleteComponent>, @Inject(MAT_DIALOG_DATA) private name: string) { }

  ngOnInit() { }

  onConfirm() {
    this.dialogRef.close('confirm');
  }
}
