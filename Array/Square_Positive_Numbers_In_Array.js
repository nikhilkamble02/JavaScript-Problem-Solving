const arr = [1, -2, 5, 6, -4, 7];

const positiveNum = arr.filter((value) => value>0);
const positiveNumSquare = positiveNum.map((value) => value*value);

console.log(positiveNum) // [ 1, 5, 6, 7 ]

console.log(positiveNumSquare) //[ 1, 25, 36, 49 ]