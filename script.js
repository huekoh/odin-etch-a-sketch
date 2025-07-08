// Global variables
const GRID_SIZE = 24;

// Set the div that will hold the grids
const container = document.querySelector(".grid-container");
const totalWidth = 16 * (GRID_SIZE + 2);
container.setAttribute("style", `max-width: ${totalWidth}px;`);

// Track the current drawing mode
let currentMode = "pen";

// Set mode to erase
function setEraseMode(element) {
    element.style.backgroundColor = "white";
}

// Set mode to pen
function setPenMode(element) {
    element.style.backgroundColor = "steelblue";
}

// Create and insert the grids into the container and default to pen mode
function createGrid() {
    for (let i = 0; i < 16 * 16; i++) {
        const grid = document.createElement("div");

        grid.setAttribute("style", `width: ${GRID_SIZE}px; height: ${GRID_SIZE}px; 
            border-style: solid; border-width: 1px; border-color: steelblue;`);

        grid.addEventListener("mouseenter", () => setPenMode(grid));
    
        container.appendChild(grid);
    }
}

// Clear the grid
function clearGrid() {
    container.innerHTML = "";
    createGrid();
}

// Change the mode of the grids to pen or eraser
function changeMode() {
    const grids = container.getElementsByTagName("div");
    for (let i = 0; i < grids.length; i++) {
        const grid = grids[i];

        // Add new eventListener
        if (currentMode == "pen") {
            grid.removeEventListener("mouseenter", () => setEraseMode(grid));
            grid.addEventListener("mouseenter", () => setPenMode(grid));
        } else {
            grid.removeEventListener("mouseenter", () => setPenMode(grid));
            grid.addEventListener("mouseenter", () => setEraseMode(grid));
        }
    }
}

// Declare and set the buttons
const clear = document.querySelector(".clear");
const erase = document.querySelector(".eraser");
const pen = document.querySelector(".pen");

clear.addEventListener("click", () => clearGrid());
erase.addEventListener("click", () => {currentMode = "erase"; changeMode();});
pen.addEventListener("click", () => {currentMode = "pen"; changeMode();});

// Create intial grid
createGrid();
