const reverseArray = (array) => {
 let reveresedArray = [];
 for(let i = array.length-1; i>=0; i--){
   reveresedArray.push(array[i])
 }
 return reveresedArray


}

let array = [1,2,3,4];
console.log(reverseArray(array)); //[4,3,2,1]
