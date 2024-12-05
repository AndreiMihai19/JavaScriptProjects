/*
function func1(callback)
{
    setTimeout(() => {console.log("Task 4");callback()}, 3000)
}

function func2()
{
    console.log("Task 1");
    console.log("Task 2");
    console.log("Task 3");
}

func1(func2);


//Error handling

try
{
    console.lag("Hello");
}
catch(error){
    console.log(`Error: ${error.message}`);
}
finally
{
    console.log("You have reached the end!");
}

*/
const username = "";
const welcomeMsg = document.getElementById("welcomeMsg");

welcomeMsg.textContent += username === "" ? ' Guest' : username;

document.title = "My Website";

console.dir(document);
