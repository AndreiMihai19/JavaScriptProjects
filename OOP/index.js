
/*
const person1 = {
    firstName: "Andrei",
    lastName: "Mihai",
    age: 23,
    isEmployed: true,
    sayHello: function() {console.log(`Hello! I m ${this.firstName}`)},
    eat: () => console.log("I m eating pizza! I love pizza!")
}

const person2 = {
    firstName: "Andreea-Ioana",
    lastName: "Mihai",
    age: 22,
    isEmployed: false, 
    sayHello: () => console.log("Hello! I`m Andreea!")
}

console.log(person2.firstName);
console.log(person2);

person1.sayHello();
person2.sayHello();

person1.eat();
person1.sayHello();



//Constructor

function Car(make, model, year,color)
{
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = () => console.log(`You drive the ${this.model}`)
}

const car1 = new Car("Ford","Mustang",2024,"red");
const car2 = new Car("Chevrolet","Camaro",2025,"blue");
console.log(car1);
console.log(car2);
car1.drive();


//Class

/*
class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price}`);
    }

    calculatesTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Product ("Shirt", 24.99);
product1.displayProduct();

const salesTax = 0.05;

const Total = product1.calculatesTotal(salesTax);
console.log(`Total price (with tax): $${Total.toFixed(2)}`);


//Static

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius)
    {
        return radius * 2;
    }

    static getCircumference(radius)
    {
        return 2* this.PI * radius;
    }

    static getArea(radius)
    {
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));

class User
{
    static userCount = 0; 

    constructor(username)
    {
        this.username = username;
        User.userCount++;
    }

    static getUserCount()
    {
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello()
    {
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Andrei");
const user2 = new User("Alexandra");
const user3 = new User("Marian");
console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(User.userCount);

user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount();


class Animal {
    alive = true;

    eat()
    {
        console.log(`This ${this.name} is eating`);
    }

    sleep()
    {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal
{
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    name = "hawk";

    fly(){
        console.log(`This ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();


//Super

class Animal
{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }

    move(speed)
    {
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed)
    {
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run()
    {
        console.log(`The ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed)
    {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim()
    {
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}

const rabbit = new Rabbit ("Joe", 1, 25);
const fish  = new Fish ("Nemo", 2, 12);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(fish.name);
console.log(fish.age);

rabbit.run();
fish.swim();



//getters and setters

class Rectangle{
    constructor(width,height)
    {
        this.width = width;
        this.height = height;
    }

    set width(newwidth){
        if(newwidth > 0)
        {
            this._width = newwidth;
        }
        else 
        {
            console.error("Width most be a positive number");
        }
    }

    set height(newheight){
        if(newheight > 0)
        {
            this._height = newheight;
        }
        else 
        {
            console.error("Height most be a positive number");
        }
    }

    get width()
    {
        return this._width;
    }

    get height()
    {
        return this._height;
    }
}

const rectangle = new Rectangle(3, 5);
console.log(rectangle.width);
console.log(rectangle.height);


class Person{
    constructor(firstName, lastName, age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    showInfo()
    {
        console.log(`First name: ${this.firstName}, Last name: ${this.lastName}, Age: ${this.age}`);
    }
}

class Student extends Person{
    constructor(firstName, lastName, age,note, hobby)
    {
        super(firstName, lastName, age);
        this.note = note;
        this.hobby = hobby;
    }

    set note(newNote)
    {
        if (newNote >= 1 && newNote <= 10)
        {
            this._note = newNote;
        }
        else 
        {
            console.error("Note must be between 1 and 10");
        }
    }

    set hobby(newHobby)
    {
        if (typeof newHobby == "string")
        {
            this._hobby = newHobby;
        }
        else
        {
            console.error("Hobby must be a string!!!");   
        }
    }

    get note()
    {
        return this._note;
    }

    showInfo()
    {
        super.showInfo();
        console.log(`Note: ${this.note}, Hobby: ${this._hobby}`);
    }
}

class Teacher extends Person{
    constructor(firstName, lastName, age,subject)
    {
        super(firstName,lastName, age)
        this.subject = subject;
    }

    set subject(newSubject)
    {

        if (typeof newSubject == "string")
        {
            this._subject = newSubject;
        }
        else
        {
            console.error("Subject must be a string!!!");   
        }
    }

    showInfo()
    {
        super.showInfo();
        console.log(`Subject: ${this._subject}`);
    }

    
}


const person1 = new Student("Andrei", "Mihai", 23, 1, "fotbal");
const person2 = new Teacher("Cerasela","Popescu",40,"Math");

person1.showInfo();
person2.showInfo();



//destructing 

//swap the value of two variables

let a=1;
let b=2;

[a,b]=[b,a];

console.log(a);
console.log(b);

//swap 2 elements in an array 

const colors = ["red","green","blue","black"];

[colors[0],colors[3]] = [colors[3],colors[0]];
console.log(colors);

//extract values from objects

const pers1 = {
    firstName: "Andrei", 
    lastName: "Mihai", 
    age: 23,
    job: "Software Dev",
}

const pers2 = {
    firstName: "Andreea", 
    lastName: "Mihai", 
    age: 22,

}

const {firstName, lastName, age, job = "unemployed"} = pers2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//destructure in function parameters 

function displayPerson({firstName,lastName,age,job = "unemployed"})
{
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

displayPerson(pers1);

*/

