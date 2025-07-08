const GRID_SIZE = 24;
const totalWidth = 16 * (GRID_SIZE + 2);

// Function to change the background colour of a grid
function changeColor(node) {
    node.style.backgroundColor = "steelblue";
}

// Create and insert the grids into the container
function createGrid() {
    for (let i = 0; i < 16 * 16; i++) {
        const grid = document.createElement("div");

        grid.setAttribute("style", `width: ${GRID_SIZE}px; height: ${GRID_SIZE}px; 
            border-style: solid; border-width: 1px; border-color: steelblue;`);

        grid.addEventListener("mouseenter", () => changeColor(grid));
    
        container.appendChild(grid);
    }
}

function clearGrid() {
    container.innerHTML = "";
    createGrid();
}

// Set the div that will hold the grids
const container = document.querySelector(".grid-container");
container.setAttribute("style", `max-width: ${totalWidth}px;`);

// Set the buttons
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => clearGrid());

// Create intial grid
createGrid();
