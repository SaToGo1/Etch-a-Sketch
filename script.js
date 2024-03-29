const GRID_SIZE = 500;

//Creates grid at the load of the page
const body = document.querySelector("body");
body.onload = function(){ gridCreation()};

//Creates the grid in which we will draw.
function gridCreation(numberOfCells = 16) {
    gridDelete();
    const gridContainer = document.querySelector(".gridContainer");
    let pixel = calculateSizeOfGridBody(numberOfCells);
    for(let i = 0; i < numberOfCells; i++){
        for(let j = 0; j < numberOfCells; j++){
            const div = document.createElement('div');
            div.setAttribute('class', 'gridBody');
            div.setAttribute('onmouseover', 'putColor(this)');
            div.style.height = `${pixel}px`;
            div.style.width = `${pixel}px`;
            gridContainer.appendChild(div);
        }
    }
}

function gridDelete() {
    const gridContainer = document.querySelector(".gridContainer");
    gridContainer.innerHTML = "";
}

function calculateSizeOfGridBody(numberOfCells) {
    return (GRID_SIZE/numberOfCells);
}

function clearGrid(){
    let gridBodyList = document.querySelectorAll(".gridBody");
    gridBodyList.forEach(gridBody => gridBody.style.backgroundColor = "white");
}

/* ************************* 
    Color
************************* */
function putColor(pixel){
    const color = document.getElementById("color");
    pixel.style.backgroundColor = color.value;
}


/* ************************* 
    Buttons
************************* */
// Clear Button
const clearButton = document.getElementById("clearButton");
clearButton.onclick = function(){ clearGrid() };

// ************************* 
//    Range
const slider = document.getElementById("myRange");
const output = document.getElementById("rangeValue");
output.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function() {
  output.innerHTML = this.value + " x " + this.value;
} 

const createNewGridButton = document.getElementById("createNewGridButton");
createNewGridButton.onclick = function(){ gridCreation(slider.value); };
// ************************* 