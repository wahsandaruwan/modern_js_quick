// ----------------------------------------
// ------------Let & Const(ES6)------------
// ----------------------------------------

// Var is function scope | let & const are blocked scope

// -----Var-----

var num = 20;

function multiply(){
    var num1  = 30;
    console.log(num);
    console.log(num1);

    num = 40;
    console.log(num);

    var num1 = 0;
    console.log(num1);
}

multiply();

if(num > 10){
    var num2 = 200;
}

console.log(num2);

// -----------------------------------

// -----Let-----

let num = 10;

if(num < 11){
    let greet = "Hello";
    greet = "World!"; // Can't delcare but can replace the value
    console.log(greet);

    let num = 15;
    console.log(num);
}

// console.log(greet);
console.log(num);

// -----------------------------------

// -----Const-----

const num = 10;

if(num < 11){
    const greet = "Hello";
    // greet = "World!"; // Can't delcare or replace
    console.log(greet);

    const num = 15;
    console.log(num);
}

// console.log(greet);
console.log(num);

// ----------------------------------------------
// ------------Template Literals(ES6)------------
// ----------------------------------------------

// -----Concatenation-----

let name = "Kasun";
let age = 25;

let desc = "My name is "+name+" and my age is "+age;
console.log(desc);

// -----------------------------------

// -----Template Literals-----

let fName = "Chamara";
let lName = "Fernando";

let fullName = `My first name is ${fName} and my last name is ${lName}`;
console.log(fullName);

// -----------------------------------

function myName(name){
    return `My name is ${name.toUpperCase()}`;
}

console.log(myName('Nimal Silva'));

// ------------------------------------------
// ------------Rest Operator(ES6)------------
// ------------------------------------------

// Type of an array, used to handling function parameters

// -----Arguments-----

function mySalaries(sal){
    console.log(arguments);
}

mySalaries(1000,2000,3000,4000);

// -----------------------------------

// -----Rest-----

function myMarks(...marks){
    console.log(marks);
}

myMarks(60,50,88,77,81);

// --------------------------------------------
// ------------Spread Operator(ES6)------------
// --------------------------------------------

// Used with arrays, strings, objects to split the content, same syntax as Rest Operator

let a = [1,2,3,4,5];
let b = [6,7,8,9];

let c = [...a, ...b]; // Make one array using 2 arrays
console.log(c);

// -----------------------------------

let fullName = ["Kasun", "Darshana", "Perera"];

console.log(fullName);
console.log(...fullName); // Split array content

// -----------------------------------

let subject = "Science";

console.log(subject);
console.log(...subject); // Seperate a string

// -----------------------------------

let subject = {
    maths : 80,
    science: 66    
}

let personal = {
    name : 'Dasun',
    age : 24,
    ...subject // Spread an object
}

console.log(personal);

// -----------------------------------------------
// ------------Default Parameters(ES6)------------
// -----------------------------------------------

function getYear(currentYear, years = 40){
    return currentYear + years;
}

console.log(getYear(2021, 45));

console.log(getYear(2021));

// -----------------------------------

function multiply(num1, num2 = 5, num3 = 6){
    return (num1 * num2) * num3;
}

console.log(multiply(10));

console.log(multiply(10,10));

// -----------------------------------

const bDay = function(name, birthYear = new Date()){
    console.log(`${name} has born in ${birthYear.getFullYear()}`);
}

bDay('Nirmal', new Date('1996-03-05')); // Pass an expression as a parameter
bDay('Prasad');

// ----------------------------------------
// ------------For Of Loop(ES6)------------
// ----------------------------------------

// Iterate arrays, strings, maps, nodelists and etc.

// -----For-----

const cities = ["Moratuwa", "Nugegoda", "Welisara", "Biyagama"];

for(let x = 0; x < cities.length; x++){
    console.log(cities[x]);
}

// -----------------------------------

// -----For Of-----

const subjects = ["Maths", "Science", "Sinhala", "History", "Music"];

for(let y of subjects){
    console.log(y);
}

// -----------------------------------

const names = ["Lahiru", "Kasun", "Janith", "Sanduni", "Masha"];

for(let k of names.entries()){ // Get each element as an entry with the index
    console.log(k);
}

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

// --------------------------------------------
// ------------Arrow Functions(ES6)------------
// --------------------------------------------

// Expression that provides a shorthand for declaring anonymous functions. An anonymous function is a function without a name. An anonymous function is often not accessible after its initial creation.

// -----Function Declaration-----

function myAge(age){
    console.log(`My age is ${age}`);
}

myAge(23);

// -----------------------------------

// -----Function Expression-----

const myName = function(name){
    console.log(`My name is ${name}`);
}

