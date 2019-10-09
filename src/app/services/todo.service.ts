import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { List } from '../models/list';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private http: HttpClient) { }

  public init() {
    this.getCsrf();
  }

  private getCsrf() {
    // Get CSRF token via AJAX.
  }

  public login(email: string, password: string): Observable<ValueWithError<boolean>> {
    return new Observable<ValueWithError<boolean>>((observer) => {
      observer.next({ value: true });
      observer.complete();
    });
  }

  public register(email: string, password: string): Observable<string> {
    return new Observable<string>((observer) => {
      observer.next(null);
      observer.complete();
    });
  }

  public getLists(): Observable<ValueWithError<List[]>> {
    return new Observable<ValueWithError<List[]>>((observer) => {
      observer.next({
        value: [
          {
            id: 1,
            name: 'Shopping',
            created: 0,
            modified: 0,
          },
          {
            id: 2,
            name: 'Work',
            created: 0,
            modified: 0,
          },
          {
            id: 3,
            name: 'Family shopping',
            created: 0,
            modified: 0,
          }
        ]
      });
      observer.complete();
    });
  }

  public getList(id: number): Observable<ValueWithError<List>> {
    return new Observable<ValueWithError<List>>((observer) => {
      observer.next({
        value: {
          id: 1,
          name: 'The solution',
          created: 0,
          modified: 0,
          todos: [
            {
              id: 1,
              name: 'Get milk',
              completed: true,
              created: 0,
              modified: 0
            },
            {
              id: 2,
              name: 'Drink milk',
              completed: false,
              created: 0,
              modified: 0
            },
            {
              id: 3,
              name: 'End existence',
              completed: false,
              created: 0,
              modified: 0
            },
          ]
        }
      });
      observer.complete();
    });
  }

  public putTodo(todo: Todo): Observable<string> {
    return new Observable<string>((observer) => {
      observer.next(null);
      observer.complete();
    });
  }

  public deleteTodo(id: number): Observable<string> {
    return new Observable<string>((observer) => {
      observer.next(null);
      observer.complete();
    });
  }

  public postTodo(todo: Todo, list: number) {
    return new Observable<string>((observer) => {
      observer.next(null);
      observer.complete();
    });
  }
}

export class ValueWithError<T> {
  value?: T;
  error?: string;
}

export class csrfResponse {
  csrf: string;
}