//Nested objects

/*
const person = {
    fullName: "Andrei Mihai",
    age: 23, 
    isStudent: true,
    hobbies: ["football", "developing", "hiking"],
    address: {
        street: "Crinilor",
        city: "Criscior",
        country: "Romania"
    }
}


for (const address in person.address)
{
    console.log(person.address[address]);
}



class Person
{
    constructor(name,age, ...address)
    {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address
{
    constructor(street, city, country)
    {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Andrei Mihai", 23, "Crinilor", "Criscior", "Romania");
console.log(person1);

//sort()

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
let numbers = [1,10,2,4,3,8,6,9,7];

fruits.sort();
fruits.sort();

console.log(fruits);
console.log(numbers);

numbers.sort((a,b) => b - a);

console.log(numbers);

const people = [ 
                {name: "Andrei", age: 40, gpa: 3.0},
                {name: "Matei", age: 27, gpa: 3.5}, 
                {name: "Ady", age: 23, gpa: 4.0},
                {name: "Manciu", age: 10, gpa: 9.2}
               ];

people.sort((a,b) => a.age - b.age);
console.log(people);

people.sort((a,b) => a.gpa - b.gpa);
console.log(people);

people.sort((a,b) => a.name.localeCompare(b.name));
console.log(people);



//shuffle arrays FISHER-YATES algorithm

const cards = ['A',2,3,4,5,6,7,8,9,10,'J','h','$'];

shuffle(cards);
console.log(cards);

function shuffle(array)
{
    for(let i = array.length - 1; i > 0; i--)
    {
        const random = Math.floor(Math.random() * (i+1));
        
        [array[i], array[random]] = [array[random], array[i]];
    }
    
}



//Date objects
//Date(year,month,day,hour,minute,second,ms)

const date = new Date();

console.log(date);
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
let minutes =date.getMinutes();

if (minutes < 10)
{
    minutes = "0" + minutes;
}

const currentTime = hour + ":" + minutes;

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(currentTime);


const date1 = new Date("2023-12-31");
const date2 = new Date("01-03-2023");

console.log(date2.getMonth());



//closure


function outer()
{
    let message = "Hello";
    function inner()
    {
        console.log(message);
    }
    inner();
}

outer();


function createCounter()
{

    let count = 0;

    function increment()
    {
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount()
    {
        return count;
    }

    return {increment, getCount};


}

const counter = createCounter();

counter.increment();
counter.increment();

console.log(`The current count is ${counter.getCount()}`);


function createGame()
{
    let score = 0;

    function increaseScore(points)
    {
        score += points;
        console.log(`+${points}pts`);
    }
    
    function decreaseScore(points)
    {
        score -= points;
        console.log(`-${points}pts`);
    }
    
    function getScore()
    {
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
    
}

const game = createGame();

game.increaseScore(5);
game.decreaseScore(2);
console.log(game.getScore());




//setTimeout()

function sayHello()
{
    window.alert("hello");
}

const timeoutId = setTimeout(sayHello, 3000);

clearTimeout(timeoutId);

*/

function startTimer()
{
    setTimeout(() => window.alert("Hello"),3000);
    
}