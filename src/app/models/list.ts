import { Todo } from './todo';

export class List {
  id: number;
  name: string;
  created: number;
  modified: number;
  todos?: Todo[];
}
