//Get and declare the necessary html elements to be manipulated
let containerDiv = document.getElementById('container');
let userValue = document.getElementById('user-number');
let userSubmit = document.getElementById('user-submit');
let copyInput = document.getElementById('copy-input');
let promptText = document.getElementById('prompt');
let clearButton = document.getElementById('clear-all')

//Give the user hint on entering grid size in the text box
function entryHint(){
    promptText.textContent = "Enter a number between 2 and 99.";
}


//create a function that makes the grid per user input or on page load
function createDiv() {
    let number = userValue.value;
    if (number < 2 || number > 99 || isNaN(number)){
        promptText.textContent = "Make sure the number entered is between 2 and 99!";
    } else {
        promptText.textContent = "";
        userValue.textContent = ""
        copyInput.textContent = "";
        containerDiv.innerHTML = ""
        if(number < 2 || number > 99 || number == ""){
            for(let i = 0; i < 16; i++){
                
            }
        }
    }


}
    
   



//creating classlist for each div to be styled with css

//make squares generate colors on hover

//function to make a button generate random colors with cursor on hover

//function to make button clear all highlights

//function to make button erase specific squares on hover
