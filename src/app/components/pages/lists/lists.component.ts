import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { TodoService } from '../../../services/todo.service';
import { List } from '../../../models/list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  lists: List[];

  constructor(private router: Router, private title: Title, private service: TodoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.title.setTitle('Todo List - Lists');

    this.service.getLists().subscribe(r => {
      if (r.error != null) {
        this.toastr.error(r.error);
        return;
      }

      this.lists = r.value;
    });
  }
}
