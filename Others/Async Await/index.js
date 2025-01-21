function walkDog()
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {

            const dogwalked = false;

            if (dogwalked)
            {
                resolve("You walk the dog");
            }
            else 
            {
                reject("You didn t walk the dog");
            }

        }, 1500);
    });
}


function cleanKitchen()
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {

            const kitchenCleaned = true;

            if (kitchenCleaned)
            {
                resolve("You clean the kitchen");
            }
            else 
            {
                reject("You didn t clean the kitchen");
            }
        }, 2500);    
    });
}


function takeOutTrash()
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {

            const trashTakenOut = true;

            if (trashTakenOut)
            {
                resolve("You take out the trash");
            }
            else 
            {
                reject("You didn t take out the trash");
            }

        }, 500);    
    });
}


async function doChores()
{
    try{
        const walkDogResult = await walkDog();
        console.log(walkDogResult);
    
        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);
    
        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);
    
        console.log("You finished all the chores!")
    }
    catch(error){
        console.error(error);
    }
}

doChores();

//JSON 

const names = ["Andrei", "Mihai", "Andreea", "Ioana"];

const jsonString = JSON.stringify(names);

console.log(names);
console.log(jsonString);

const person = {
    "name": "Andrei",
    "age": 23,
    "isEmployed": true,
    "hobbies": ["football", "programming", "swimming"]
};

const jsonStringPerson = JSON.stringify(person);
console.log(person);
console.log(jsonStringPerson);

const people = [{
    "name": "Andrei",
    "age": 23,
    "isEmployed": true
}, 
{
    "name": "Andreea",
    "age": 22,
    "isEmployed": false
},
{
    "name": "Ioana",
    "age": 40,
    "isEmployed": true
},
{
    "name": "Mihai",
    "age": 33,
    "isEmployed": false
}
]

const jsonStringPeople= JSON.stringify(people);
console.log(people);
console.log(jsonStringPeople);

const jsonNames = `["Andrei", "Mihai", "Andreea", "Ioana"]`;
const jsonPerson = `{"name": "Andrei", "age": 23, "isEmployed": true, "hobbies": ["football", "programming", "swimming"]}`;
const jsonPeople = `[{"name": "Andrei", "age": 23, "isEmployed": true}, 
                 {"name": "Andreea", "age": 22, "isEmployed": false},
                 {"name": "Ioana", "age": 40, "isEmployed": true},
                 {"name": "Mihai", "age": 33, "isEmployed": false}]`;

const parseData = JSON.parse(jsonPeople);

console.log(parseData);

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.log("Error:" + error));