/*
function openFridge(...foods)
{
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "gyros";

//openFridge(food1,food2,food3,food4);

const foods = getFood(food1, food2, food3, food4);
console.log(foods);
*/

function sum(...numbers)
{
    let result = 0;
    for (let number of numbers){
        result+=number;
    }

    return result;
}

const total = sum(1, 2, 3, 4, 5);
console.log(total);