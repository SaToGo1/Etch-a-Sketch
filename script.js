const body = document.querySelector("body");
body.onload = function(){ gridCreation()} ;

//Creates the grid in which we will draw.
function gridCreation(numberOfCells = 16) {
    gridDelete();
    const gridContainer = document.querySelector(".gridContainer");
    for(let i = 0; i < numberOfCells; i++){
        for(let j = 0; j < numberOfCells; j++){
            const div = document.createElement('div');
            div.setAttribute('class', 'gridBody');
            div.setAttribute('onmouseover', 'putColor(this)');
            gridContainer.appendChild(div);
        }
    }
}

function gridDelete() {
    const gridContainer = document.querySelector(".gridContainer");
    gridContainer.innerHTML = "";
}

function putColor(pixel){
    pixel.style.backgroundColor = "black";
}

function clearGrid(){
    let gridBodyList = document.querySelectorAll(".gridBody");
    gridBodyList.forEach(gridBody => gridBody.style.backgroundColor = "white");
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
  gridCreation(this.value);
} 

// ************************* 