//Creates the grid in which we will draw.
function gridCreation(numberOfCells = 16) {
    const gridContainer = document.querySelector(".gridContainer");
    for(let i = 0; i < numberOfCells; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'gridBody');
        gridContainer.appendChild(div);
    }
}