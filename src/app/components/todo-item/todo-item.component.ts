import { Component, OnInit, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() { }

  onCheckboxToggle(event: MatCheckboxChange) {
    this.todo.completed = event.checked;
  }
}
