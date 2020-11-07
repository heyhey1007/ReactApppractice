export class Todo {
  id: string | number;
  get(): number {
    if (typeof this.id === "string") {
      return Number(this.id);
    }
    return this.id;
  }
  title: string;

  constructor(id: number | string, title: string) {
    this.id = id;
    this.title = title;
  }
}
