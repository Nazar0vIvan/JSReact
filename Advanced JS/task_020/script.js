"use strict";

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age; // underscore DOESN'T MAKE property unaccessible from external code
  }

  #surname = "Smith"; // private, MAKE property unaccessible from external code

  say = () => {
    console.log(`User name: ${this.name} ${this.#surname}, age ${this._age}`);
  };

  // getter
  get age() {
    return this._age;
  }

  // setter
  set age(age) {
    if (typeof age === "number" && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log("Invalid age!");
    }
  }
}

const person = new User("Mike", 27);

console.log(person._age); // 27
console.log(person.age);  // 27, getter

person.age = 99; // setter
console.log(person.age); // 27, getter

console.log(person.surname); // undefined
