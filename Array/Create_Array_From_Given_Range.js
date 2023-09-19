// Q. Write a code to generate an array with range of numbers 

function createArray(from, to){
	let arr = [];
	for(let i = from; i<=to; i++){
		arr.push(i)
	}
	console.log(arr)
}

createArray(1,10)
