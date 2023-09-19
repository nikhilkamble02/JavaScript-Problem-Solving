// Show the different ways of creating an object

- Object can be created 
- Object can also be created 
- Object can be created 
- Object can be created 

// 1. using Object constuctor
const object = Object.create({ key: value });


// 2. using Object literal form
const object = {
    key: value
}


// 3. using `new` keyword to constructor function
function getObject(key, value){
    this[key] = value;
}
const object = new getObject('key', 'value');


// 4. using Class
class Obj {
    constructor(key, value){
        this[key] = value;
    }
}

const object = new Obj('key', 'value');