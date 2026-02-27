// ---------- Task 1 & Task 2 Combined ----------
var Student = /** @class */ (function () {
    // constructor
    function Student(name, age, rollNo) {
        this.name = name;
        this.age = age;
        this.rollNo = rollNo;
    }
    // method to show roll number
    Student.prototype.showRollNo = function () {
        console.log("Roll No:", this.rollNo);
    };
    return Student;
}());
// Create object
var student1 = new Student("Nalini", 20, 101);
// Print values
console.log("Name:", student1.name);
console.log("Age:", student1.age);
// Access roll number through method
student1.showRollNo();
// ❌ Error if uncommented
// console.log(student1.rollNo);
