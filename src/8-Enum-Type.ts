//Numeric Enums
console.log("Numeric Enums");

// PascalCase

const enum RollNumbers {
    Jonhn = 1,
    Kelly,
    Sandra,
    Joseph,
    Samantha,
}

console.log(RollNumbers.Jonhn);

const studentRollNumber1: RollNumbers = RollNumbers.Samantha;
const studentRollNumber2: RollNumbers = RollNumbers.Kelly;

console.log(studentRollNumber1, studentRollNumber2);

// String Enums
console.log("String Enums");

const enum StudentDetails {
    Name = "John",
    Major = "Computer Science",
    Class = "Senior",
}

const studentName: StudentDetails = StudentDetails.Name;
const studentMajor: StudentDetails = StudentDetails.Major;
const studentClass: StudentDetails = StudentDetails.Class;

console.log(studentName, studentMajor, studentClass);

// Heterogeneous Enums
console.log("Heterogeneous Enums");

const enum Student {
    Name = "John",
    Major = "Computer Science",
    Class = "Senior",
    ID = 1234,
    Age = 21,
}

const studentName1: Student = Student.Name;
const studentMajor1: Student = Student.Major;
const studentClass1: Student = Student.Class;
const studentID1: Student = Student.ID;
const studentAge1: Student = Student.Age;

console.log(
    `${studentID1} - ${studentName1} has a major in ${studentMajor1} and is a ${studentClass1} at the age of ${studentAge1}`
);
