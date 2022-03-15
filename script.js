//Creates the grid in which we will draw.
function gridCreation(numberOfCells = 16) {
    const gridContainer = document.querySelector(".gridContainer");
    for(let i = 0; i < numberOfCells; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'gridBody');
        div.setAttribute('onmouseover', 'putColor(this)');
        gridContainer.appendChild(div);
    }
}

function putColor(pixel){
    pixel.style.backgroundColor = "black";
}