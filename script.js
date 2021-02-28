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