myName("Dasun");

// -----------------------------------

// -----Arrow Functions-----

const subject = () => console.log("Maths");

subject();

// -----------------------------------

const city = (city) => {
    let out = `My city is ${city}`;
    return out;
}

console.log(city("Moratuwa"));

// -----------------------------------

setTimeout(function(){
    console.log("Hello....");
}, 5000);

// -----------------------------------

setTimeout(()=>console.log("Hello...."), 5000);

// -----------------------------------

const fact = function(n){
    let f = 1;
    for(let i = n; i > 1; i--){
        f *= i;
    }

    return f;
}

console.log(fact(3));

// -----------------------------------

const factA = (n) => {
    let f = 1;
    for(let i = n; i > 1; i--){
        f *= i;
    }

    return f;
}

console.log(factA(3));

// -----------------------------------

const myMarks = (...marks) => console.log(marks);

myMarks(33,44,22,66,78);

// -----------------------------------

const salCal = (salary, improvement = 5) => {
    let nSal = salary * ((improvement+100)/100);
    console.log(`New Salary is Rs. ${nSal}`);
}

salCal(10000, 10);
salCal(10000);

// --------------------------------------------------
// ------------Destructuring Objects(ES6)------------
// --------------------------------------------------

// Extract properties from objects and bind them to variables.

// -----Get Object Values-----

const user = {
    first : "Lahiru",
    last : "Perera",
    age : 25
}

const fname = user.first;
const age = user.age;

console.log(`My name is ${fname} and age is ${age}`);

// -----------------------------------

// -----Object Destructuring-----

const std = {
    name : "Chamara Silva",
    degree : "BSc Comp Sc.",
    age : 25,
    subjects : ["Java", "OS", "Comp Design", "Networking"],
    gpa : {
        first : 3.8,
        second : 3.6,
        third : 3.4
    }
}

const {name} = std;
console.log(`My name is ${name}`);

const {degree:d, age:a} = std;
console.log(`Degree is ${d} and age is ${a}`);

const {subjects} = std;
for(let i of subjects){
    console.log(i);
}

const {gpa:{first}} = std;
console.log(`GPA of the first year is ${first}`);

// -------------------------------------------------
// ------------Destructuring Arrays(ES6)------------
// -------------------------------------------------

// Extracting multiple properties from an array by taking the structure.

const names = ["Sanduni", "Chamara", "Sajith"];

const [n1, n2, n3] = names;

console.log(n1);
console.log(n2);
console.log(n3);

// -----------------------------------

const displaySubjects = () => ["Maths", "Science", "Sinhala"];

let [sub1, sub2] = displaySubjects();
console.log(sub2);

// ---------------------------------
// ------------Maps(ES6)------------
// ---------------------------------

// Collection of elements where each element is stored as a Key, value pair. Map object can hold both objects and primitive values as either key or value.

let map = new Map();
console.log(map);

map.set("fname", "Chamal");
map.set("lname", "Dias");
map.set("phone", 35346346);

console.log(`First name is ${map.get('fname')}`);
console.log(`Phone number is ${map.get('phone')}`);

console.log(map.has('email'));

console.log(map.size);

for(let x of map){
    // console.log(x);
    console.log(`${x[0]} : ${x[1]}`);
}

// ---------------------------------
// ------------Sets(ES6)------------
// ---------------------------------

// Similar to arrays but it doesn't accept duplicate values.

let set = new Set();
console.log(set);

set.add("Pasan");
set.add("Dasun");
set.add("Kasun");
set.add(5);
set.add(true);
set.add("Kasun");
set.add(5);
console.log(set);

for(let y of set){
    console.log(y);
}

// -----------------------------------

let nset = new Set(["Maths","Science",123]);
console.log(nset);

console.log(nset.size);

console.log(nset.has("Maths"));

// ----------------------------------------------
// ------------Classes & Methods(ES6)------------
// ----------------------------------------------

// JavaScript Classes are templates for JavaScript Objects. Objects are real life entities that has attributes and behaviours.

// -----Object Constructors & this Keyword-----
// Sometimes we need a "blueprint" for creating many objects of the same "type".
// this = The object that is executing the current function

console.log(this);

function Course(_subject){
    this.subject = _subject;
    this.getMarks = () => {
        console.log(`${this.subject} : 80`);
        console.log(this);
    }
}

let cou = new Course("Maths");
console.log(cou);
cou.getMarks();

// -----------------------------------

function sample(){
    console.log(this);
}

sample();

// -----------------------------------

// -----Classes, Constructor & Methods-----
// Constructor executed automatically when a new object is created. It is used to initialize object properties.

