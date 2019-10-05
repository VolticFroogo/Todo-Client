import { Component, OnInit, Input } from '@angular/core';
import { MatCheckboxChange, MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';

import { Todo } from '../../models/todo';
import { TodoEditComponent } from '../dialogs/todo-edit/todo-edit.component';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private dialog: MatDialog, private service: TodoService, private toastr: ToastrService) { }

  ngOnInit() { }

  onCheckboxToggle(event: MatCheckboxChange) {
    this.todo.completed = event.checked;
    this.todo.modified = Math.floor(Date.now() / 1000);

    this.service.putTodo(this.todo).subscribe(error => {
      if (error != null) {
        this.toastr.error(error);
      }
    });
  }

  onEdit() {
    var original: string = JSON.stringify(this.todo);

    var dialogRef = this.dialog.open(TodoEditComponent, {
      data: this.todo
    });

    dialogRef.afterClosed().subscribe(() => {
      if (JSON.stringify(this.todo) == original)
        return;

      this.todo.modified = Math.floor(Date.now() / 1000);

      this.service.putTodo(this.todo).subscribe(error => {
        if (error != null) {
          this.toastr.error(error);
        }
      });
    });
  }
}
