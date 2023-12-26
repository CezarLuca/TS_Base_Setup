let coursePrice: number = 29.99;
// coursePrice = "29.99"; // Error: Type '"29.99"' is not assignable to type 'number'.
let courseName: string = "TS Course";
let isFree: boolean = false;
// isFree = "false"; // Error: Type '"false"' is not assignable to type 'boolean'.
// isFree = 0; // Error: Type '0' is not assignable to type 'boolean'.
// Type boolean is not assignable to truthy/falsy values
console.log(
    "coursePrice: ",
    coursePrice,
    "courseName: ",
    courseName,
    "isFree: ",
    isFree
);