class Course{
    constructor(_subject){
        this.subject = _subject;
    }

    getMarks(){
        console.log(`${this.subject} : 75`);
    }
}

let cou = new Course("Science");
console.log(cou);
cou.getMarks();

// --------------------------------------------
// ------------Static Keywords(ES6)------------
// --------------------------------------------

// Static methods/prperties are called directly on the class, without creating an instance/objects

class Car{
    constructor(brand){
        this.brand = brand;
    }

    // Static property
    static company = "Ford";

    // Static Method
    static getPrice(tax){
        console.log(`Price is : ${tax+20000}`);
    }
}

console.log(Car.company);
Car.getPrice(2000);

// ----------------------------------------------
// ------------Getters & Setters(ES6)------------
// ----------------------------------------------

// Getters - Access properties | Setters - Mutate them. JavaScript can secure better data quality when using getters and setters.

// -----Normal function inside an Object-----

const Person = {
    fname : "Kasun",
    lname : "Tharaka",
    fullName(){
        return `${this.fname} ${this.lname}`;
    }
};

console.log(Person.fullName());

// -----------------------------------

// -----Getters & Setters inside an Object-----

const Person = {
    fname : "Kasun",
    lname : "Tharaka",
    // Getter
    get fullName(){
        return `${this.fname} ${this.lname}`;
    },
    // Setter
    set fullName(name){
        const parts = name.split(' ');
        this.fname = parts[0];
        this.lname = parts[1];
    }
};

console.log(Person.fullName);

Person.fullName = "Chamal Silva";

console.log(Person.fullName);

// -----------------------------------

// -----Getters & Setters inside a Class-----

class Square{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    // Getter
    get area(){
        return this.width * this.height;
    }

    // Setter
    set area(values){
        const val = values.split(',');
        this.width = Number(val[0]);
        this.height = Number(val[1]);
    }
}

let sq = new Square(10, 5);

console.log(sq.area);

sq.area = "2,10";

console.log(sq.area);

// ----------------------------------------
// ------------Inheritance(ES6)------------
// ----------------------------------------

// Access Methods & Properties of the base class in the derived class.

class Audi{
    constructor(model){
        this.model = model;
    }

    start(){
        return `${this.model} is starting...`;
    }
}

class Mini extends Audi{
    constructor(model, engine){
        super(model); // Call base class's constructor
        this.engine = engine;
    }

    powerGen(){
        return `${this.engine} cc Audi ${this.start()} is starting...`;
    }

    // Method overiding
    start(){
        return `${this.model} is not starting...`;
    }
}

let mn = new Mini("A7", 1500);
console.log(mn.start());
console.log(mn.powerGen());

// ----------------------------------------------------
// ------------Exponentiation Operator(ES7)------------
// ----------------------------------------------------

console.log(3**2);
console.log(5**5);

// -------------------------------------
// ------------Promises(ES6)------------
// -------------------------------------

// Promise is an Object. Use to deal with asynchronous operations. When we define a promise in JavaScript, it will be resolved when the time comes, or it will get rejected.

// For example, when we request data from the server by using a Promise, it will be in pending mode until we receive our data.

// -----Callbacks-----

const products = [
    {
        name: "Product 1",
        desc: "This is my sample product 1",
        price: 200
    },
    {
        name: "Product 2",
        desc: "This is my sample product 2",
        price: 300
    }
];

function getProducts(){
    setTimeout(() => {
        let output = '';
        products.forEach((product) => {
            output += `<div>
                    <h2>${product.name}</h2>
                    <p>${product.desc}</p>
                    <h4>${product.price}</h4></div>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function addProducts(product, callback){
    setTimeout(() => {
        products.push(product);
        callback();
    }, 2000);
}

addProducts({name: "Product 3", desc: "This is my sample product 3", price: 500}, getProducts);

// -----------------------------------

// -----Promises-----

let pr = new Promise((resolve, reject) => {
    let ans = 2 + 5;
    setTimeout(() => {
        if(ans == 7){
            resolve('completed');
        }
        else{
            reject('not completed');
        }
    },3000);
});

pr.then((msg) => {
    console.log(`Promise has ${msg}`);
}).catch((msg) => {
    console.log(`Promise has not ${msg}`);
});

// -----------------------------------

const products = [
    {
        name: "Product 1",
        desc: "This is my sample product 1",
        price: 200
    },
    {
        name: "Product 2",
        desc: "This is my sample product 2",
        price: 300
    }
];

function getProducts(){
    setTimeout(() => {
        let output = '';
        products.forEach((product) => {
            output += `<div>
                    <h2>${product.name}</h2>
                    <p>${product.desc}</p>
                    <h4>${product.price}</h4></div>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function addProducts(product){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ln = products.length;
            products.push(product);

            if(products.length > ln){
                resolve("Product added");
            }
            else{
                reject("Product not added");
            }           
        }, 2000);
    });
}

addProducts({name: "Product 3", desc: "This is my sample product 3", price: 500}).then((res) => {
    getProducts();
    console.log(res);
}).catch((err) => {
    console.error(err);
});

// -----------------------------------

function getUserCountry(url){
    return new Promise((resolve, reject) => {
        const xmlreq = new XMLHttpRequest();
        xmlreq.open('GET', url);

        xmlreq.onload = () => {
            if(xmlreq.status == 200){
                resolve(xmlreq.response);
            }
            else{
                reject(Error(xmlreq.response));
            }
        }

        xmlreq.onerror = () => {
            reject(Error("Network Error"));
        }

        xmlreq.send();
    });
}

getUserCountry('https://api.nationalize.io/?name=kasun').then((response) => {
    console.log('Success', response);
}).catch((error) => {
    console.error('Failed', error);
});

// -----------------------------------

const pr1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 1 Success");
    }, 1000);
});

