// Problem Statement : Write a function which can concatenate 2 arrays.
// If only one array is passed it will duplicate it

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

// solution 1 :
function getArray1(arr1, arr2 = arr1){
	return [...arr1, ...arr2];
}

// solution 2 :
function getArray2(arr1, arr2 = arr1){
	return arr1.concat(...arr2);
}

// solution 3 :
function getArray3(arr1, arr2 = arr1){
	arr1.push(...arr2)
	return arr1
}

console.log(getArray1(arr1, arr2));
console.log(getArray2(arr1, arr2));
console.log(getArray3(arr1));
