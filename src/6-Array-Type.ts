const numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

const strings: string[] = ["a", "b", "c"];
console.log(strings);

const mixData: (string | number | boolean)[] = [1, "a", true];
console.log(mixData);

const myNums: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
];
console.log(myNums);

const myNumsAndStrings: (number | string)[][] = [
    [1, 2, 3],
    ["a", "b", "c"],
];
console.log(myNumsAndStrings);