const pr2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 2 Success");
    }, 1000);
});

const pr3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise 3 Success");
    }, 3000);
});

// All
Promise.all([pr1, pr2, pr3]).then((values) => {
    console.log(values);
});

// ----------------------------------------
// ------------Async/Await(ES8)------------
// ----------------------------------------

// Async and Await make promises easier to write. Async makes a function return a Promise. Await makes a function wait for a Promise.

// -----Normal Promise-----

function dialEmergency(number){
    return new Promise((resolve, reject) => {
        console.log(`Dialing ${number}`);
        if(number === 119){
            resolve("What is your emergency");
        }
        else{
            reject("This is not the emergency number");
        }
    });
}

function processCall(response){
    return new Promise((resolve, reject) => {
        console.log("Calling emergency service");
        resolve(`Agent : ${response}`);
    });
}

dialEmergency(119).then((response) => {
    console.log("Response Received");
    return processCall(response);
}).then((processedResponse) => {
    console.log(processedResponse);
}).catch((error) => {
    console.error(error);
});

// -----------------------------------

// -----Async/Await-----

function dialEmergency(number){
    return new Promise((resolve, reject) => {
        console.log(`Dialing ${number}`);
        if(number === 119){
            resolve("What is your emergency");
        }
        else{
            reject("This is not the emergency number");
        }
    });
}

function processCall(response){
    return new Promise((resolve, reject) => {
        console.log("Calling emergency service");
        resolve(`Agent : ${response}`);
    });
}

async function handleOperation(){
    try{
        const response = await dialEmergency(119); // Wait until it finishes
        console.log("Response Received");
        const processedResponse = await processCall(response);
        console.log(processedResponse);
    }
    catch(error){
        console.error(error);
    }
}

handleOperation();

// -----Fetch API-----
// Provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses

console.log(fetch('https://jsonplaceholder.typicode.com/posts'));

fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
    if(res.ok){
        return res.json();
    }
    else{
        return Error('Something went wrong!');
    }
}).then((data) => {
    console.log(data);
});

// -----------------------------------

// Create a new post
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        title: 'samplep post 1',
        body: 'This is a sample post',
        userId: 11
    })
}).then((res) => {
    if(res.ok){
        return res.json();
    }
    else{
        return Error('Something went wrong!');
    }
}).then((data) => {
    console.log(data);
});

// ----------------------------------------------
// ------------Includes Function(ES7)------------
// ----------------------------------------------

let numbers = [1,2,3,4,5,6,7];
console.log(numbers.includes(0));

// -----------------------------------

let names = ["Chamara", "Kasun", "Sanduni"];
console.log(names.includes("Chamal"));

// -----------------------------------

let user = "Kasun Perera";
console.log(user.includes(" "));

// --------------------------------------------------------
// ------------PadStart & PadEnd Functions(ES8)------------
// --------------------------------------------------------

// Pads the current string with another string until the resulting string reaches the given length.

// -----PadStart-----
let name = "Dasun";
console.log(name.padStart(10, 'e'));

// -----------------------------------

// -----PadEnd-----

let subject = "Science";
console.log(subject.padEnd(10, '.'));

// -------------------------------------------
// ------------Object Entries(ES8)------------
// -------------------------------------------

// Returns an array of a given object's own key value pairs

const data = {
    name : "Dasun Perera",
    email : "dasun@gmail.com",
    phone : 123446
}

console.log(Object.entries(data));

for(let [key, val] of Object.entries(data)){
    console.log(`${key} : ${val}`);
}