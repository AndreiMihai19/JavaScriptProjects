const randomBtn = document.getElementById("generateRandomBtn");
const numberLbl = document.getElementById("randomNumberLbl");
const min = 0;
const max = 100;

randomBtn.onclick = function() {
    let randomNumber = Math.floor(Math.random() * max) + min;
    numberLbl.textContent = String(randomNumber);
}