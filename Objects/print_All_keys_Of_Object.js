// Q. Display all the keys of an object

const Users ={
name : "Mike", age : 20,
name : "John", age : 19,
name : "Nikhil", age : 23,
name : "Mukesh", age : 20
}

// sol 1 :
console.log(Object.keys(Users));

// sol 2 :
for(key in Users){
    console.log(key)
}

// sol 3:
Object.keys(Users).forEach((key) =>{
    console.log(key)
})