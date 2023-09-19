// Q. Check if the user with the name "John" exists in the array of objects

const Users = [
{name : "Mike", age : 20},
{name : "John", age : 19},
{name : "Nikhil", age : 23},
{name : "Mukesh", age : 20}
]

// sol 1 :
console.log(Users.some((obj) => obj.name === "John")) 

// sol 2 :
const doesJohnExist = Users.find(obj => obj.name === "John")
console.log(doesJohnExist ? true : false)
