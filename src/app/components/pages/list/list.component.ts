import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { TodoService } from '../../../services/todo.service';
import { List } from '../../../models/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: List = new List();

  constructor(private router: Router, private title: Title, private service: TodoService, private toastr: ToastrService, private route: ActivatedRoute) { }

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
}
