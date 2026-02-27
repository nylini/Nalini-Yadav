// Optional parameter function
function greetUser(name: string, title?: string): string {
  if (title) {
    return `Hello, ${title} ${name}!`;
  }
  return `Hello, ${name}!`;
}

console.log(greetUser("Nalini", "Dr."));
console.log(greetUser("Nalini"));

// Arrow function
const addNumbers = (a: number, b: number): number => a + b;

console.log(addNumbers(5, 3));
