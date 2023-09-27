const reverseAString = (str) => {
  let strArr = str.split(''); //convert string to array
  let reversedArr = strArr.reverse(); // reverse the array
  let reversedString = reversedArr.join(""); // convert revered array to string
  return reversedString

}

console.log(reverseAString("nikhil"))
