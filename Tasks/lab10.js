var user1 = {
    id: 1,
    name: "Nalini",
    age: 20,
};
console.log("ID:", user1.id);
console.log("Name:", user1.name);
console.log("Age:", user1.age);
var calculator = {
    add: function (a, b) {
        return a + b;
    },
    multiply: function (a, b) {
        return a * b;
    },
};
console.log("Addition:", calculator.add(5, 3));
console.log("Multiplication:", calculator.multiply(5, 3));
