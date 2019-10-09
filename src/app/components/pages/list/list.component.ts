import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material';

import { TodoService } from '../../../services/todo.service';
import { Todo } from '../../../models/todo';
import { List } from '../../../models/list';
import { TodoNewComponent } from '../../dialogs/todo-new/todo-new.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: List = new List();

  constructor(private router: Router, private title: Title, private service: TodoService, private toastr: ToastrService, private route: ActivatedRoute, private dialog: MatDialog) { }

  ngOnInit() {
    this.list.id = parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.service.getList(this.list.id).subscribe(r => {
      if (r.error != null) {
        this.toastr.error(r.error);
        return;
      }

      this.list = r.value;

      this.title.setTitle(`Todo List - ${ this.list.name }`);
    });
  }

  deleteTodo(id: number) {
    this.list.todos = this.list.todos.filter(t => t.id !== id);
  }

  onNewTodo() {
    var dialogRef = this.dialog.open(TodoNewComponent);

    dialogRef.afterClosed().subscribe((todo: Todo) => {
      if (todo == null)
        return;

      this.list.todos.push(todo);

      this.service.postTodo(todo, this.list.id).subscribe(error => {
        if (error != null) {
          this.toastr.error(error);
          return;
        }
      });
    });
  }
}
