class Human {
  constructor(public name: string, public age: number) {}

  callMyProfile() {
    console.log(this.name, this.age);
  }
}

const Nakata: Human = new Human("nakata", 24);
