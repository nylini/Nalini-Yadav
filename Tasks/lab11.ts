//  Task 3: Interface with Arrays 
interface Student {
  name: string;
  marks: number;
}

interface StudentList extends Array<Student> {}


const students: StudentList = [
  { name: "Nalini", marks: 85 },
  { name: "Rahul", marks: 78 },
  { name: "Priya", marks: 92 },
];


students.forEach((student) => {
  console.log(`Name: ${student.name}, Marks: ${student.marks}`);
});


// Task 4: Interface vs Type 

type PointType = {
  x: number;
  y: number;
};


interface PointInterface {
  x: number;
  y: number;
}


function printPoint(point: PointType | PointInterface): void {
  console.log(`Point: (${point.x}, ${point.y})`);
}


const p1: PointType = { x: 10, y: 20 };
const p2: PointInterface = { x: 5, y: 15 };


printPoint(p1);
printPoint(p2);

