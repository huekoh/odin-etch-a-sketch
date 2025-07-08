const GRID_SIZE = 24;
const totalWidth = 16 * (GRID_SIZE + 2);

// Select the div that will hold the grids
const container = document.querySelector(".grid-container");
container.setAttribute("style", `max-width: ${totalWidth}px;`);

// Function to change the background colour of a grid
function changeColor(node) {
    node.style.backgroundColor = "steelblue";
}

// Create and insert the grids into the container
for (let i = 0; i < 16 * 16; i++) {
    const grid = document.createElement("div");

    grid.setAttribute("style", `width: ${GRID_SIZE}px; height: ${GRID_SIZE}px; 
        border-style: solid; border-width: 1px; border-color: steelblue;`);

    grid.addEventListener("mouseenter", () => changeColor(grid));
    
    container.appendChild(grid);
}