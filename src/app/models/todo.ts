export class Todo {
  id: number;
  name: string;
  completed: boolean;
  created: number;
  modified: number;

  constructor() {
    var date = new Date();

    this.created = Math.round(date.getTime() / 1000);
    this.modified = Math.round(date.getTime() / 1000);
  }
}
