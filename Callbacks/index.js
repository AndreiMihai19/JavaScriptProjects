
sum(displayConsole,1,2)

function sum(callback,x,y)
{
    let result = x + y;
    callback(result);
}

function displayConsole(result)
{
    console.log(result);
}


//foreach  array.forEach(callback);

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(Triple);
numbers.forEach(Display);

function Display(element)
{
    console.log(element);
}

function Double(element, index, array)
{
    array[index] = element * 2;
}


function Triple(element, index, array)
{
    array[index] = element * 3;
}
