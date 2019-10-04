import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private title: Title, private service: TodoService, private _location: Location, private toastr: ToastrService) { }

  form: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });

  ngOnInit() {
    this.title.setTitle('Todo List - Log in');
  }

  onBack() {
    this._location.back();
  }

  onSubmit() {
    this.service.login(
      this.form.get('email').value,
      this.form.get('password').value
    ).subscribe(r => {
      if (r.error != null) {
        this.toastr.error(r.error);
        return;
      }

      if (!r.value) {
        this.toastr.error('Invalid login combination');
        return;
      }

      this.router.navigate(['/lists']);
    });
  }

  emailError() {
    if (this.form.get('email').hasError('required'))
      return 'You must enter a value';

    if (this.form.get('email').hasError('email'))
      return 'Email is invalid';

    return 'Email is invalid';
  }

  passwordError() {
    if (this.form.get('password').hasError('required'))
      return 'You must enter a value';

    if (this.form.get('password').hasError('minlength'))
      return 'Password is too short';

    return 'Password is invalid';
  }
}
