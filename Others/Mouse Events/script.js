//eventListener 

/*
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

function changeColor(event)
{
    event.target.style.backgroundColor = "red";
    event.target.textContent = "Clicked";
}


myBox.addEventListener("click",changeColor);


myButton.addEventListener("click", event => {
    myBox.style.backgroundColor = "red";
    myBox.textContent = "Clicked";
});

myButton.addEventListener("mouseover", event => {
    myBox.style.backgroundColor = "blue";
});

myButton.addEventListener("mouseleave",event =>{
    myBox.style.backgroundColor = "green";
    myBox.textContent = "Click Me";
});
*/

// event Listener - key events

const myBullet = document.getElementById("myBullet");
const moveAmount = 100;
let x = 0;
let y = 0;


document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow"))
    {
        event.preventDefault();
        switch(event.key)
        {
            case "ArrowUp": 
                y -= moveAmount;
            break;
            case "ArrowDown": 
                y += moveAmount;
            break;
            case "ArrowLeft": 
                x -= moveAmount;
            break;
            case "ArrowRight": 
                x += moveAmount;
            break;
        }
        myBullet.style.marginTop=`${y}px`;
        myBullet.style.marginLeft=`${x}px`;

    }
});



