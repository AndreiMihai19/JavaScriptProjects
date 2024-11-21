const diceNumber = document.getElementById("diceNumber");
const btnRollDice = document.getElementById("btnRoll");
const imgRoll = document.getElementById("imgRoll");

function RollDice(){
    let diceNumber = Math.floor(Math.random() * 6) + 1;
    return diceNumber;
}


btnRollDice.onclick = function () {
    let number = RollDice();

    switch (number)
    {
        case 1: 
            diceNumber.value=number;
            imgRoll.src="images/1.png";
            break;
        case 2: 
            diceNumber.value=number;
            imgRoll.src="images/2.png";
            break;
        case 3: 
            diceNumber.value=number;
            imgRoll.src="images/3.png";
            break;
        case 4: 
            diceNumber.value=number;
            imgRoll.src="images/4.png";
            break;
        case 5: 
            diceNumber.value=number;
            imgRoll.src="images/5.png";
            break;
        case 6: 
            diceNumber.value=number;
            imgRoll.src="images/6.png";
            break;
    }
}

