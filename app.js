// Global and local scope
// Global is exited anywhere while local scope is run/executed within block{} 
// Local can not be accessed from outside of the block{} whereas Global can be executed both outside & inside the block{}
// Var is a Global scope
// var name = "Umair";
// let lastName = "Ahmed";
// const userName = "Ghani";
//   function myFunction() {
//    var name = "Hamid";
//   }
//   myFunction();
//   console.log(name);
// let name = "bob";
// name = "peter";
// function myFunction() {
//     console.log(name)
//     name = "orange";
// }
// myFunction();

// console.log(`my name is ${name} and I'm awesome`);
// let name = "Jacob"; // <=== Passing value to the second
//  name = "Mike";     // <=== then it passes reassign value into block scope
//  function calCulate() {
//     console.log(name); // Here, the variable has a name of Mike
//     name = "Peter";    // then another value is reassigned to Peter
//  }
//  calCulate(); // calling function execute the block scope 
//  console.log(`Hey, My name is ${name} and I'm broken today`);// here the name is Peter
//  if (true) {
//     console.log(name); // Peter is here 
//     name = "Michael"   // Peter is replaced or reassigned to Michael
//  }
//  console.log(`Hey, My name is ${name} and I'm trying to learn basic JavaScript`); // Michael

// let name1 = "Hashim"; //Both Declared & assigned the value 
// name1 = "Shakir";   // Reassigning
// function myCalculation() {
//     console.log(name1); // Calling name1 into block scope <== Shakir  
//     name1 = "Hammad";   // Reassigning with the name Hammad
//     console.log(name1); // Hammad is existed inside the variable name1
//     function inner() {  // nested function 
//         name1 = "Inner name value"; // another reassigning value with "Inner anme value "
//         console.log(`This is from inner function ${name1}`);// here name1 has a value "Inner name value"
//     }
//     inner(); // This calling function executes the inner function block statement
// }
// myCalculation(); // This one executes outer function mean to say itself

// if (true) {
//     console.log(`${name1}`);
// }
// Local Scope
// Local scope can not be accessed from outside code 
// If the keyword is not a Var
let name = "baqir";
function myTesting(){
    console.log(name)
}
myTesting();
if (true) {

}
console.log(`My name is ${name} and I'm trying my best`);