const checkbox = document.getElementById("checkbox");
const radioVisa = document.getElementById("radio1");
const radioMasterCard = document.getElementById("radio2");
const radioPayPal = document.getElementById("radio3");
const submit = document.getElementById("submit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submit.onclick = function () {
    if (checkbox.checked)
    {
        subResult.textContent = "You are subscribed :)";
    }
    else 
    {
        subResult.textContent = "You are not subscribed :(";
    }

    if (radioVisa.checked)
    {
        paymentResult.textContent = "You have chosen Visa";
    }
    else if (radioMasterCard.checked){
        paymentResult.textContent = "You have chosen MasterCard";
    }
    else if (radioPayPal.checked){
        paymentResult.textContent = "You have chosen Paypal";
    }
    else 
    {
        paymentResult.textContent = "You have chosen nothing";
    }
}