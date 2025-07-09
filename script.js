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

function generateRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Set mode to rainbow
function setRainbowMode(element) {
    const r = generateRandomInteger(0, 255);
    const g = generateRandomInteger(0, 255);
    const b = generateRandomInteger(0, 255);
    
    element.style.backgroundColor = `rgb(${[r,g,b].join(',')})`;
}

// Create and insert the grids into the container and default to pen mode
function createGrid() {
    for (let i = 0; i < 16 * 16; i++) {
        const grid = document.createElement("div");

        grid.setAttribute("style", `width: ${GRID_SIZE}px; height: ${GRID_SIZE}px; 
            border-style: solid; border-width: 1px; border-color: steelblue;`);

        // Store current handler in the element
        grid._handler = function (e) {
            setPenMode(grid);
        };

        grid.addEventListener("mouseenter", grid._handler);
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
        grid.removeEventListener("mouseenter", grid._handler);

        // Add new eventListener
        if (currentMode === "pen") {
            grid._handler = () => setPenMode(grid);
        } else if (currentMode === "erase") {
            grid._handler = () => setEraseMode(grid);
        } else {
            grid._handler = () => setRainbowMode(grid);
        }

        grid.addEventListener("mouseenter", grid._handler);
    }
}

// Declare and set the buttons
const clear = document.querySelector(".clear");
const erase = document.querySelector(".eraser");
const pen = document.querySelector(".pen");
const rainbow = document.querySelector(".rainbow");

clear.addEventListener("click", () => clearGrid());
erase.addEventListener("click", () => {currentMode = "erase"; changeMode();});
pen.addEventListener("click", () => {currentMode = "pen"; changeMode();});
rainbow.addEventListener("click", () => {currentMode = "rainbow"; changeMode();});

// Create intial grid
createGrid();
