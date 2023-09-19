// Q. Write a program to iterate over an array and print all the values of it


//  Arrays can be iterated by using its index to fetch the values
//  Arrays also can be iterated with for each style loops

let arr = [10, 20, 30, 40, 50];

// 1. using for loop 
for(let i = 0; i<arr.length; i++){
    console.log(arr[i])
}

// 2. using for-in loop 
for(let index in arr){
    console.log(arr[index])
}

// 3. using for-of loop
for(let value of arr){
    console.log(value)
}

// 4. usinf forEach 
arr.forEach(value => console.log(value))
