// ---------- Task 1: Enums ----------
// Numeric Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
// String Enum
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["Success"] = "SUCCESS";
    Status["Failed"] = "FAILED";
})(Status || (Status = {}));
// Function accepting both enums
function printStatusOrDirection(value) {
    console.log("Received:", value);
}
// Function calls
printStatusOrDirection(Direction.Up);
printStatusOrDirection(Status.Success);
// Bonus variables
var dir = Direction.Left;
var stat = Status.Pending;
console.log("Direction:", dir);
console.log("Status:", stat);
// ---------- Task 2: Type Assertion ----------
// Function to read input value
function printInputValue() {
    var inputElement = document.getElementById("username");
    if (inputElement) {
        console.log("Input Value:", inputElement.value);
    }
}
// unknown type example
var value = "Hello TypeScript";
var lengthValue = value.length;
console.log("String Length:", lengthValue);
