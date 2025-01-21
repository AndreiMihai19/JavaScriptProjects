const gameButtons = document.querySelectorAll(".game-buttons");
const playerChoise = document.getElementById("player-choise");
const computerChoise = document.getElementById("computer-choise");
const result = document.getElementById("result-message");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const resetButton = document.getElementById("reset-button")
let _playerChoise = "";
let _computerChoise = "";
let _playerScore = 0;
let _computerScore = 0;

gameButtons.forEach(button => {
    button.addEventListener("click", event => {

        const computer = Math.floor(Math.random() * 3) + 1;

        switch(computer)
        {
            case 1: 
                _computerChoise = "Rock"; 
                computerChoise.textContent = "Computer: ";
                computerChoise.textContent += _computerChoise; 
                break;
            case 2: 
                _computerChoise = "Paper"; 
                computerChoise.textContent = "Computer: ";
                computerChoise.textContent += _computerChoise; 
                break;
            case 3:
                _computerChoise = "Scissors";
                computerChoise.textContent = "Computer: ";
                computerChoise.textContent += _computerChoise; 
                break;
        }

        computerChoise.textContent = "Computer: ";
        computerChoise.textContent += _computerChoise;

        switch(button.id)
        {
            case "rockBtn": 
                _playerChoise = "Rock"; 
                playerChoise.textContent = "Player: ";
                playerChoise.textContent +=  _playerChoise;

                if (_computerChoise === "Scissors")
                {
                    _playerScore++;
                    result.textContent = "WIN";
                }
                else if (_computerChoise === "Paper")
                {
                    _computerScore++;
                    result.textContent = "LOST";
                }
                else
                {
                    result.textContent = "TIE";
                }
                break;
            case "paperBtn": 
                _playerChoise = "Paper"; 
                playerChoise.textContent = "Player: ";
                playerChoise.textContent +=  _playerChoise;

                if (_computerChoise === "Scissors")
                    {
                        _computerScore++;
                        result.textContent = "LOST";
                    }
                    else if (_computerChoise === "Rock")
                    {
                        _playerScore++;
                        result.textContent = "WIN";
                    }
                    else
                    {
                        result.textContent = "TIE";
                    }
                break;
            case "scissorsBtn":
                _playerChoise = "Scissors"
                playerChoise.textContent = "Player: ";
                playerChoise.textContent +=  _playerChoise;
                
                if (_computerChoise === "Scissors")
                    {
                        result.textContent = "TIE";
                    }
                    else if (_computerChoise === "Paper")
                    {
                        _playerScore++;
                        result.textContent = "WIN";
                    }
                    else
                    {
                        _computerScore++;
                        result.textContent = "LOST";
                    }
                break;
        }

        switch (result.textContent)
        {
            case "WIN":  result.style.color = "green";
                break;
            case "LOST": result.style.color = "red";
                break;
            case "TIE":  result.style.color = "black";
                break;
        }

        playerScore.textContent = "Player Score: ";
        playerScore.textContent += `${_playerScore}`;
        computerScore.textContent = "Computer Score: ";
        computerScore.textContent += `${_computerScore}`;

    });
});

resetButton.addEventListener("click", event => {
    playerChoise.textContent = "Player: ";
    computerChoise.textContent = "Computer: ";
    playerScore.textContent = "Player Score: ";
    computerScore.textContent = "Computer Score: ";
    _playerScore = 0;
    _computerScore = 0;
    result.textContent = "Result";
    result.style.color = "black";
});


