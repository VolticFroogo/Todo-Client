import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<TodoEditComponent>, @Inject(MAT_DIALOG_DATA) public todo: Todo) { }

  ngOnInit() { }

  onDelete() {
    this.dialogRef.close('delete');
  }

  createdDate() {
    return new Date(this.todo.created * 1000).toString();
  }

  modifiedDate() {
    return new Date(this.todo.created * 1000).toString();
  }
}
