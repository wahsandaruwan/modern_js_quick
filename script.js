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

// -----------------------------------------------
// ------------Default Parameters(ES6)------------
// -----------------------------------------------

// function getYear(currentYear, years = 40){
//     return currentYear + years;
// }

// console.log(getYear(2021, 45));

// console.log(getYear(2021));

// -----------------------------------

// function multiply(num1, num2 = 5, num3 = 6){
//     return (num1 * num2) * num3;
// }

// console.log(multiply(10));

// console.log(multiply(10,10));

// -----------------------------------

// const bDay = function(name, birthYear = new Date()){
//     console.log(`${name} has born in ${birthYear.getFullYear()}`);
// }

// bDay('Nirmal', new Date('1996-03-05')); // Pass an expression as a parameter
// bDay('Prasad');

// ----------------------------------------
// ------------For Of Loop(ES6)------------
// ----------------------------------------

// Iterate arrays, strings, maps, nodelists and etc.

// const cities = ["Moratuwa", "Nugegoda", "Welisara", "Biyagama"];

// for(let x = 0; x < cities.length; x++){
//     console.log(cities[x]);
// }

// -----------------------------------

// const subjects = ["Maths", "Science", "Sinhala", "History", "Music"];

// for(let y of subjects){
//     console.log(y);
// }

// -----------------------------------

// const names = ["Lahiru", "Kasun", "Janith", "Sanduni", "Masha"];

// for(let k of names.entries()){ // Get each element as an entry with the index
//     console.log(k);
// }

// ------------------------------------
// ------------Symbols(ES6)------------
// ------------------------------------

// In the past JS had 5 primitive types (Number, String, Boolean, Null, Undefined). In ES6 new primitive type has introduced called symbols. Unique and immutable. They are tokens that may be used as unique ids.

const sym1 = Symbol(); // With Factory function

let fname = Symbol("fname"); // With a string inside brackets, String helps to identify the symbol
let lname = Symbol("lname");

console.log(fname === lname);

console.log(fname);
console.log(lname);

console.log(typeof fname);

console.log(fname.toString());