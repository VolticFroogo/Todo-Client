import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Todo } from '../../../models/todo';

@Component({
  selector: 'app-todo-new',
  templateUrl: './todo-new.component.html',
  styleUrls: ['./todo-new.component.css']
})
export class TodoNewComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<TodoNewComponent>, @Inject(MAT_DIALOG_DATA) public todo: Todo) { }

  ngOnInit() {
    this.todo = new Todo();
  }
}
