// ---------- Task 3: Readonly Property ----------

class Student {
  readonly id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  showDetails(): void {
    console.log("ID:", this.id);
    console.log("Name:", this.name);
    console.log("Age:", this.age);
  }
}

const student1 = new Student(1, "Nalini", 20);

student1.showDetails();

// ❌ Error if uncommented
// student1.id = 5;


// ---------- Task 4: Inheritance ----------

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name);
    this.breed = breed;
  }

  // override method
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

const animal1 = new Animal("Generic Animal");
animal1.makeSound();

const dog1 = new Dog("Tommy", "Labrador");
dog1.makeSound();
console.log("Breed:", dog1.breed);
