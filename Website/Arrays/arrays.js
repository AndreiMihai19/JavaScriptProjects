/*
let fruits = ["apple", "orange", "banana"];

fruits[1] = "coconut";

//fruits.push("orange");
//fruits.pop();
//fruits.unshift("mango");
//fruits.shift();

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

let numOfFruits = fruits.length;
console.log(numOfFruits);
*/

//spread operator = ... allows an iterable such as an array or string to be expanded into seperate elements

let numbers=[1,2,3,4,5];
let max=Math.max(...numbers);

console.log(numbers);
console.log(max);

let username="Mihai Andrei";
let letters=[...username].join("-");
console.log(letters);

let fruits = ["apple","orange","banana"];
let newFruits = [...fruits];

console.log(fruits);
console.log(newFruits);