interface User {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: User = {
  id: 1,
  name: "Nalini",
  age: 20,
};

console.log("ID:", user1.id);
console.log("Name:", user1.name);
console.log("Age:", user1.age);

interface Calculator {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number;
}

const calculator: Calculator = {
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  },
};

console.log("Addition:", calculator.add(5, 3));
console.log("Multiplication:", calculator.multiply(5, 3));
