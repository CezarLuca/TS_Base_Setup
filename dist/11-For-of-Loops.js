"use strict";
const mixedData = ["pi", 3.14, "e", 2.71, "phi", 1.61];
for (let element of mixedData) {
    console.log(element);
}
for (let element of mixedData.entries()) {
    console.log(element[0], element[1]);
}
for (let [index, element] of mixedData.entries()) {
    console.log(`${index + 1} - ${element}`);
}
