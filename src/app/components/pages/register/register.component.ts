import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../login/login.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private title: Title, private service: TodoService, private _location: Location, private toastr: ToastrService) { }

  form: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      this.confirmValidator
    ])
  });

  ngOnInit() {
    this.title.setTitle('Todo List - Register');
  }

  onBack() {
    this._location.back();
  }

  onSubmit() {
    this.service.register(
      this.form.get('email').value,
      this.form.get('password').value
    ).subscribe(error => {
      if (error != null) {
        this.toastr.error(error);
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
      return 'Must be at least 6 characters';

    return 'Password is invalid';
  }

  confirmPasswordError() {
    if (this.form.get('confirmPassword').hasError('required'))
      return 'You must enter a value';

    if (this.form.get('confirmPassword').hasError('match'))
      return 'Passwords must match';

    return 'Confirm Password is invalid';
  }

  confirmValidator(control: AbstractControl): {[key: string]: boolean} | null {
    var password: AbstractControl = control.root.get('password');

    if (password != null && control.value != password.value)
      return { 'match': true };

    return null;
  }
}
