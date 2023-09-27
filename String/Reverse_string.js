// first way
const reverseAString = (str) => {
  let strArr = str.split(''); //convert string to array
  let reversedArr = strArr.reverse(); // reverse the array
  let reversedString = reversedArr.join(""); // convert revered array to string
  return reversedString
} 


// 2nd way
// const reverseAString = (str) => {
//   let result = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// };

console.log(reverseAString("nikhil"))
