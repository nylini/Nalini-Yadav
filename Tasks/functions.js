function greetUser(name, title) {
    if (title === void 0) { title = "Mr./Ms."; }
    var message = "Hello, ".concat(title, " ").concat(name, "!");
    console.log(message);
    return message;
}
greetUser("Nalini", "Ms.");
greetUser("Nalini");
// Arrow function for addition
var add = function (a, b) {
    return a + b;
};
// Arrow function for multiplication
var multiply = function (a, b) {
    return a * b;
};
// Calling functions
console.log("Addition:", add(5, 3));
console.log("Multiplication:", multiply(5, 3));
