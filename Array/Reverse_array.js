function reverseArray (array)  {
  const reveresedArr = [];
  for(let i = array.length-1; i>=0 ;i--){
    reveresedArr.push(array[i])
  }
  return reveresedArr;
}

console.log(reverseArray([1,2,3,4]))
