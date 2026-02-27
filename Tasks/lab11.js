var students = [
    { name: "Nalini", marks: 85 },
    { name: "Rahul", marks: 78 },
    { name: "Priya", marks: 92 },
];
students.forEach(function (student) {
    console.log("Name: ".concat(student.name, ", Marks: ").concat(student.marks));
});
function printPoint(point) {
    console.log("Point: (".concat(point.x, ", ").concat(point.y, ")"));
}
var p1 = { x: 10, y: 20 };
var p2 = { x: 5, y: 15 };
printPoint(p1);
printPoint(p2);
