// ----------------------------------------
// ------------Let & Const(ES6)------------
// ----------------------------------------

// Var is function scope | let & const are blocked scope

// var num = 20;

// function multiply(){
//     var num1  = 30;
//     console.log(num);
//     console.log(num1);
// }

// multiply();

// -----------------------------------

// var a = 40;
// console.log(a);

// var a = 50;
// console.log(a);

// -----------------------------------

// let num = 10;

// if(num < 11){
//     let greet = "Hello";
//     greet = "World!"; // Can't delcare but can replace the value
//     console.log(greet);

//     let num = 15;
//     console.log(num);
// }

// // console.log(greet);
// console.log(num);

// -----------------------------------

// const num = 10;

// if(num < 11){
//     const greet = "Hello";
//     // greet = "World!"; // Can't delcare or replace
//     console.log(greet);

//     const num = 15;
//     console.log(num);
// }

// // console.log(greet);
// console.log(num);

// ----------------------------------------------
// ------------Template Literals(ES6)------------
// ----------------------------------------------

// let name = "Kasun";
// let age = 25;

// let desc = "My name is "+name+" and my age is "+age;
// console.log(desc);

// -----------------------------------

// let fName = "Chamara";
// let lName = "Fernando";

// let fullName = `My first name is ${fName} and my last name is ${lName}`;
// console.log(fullName);

// -----------------------------------

// function myName(name){
//     return `My name is ${name.toUpperCase()}`;
// }

// console.log(myName('Nimal Silva'));

// ------------------------------------------
// ------------Rest Operator(ES6)------------
// ------------------------------------------

// Type of an array, used to handling function parameters

// function mySalaries(sal){
//     console.log(arguments);
// }

// mySalaries(1000,2000,3000,4000);

// -----------------------------------

// function myMarks(...marks){
//     console.log(marks);
// }

// myMarks(60,50,88,77,81);

// --------------------------------------------
// ------------Spread Operator(ES6)------------
// --------------------------------------------

// Used with arrays to split the content of the array, same syntax as Rest Operator

// let a = [1,2,3,4,5];
// let b = [6,7,8,9];

// let c = [...a, ...b]; // Make one array using 2 arrays
// console.log(c);

// -----------------------------------

// let fullName = ["Kasun", "Darshana", "Perera"];

// console.log(fullName);
// console.log(...fullName); // Split array content

// -----------------------------------

// let subject = "Science";

// console.log(subject);
// console.log(...subject); // Seperate a string

// -----------------------------------

// let subject = {
//     maths : 80,
//     science: 66    
// }

// let personal = {
//     name : 'Dasun',
//     age : 24,
//     ...subject
// }

// console.log(personal);