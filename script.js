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
    //const gridBodyList = document.querySelectorAll(".gridBody");
    //gridBodyList.forEach(gridBody => gridBody)
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
    Range
************************* */
var slider = document.getElementById("myRange");
var output = document.getElementById("rangeValue");
output.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function() {
  output.innerHTML = this.value + " x " + this.value;
  gridCreation(this.value);
} 

/* ************************* 
    Range
************************* */