"use strict";
const data = [
    "Cosmos",
    "Star",
    "Galaxy",
    "Universe",
    100,
    200,
    300,
    400,
    500,
];
for (const index in data) {
    console.log(typeof index);
    console.log(typeof +index);
    console.log(`${+index + 1} - ${data[index]}`);
}
