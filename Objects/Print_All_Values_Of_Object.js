// Q. Display all the values of an object


const Users ={
name : "Mike", age : 20,
name : "John", age : 19,
name : "Nikhil", age : 23,
name : "Mukesh", age : 20
}

// sol 1 :
console.log(Object.values(Users));

// sol 2 :
for(key in Users){
    console.log(Users[key])
}

// sol 3:
Object.values(Users).forEach((value) =>{
    console.log(value)
})