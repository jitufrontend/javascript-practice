//var hoisting
console.log(myName);
var myName = 'Jitendra';


//let and const hoisting
console.log(myName);
let myName1 = 'Jitendra';


//function hoisting
test();
function test() {
    console.log("function hoisting");
}


//arrow function hoisting


test1();
let test1 = ()=>{
    console.log("arrow function");  
}