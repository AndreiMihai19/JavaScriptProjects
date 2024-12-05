/*
1. document.getElementById()       // ELEMENT OR NULL
2. document.getElementsByClassName() // HTML COLLECTION
3. document.getElementsByTagName() // HTML COLLECTION
4. document.querySelector()        // FIRST ELEMENT OR NULL 
5. document.querySelectorAll()     // NODELIST
*/

/*
const myHeading = document.getElementById("my-heading");
myHeading.style.color = "blue";
myHeading.style.textAlign = "center";

const fruits = document.getElementsByClassName("fruits");

fruits[0].style.color = "red";
fruits[1].style.color = "yellow";
fruits[2].style.color = "orange";
fruits[3].style.color = "yellow";

const _fruits =[];
i=0;
for (let fruit of fruits)
{
    fruit.style.background = "black";
    _fruits[i++] = fruit.textContent;
    console.log(fruit.textContent);
}

console.log(_fruits);

//or 

Array.from(fruits).forEach( fruit => {
    fruit.style.background = "blue";
});

/////////

const h4Elements = document.getElementsByTagName("h4");
const ulElements = document.getElementsByTagName("ul");
const liElements = document.getElementsByTagName("li");

console.log(h4Elements);

for (let h4Element of h4Elements)
{
    h4Element.style.backgroundColor = "blue";
}

console.log(ulElements);

for (let ulElement of ulElements)
{
    ulElement.style.backgroundColor = "red";
}

console.log(liElements);

for (let liElement of liElements)
{
    liElement.style.backgroundColor = "yellow";
}

const element = document.querySelector(".fruits");

element.style.backgroundColor = "yellow";

const foods = document.querySelectorAll("li");

console.log(foods);

for(let food of foods)
{
    console.log(food.textContent);
}

//or

foods.forEach(food => {
    food.style.backgroundColor = "green";
})



//DOM Navigation 

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


const element = document.getElementById("root-vegetables");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "red";

const nextSibling =  element.nextElementSibling;
nextSibling.style.backgroundColor = "green";

const previousSibling = element.previousElementSibling;
previousSibling.style.backgroundColor = "blue";

const parent = element.parentElement;
parent.style.backgroundColor = "pink"; 

const element1 = document.getElementById("fruits");
const children = element1.children;
console.log(children);
console.log(element1);
children[2].style.backgroundColor = "white";


const newH1 = document.createElement("h1");
newH1.textContent = "I like pizda";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

//document.body.append(newH1);
//document.body.prepend(newH1);
//document.getElementById("box2").append(newH1);

//const box2 = document.getElementById("box2");

//document.body.insertBefore(newH1,box3);

//CASE: WHAT CAN WE DO IF WE DON T HAVE ID`S???

//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1,boxes[2]);

document.getElementById("box2").append(newH1);

//remove html element

document.getElementById("box2").removeChild(newH1);
*/


const newListItem = document.createElement("li");
newListItem.textContent = "coconut";

//document.getElementById("fruits").append(newListItem);

const listOfFruits = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem,listOfFruits[0]);

document.getElementById("fruits").removeChild(newListItem);