// ------------------------------------------
// ------------Array Methods(ES6)------------
// ------------------------------------------

// -----Sort-----
//  Executes a reducer function (that you provide) on each element of the array, resulting in single output value.

const students = [
    {name : "Chamara", age : 22},
    {name : "Kasun", age : 25},
    {name : "Saman", age : 32},
    {name : "Prasad", age : 28},
    {name : "Sarath", age : 45},
];

const sortedStd = students.sort((std1, std2) => {
    return std1.age > std2.age ? 1 : -1;
}, 0);

console.log(sortedStd);

// Array elements are converted to strings, then sorted according to each character's Unicode code point value. 
const ages = [33,45,21,66,7,5,21,4,88];
const sortedAges = ages.sort();
console.log(sortedAges);
