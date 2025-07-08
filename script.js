const GRID_SIZE = 24;
const totalWidth = 16 * (GRID_SIZE + 2);

// Select the div that will hold the grids
const container = document.querySelector(".grid-container");
container.setAttribute("style", `max-width: ${totalWidth}px;`);


// Create and insert the grids into the container
for (let i = 0; i < 16 * 16; i++) {
    const grid = document.createElement("div");
    grid.setAttribute("style", `width: ${GRID_SIZE}px; height: ${GRID_SIZE}px; 
        border-style: solid; border-width: 1px;`);
    container.appendChild(grid);
}