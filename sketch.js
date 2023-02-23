//Get and declare the necessary html elements to be manipulated
let containerDiv = document.getElementById('container');
let userValue = document.getElementById('user-number');
let userSubmit = document.getElementById('user-submit');
let copyInput = document.getElementById('copy-input');
let promptText = document.getElementById('prompt');
let clearButton = document.getElementById('clear-all');

//make functions run at the click of buttons and checkboxes
userValue.addEventListener('focus', entryHint);
userValue.addEventListener('keyup', duplicateGrid);
userSubmit.addEventListener('click', createGrid);
clearButton.addEventListener('click', clearGrid);

//declare function to make divs
createGrid();
draw();

//duplicate the grid according to user input
function duplicateGrid(){
    let userGrid = userValue.value;
    copyInput.textContent = "x" + userGrid;
}

//Give the user hint on entering grid size in the text box
function entryHint(){
    promptText.textContent = "Enter a number between 2 and 99.";
}


//create a function that makes the grid per user input or on page load
function createGrid() {
    let number = userValue.value;
    if (number < 0 || number > 99 || isNaN(number)){
        promptText.textContent = "Make sure the number entered is between 2 and 99!";
    } else {
        promptText.textContent = "";
        userValue.textContent = ""
        copyInput.textContent = "";
        containerDiv.innerHTML = ""
        if(number < 0 || number > 99 || number == ""){
            for(let i = 0; i < 16; i++){
                let row = document.createElement('div');
                row.classList.add('row')
                containerDiv.appendChild(row);
                for(let y = 0; y < 16; y++){
                    let column = document.createElement('div');
                    column.classList.add('column');
                    row.appendChild(column);
                }
            
            }
         } else{
                for(let i = 0; i < number; i++){
                    let row = document.createElement('div');
                    row.classList.add('row');
                    containerDiv.appendChild(row);
                    for(let y = 0; y < number; y++){
                        let column = document.createElement('div');
                        column.classList.add('column')
                        row.appendChild(column);
                    }
                } 
            }
        }
        //call the draw function to ensure the grids get created
        draw();
    }

    //adding event listener to all elements with the class "column" and allows drawing on page load with colors.
    function draw(){
        let columns = document.getElementsByClassName("column");
        for(let i = 0; i < columns.length; i++){
            columns[i].addEventListener("mouseover", changeColor);
        }
    function changeColor(){
        let blackColor = document.getElementById('black');
        let redColor = document.getElementById('red');
        let blueColor = document.getElementById('blue');
        let randomColor = document.getElementById('random');
        let eraseColor = document.getElementById('erase');

        if (blackColor.checked){
            this.style.backgroundColor = '#2e2e2b';
        }else if(redColor.checked){
            this.style.backgroundColor = '#da2d2d';
        } else if(blueColor.checked){
            this.style.backgroundColor = '#3f33dd';
        }  else if(eraseColor.checked){
            this.style.backgroundColor = '';
        }  else if(randomColor.checked){
            let random = Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = "#" + random; 
        }
    }
    }

    //function to clear colors in all grids with the clear all button
function clearGrid(){
    let columns = document.getElementByClassName("column");
    for(let i = 0; i < columns.length; i++){
        columns[i].style.background.Color = ""
    }
}
