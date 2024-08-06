/* 
ASSIGN ELEMENTS TO CONSTANTS
*/

// Assign first element with tag name
// const nameOfElement = document.querySelector("tag");

// Assign all elements with tag name
// const nameOfElement = document.querySelectorAll("tag");

// Assign first element with class
// const nameOfElement = document.querySelector(".class-name");

// Assign all elements with class
// const nameOfElement = document.querySelectorAll(".class-name");

// Assign element by id name
// const nameOfElement = document.querySelector("#id-name");

// Buttons
const gridBtn = document.querySelector("#grid-btn");

/* 
INJECT CONTENT
*/

// Create an html element
// const nameOfElement = document.createElement("div");

// Add text content to an element
// elementName.textContent = "Text content goes here";

/*
INITIALIZE PARAMETERS
*/
const stylesheet = document.styleSheets[0];
console.log(stylesheet);

const sketchPad = document.querySelector("#sketchpad");
const sketchPadSize = sketchPad.offsetWidth;

const gridMsg = document.querySelectorAll(".grid-msg");

const gridSquares = document.querySelectorAll(".grid-square");

// INIT an array
let gridArray = [];

// INIT the number of grid squares per side
let gridSize = 16;

// Loop through the gridMsg node list and assign the grid size to its text content
for (let i = 0; i < gridMsg.length; i++) {
  gridMsg[i].textContent = `${gridSize}`;
}

/*
HANDLE EVENTS
*/

// Draw grid on load
drawGrid(gridSize);

// When user clicks "Create New Grid" button
gridBtn.addEventListener("click", newGrid);

// Draw on the grid
sketchPad.addEventListener("mousedown", userDraw);

/*
DEFINE FUNCTIONS
*/

/*

function getRandomIndex() {
    // Randomly select an index from an array
    const randomIndex = Math.floor(Math.random() * arrayName.length);

    // Convert random index to corresponding string in choices array
    return arrayName[randomIndex];
}

*/

function newGrid() {
  console.log("New grid button clicked.");

  // Prompt user for new grid
  let userSquares = prompt(
    "Type the number of squares per side (max. 100):",
    "100"
  );

  // If cancel, allow user to return. Else if no input or value > 100, re-prompt. Else, setup grid with the value.
  if (userSquares === null) {
    return;
  } else if (userSquares === "" || userSquares == 0 || userSquares > 100) {
    newGrid();
  } else {
    setupGrid(userSquares);
  }
}

function setupGrid(userInput) {
  // Remove content from the existing sketch pad
  sketchPad.innerHTML = "";

  // Run a function that draws the new sketch pad
  drawGrid(userInput);

  /* // Re-add rock, paper, scissors buttons
    buttons.appendChild(rock);
    buttons.appendChild(paper);
    buttons.appendChild(scissors); */

  // Change grid message
  for (let i = 0; i < gridMsg.length; i++) {
    gridMsg[i].textContent = `${userInput}`;
  }

  console.log("Finished creating new grid.");
}

function drawGrid(gridSize) {
  console.log("Drawing new grid with " + gridSize + " squares per side...");

  // Calculate the grid square size
  let squareSize = sketchPadSize / gridSize;
  console.log(squareSize);

  // Create each grid square and append to the sketch pad
  for (let i = 1; i <= gridSize ** 2; i++) {
    let newSquare = document.createElement("div");
    newSquare.classList.add("grid-square");
    sketchPad.appendChild(newSquare);
  }

  // Need to set width and height to squareSize.
  let gridSquareRules;

  for (let i = 0; i < stylesheet.cssRules.length; i++) {
    if (stylesheet.cssRules[i].selectorText === ".grid-square") {
      gridSquareRules = stylesheet.cssRules[i];
    }
  }

  gridSquareRules.style.width = `${squareSize}px`;
  gridSquareRules.style.height = `${squareSize}px`;

  /* gridSquareRules.style.setProperty = ('width', `${squareSize}px`);
    gridSquareRules.style.setProperty = ('height', `${squareSize}px`); */

  console.log("Width = " + gridSquareRules.style.width);
  console.log("Height = " + gridSquareRules.style.height);

  console.log("Grid complete.");
}

function userDraw() {
  console.log("userDraw start");

    // Need to add logic, 
    
    // if mousedown = true, then draw

    let squares = Array.from(document.querySelectorAll('.grid-square'));

    squares.forEach(square => square.addEventListener("mouseover", function ( event ) {
        event.target.style.backgroundColor = 'black';
    }));

    // if mousedown = false, then stop drawing

   /*  if (mousedown = true) {
        draw
    } else {
        stop drawing
    } */

  console.log("userDraw end");
}