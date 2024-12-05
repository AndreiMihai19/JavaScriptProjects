
/*
//NodeList
let buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

//ADD HTML/CSS PROPERTIES

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "yey";
});

//CLICK event listener

buttons.forEach(button => {
    button.addEventListener("click", event => {
  
        event.target.style.backgroundColor="red";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "blue";
    });
});

//Mouse event listeners

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        if(event.target.style.backgroundColor === "red")
        {
            event.target.style.backgroundColor = "red";
        }
        else 
        {
            event.target.style.backgroundColor = "green";
        }
    });
});

//ADD AN ELEMENT

const newButton = document.createElement("button");
newButton.textContent = "New Button";
newButton.classList = "myButtons";
document.body.appendChild(newButton);

buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

//REMOVE AN ELEMENT

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});

*/

//classList

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

const myButton = document.getElementById("myButton");
/*
myButton.classList.add("enabled");
myButton.classList.remove("enabled");
//myButton.classList.add("hover");


myButton.addEventListener("mouseover", event => {
    event.target.classList.toggle("hover");
});

myButton.addEventListener("mouseout", event => {
    event.target.classList.toggle("hover");
});
*/

myButton.classList.add("enabled");

let stat = true;



myButton.addEventListener("click", event => {

    switch (stat)
    {
        case true: event.target.classList.replace("enabled","disabled");
                   stat = false;
            break;
        case false: event.target.classList.replace("disabled","enabled");
                   stat = true;
            break;
    }
    if (event.target.classList.contains("disabled"))
    {
        event.target.textContent = "Disabled";
    }
    else 
    {
        event.target.textContent = "Enabled";
    }

});

