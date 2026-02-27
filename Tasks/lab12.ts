// ---------- Task 1: Enums ----------

// Numeric Enum
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// String Enum
enum Status {
  Pending = "PENDING",
  Success = "SUCCESS",
  Failed = "FAILED",
}

// Function accepting both enums
function printStatusOrDirection(
  value: Direction | Status
): void {
  console.log("Received:", value);
}

// Function calls
printStatusOrDirection(Direction.Up);
printStatusOrDirection(Status.Success);

// Bonus variables
let dir: Direction = Direction.Left;
let stat: Status = Status.Pending;

console.log("Direction:", dir);
console.log("Status:", stat);


// ---------- Task 2: Type Assertion ----------

// Function to read input value
function printInputValue(): void {
  const inputElement =
    document.getElementById("username") as HTMLInputElement | null;

  if (inputElement) {
    console.log("Input Value:", inputElement.value);
  }
}


// unknown type example
let value: unknown = "Hello TypeScript";

let lengthValue = (value as string).length;
console.log("String Length:", lengthValue);
