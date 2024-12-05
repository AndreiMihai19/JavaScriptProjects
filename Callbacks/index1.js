//.map() same as forEach, 

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(numbers);

function square(element)
{
    return Math.pow(element,2);
}

function cube(element)
{
    return Math.pow(element,3);
}

//.filter()

let numbers1 = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(element)
{
    return element % 2 === 0;
}

function isOdd(element)
{
    return element % 2 === 1;
}


//.reduce() 

const prices = [5, 30, 10, 24, 90, 100];

const total = prices.reduce(sumTotal);

console.log(`$${total.toFixed(2)}`);

function sumTotal(accumulator, element)
{
    return accumulator + element;
}


//function declaration 

/*
function Hello()
{
    console.log("Hello");
}
    */
// function expressions 

const numbers2 = [1, 2, 3, 4, 5, 6];
const squares2 = numbers2.map(square);

console.log(squares2);


//function declaration
function square(element)
{
    return Math.pow(element,2);
}

//function expression

const squares3 = numbers2.map(function (element)
{
    return Math.pow(element,2);
});

console.log(squares3);

//arrow functions 

const bye = (name, age) => { console.log(`Hello ${name}`)
                        console.log(`You are ${age} years old`)
};

bye('Andrew',23);


const Sum = (x,y) => { return x + y; };

console.log(Sum(2,3));

