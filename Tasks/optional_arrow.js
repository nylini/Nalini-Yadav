// Optional parameter function
function greetUser(name, title) {
    if (title) {
        return "Hello, ".concat(title, " ").concat(name, "!");
    }
    return "Hello, ".concat(name, "!");
}
console.log(greetUser("Nalini", "Dr."));
console.log(greetUser("Nalini"));
// Arrow function
var addNumbers = function (a, b) { return a + b; };
console.log(addNumbers(5, 3));
