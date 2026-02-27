class Student {
 
  public name: string;

  private rollNo: number;

  public age: number;

  constructor(name: string, age: number, rollNo: number) {
    this.name = name;
    this.age = age;
    this.rollNo = rollNo;
  }

  showRollNo(): void {
    console.log("Roll No:", this.rollNo);
  }
}

const student1 = new Student("Nalini", 20,3945);

console.log("Name:", student1.name);
console.log("Age:", student1.age);

student1.showRollNo();


