const inputTemp = document.getElementById("inputTemp");
const checkCelsToFahr = document.getElementById("radioCels");
const checkFahrToCels = document.getElementById("radioFahr");
const btnSubmit = document.getElementById("btnSubmit");
const lblResult = document.getElementById("result");


function InputValidation(input)
{
    let validate = Number(input);

    if (validate == 0)
    {
        validate = true;
    }
    return validate;
}

function ConvertCelsToFahr(input)
{
    return (input * 9/5) + 32;
}

function ConvertFahrToCels(input)
{
    return (input - 32) * 5/9;
}

btnSubmit.onclick = function () {
    
    let input = inputTemp.value;

    if (Boolean(InputValidation(input)))
    {
        if (checkCelsToFahr.checked)
        {
            lblResult.textContent = parseFloat(ConvertCelsToFahr(input)).toFixed(1) + " °C";
        }
        else if (checkFahrToCels.checked)
        {
            lblResult.textContent = parseFloat(ConvertFahrToCels(input)).toFixed(1) + " °F";
        }
        else 
        {
            window.alert("Select any option!");
        }
    }
    else 
    {
        window.alert("Input is not a number!");
    }

}



