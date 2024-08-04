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

const sketchPad = document.getElementById("sketchpad");
const sketchPadSize = sketchPad.offsetWidth;

const gridMsg = document.querySelectorAll("grid-msg");

const gridSquares = document.querySelectorAll("grid-square");

// INIT an array
let gridArray = [];

// INIT the number of grid squares per side
let gridSize = 16;

/*
HANDLE EVENTS
*/

// Draw grid on load
drawGrid(gridSize);

// When user clicks "Create New Grid" button
gridBtn.addEventListener("click", newGrid);

Array.from(gridSquares).forEach(square => square.addEventListener("mouseover", this.style.backgroundColor = 'black'))

/* 
() => changeColor
function changeColor() {  
   this.setAttribute("style", "background-color:black;")
} */

// Add click listener to button that runs an arrow function
// rock.addEventListener("click", () => doSomething);


/*
DEFINE FUNCTIONS
*/

/*
function playGame(playerChoice) {

    // Log clicks to console
    console.log("Player clicked: " + playerChoice);

    // Get the computer's choice
    const computerSelection = getComputerChoice();
    
    // Play out the round
    playRound(playerChoice, computerSelection);

    updateScore(playerScore, computerScore);

    endGameCheck();
    
    // Increment to the next round
    currentRound++;

}

function getComputerChoice() {
    // Randomly select an index from choices array
    const randomIndex = Math.floor(Math.random() * choices.length);

    // Convert random index to corresponding string in choices array
    console.log("Computer picked: " + choices[randomIndex]);
    return choices[randomIndex];
}

function playRound(playerChoice, computerSelection) {
   
    // Update the current round
    round.textContent = `Round: ${currentRound}`;

    // Announce Player's choice
    switch(playerChoice) {
        case playerChoice = choices[0]: 
            textPlayer.textContent = `Player has chosen Rock`;
            break;
        case playerChoice = choices[1]: 
            textPlayer.textContent = `Player has chosen Paper`;
            break;
        case playerChoice = choices[2]: 
            textPlayer.textContent = `Player has chosen Scissors`;
    }

    // Announce Computer's choice
    switch(computerSelection) {
        case computerSelection = choices[0]: 
            textComputer.textContent = `Computer has chosen Rock`;
            break;
        case computerSelection = choices[1]: 
            textComputer.textContent = `Computer has chosen Paper`;
            break;
        case computerSelection = choices[2]: 
            textComputer.textContent = `Computer has chosen Scissors`;
    }

    if (playerChoice != undefined) {
        if (playerChoice === computerSelection) {
            roundResult.textContent = "Tie!";
        } else {
            switch(true) {
                case playerChoice === choices[0]:
                    if (computerSelection === choices[1]) {
                        roundResult.textContent = "You lost this round! Paper beats Rock.";
                        computerScore++;
                    } else { 
                        roundResult.textContent = "You win the round! Rock beats Scissors.";
                        playerScore++; 
                    }
                    break;      
                case playerChoice === choices[1]:
                    if (computerSelection === choices[0]) { 
                        roundResult.textContent = "You win the round! Paper beats Rock.";
                        playerScore++;
                    } else {
                        roundResult.textContent = "You lost this round! Scissors beats Paper.";
                        computerScore++;
                    }
                    break;
                case playerChoice === choices[2]:
                    if (computerSelection === choices[0]) {
                        roundResult.textContent = "You lost this round! Rock beats Scissors.";
                        computerScore++;
                    } else {
                        roundResult.textContent = "You win the round! Scissors beats Paper.";
                        playerScore++;
                    } 
            }         
        }
    }
}

function updateScore(playerScore, computerScore) {
    gameStatus.textContent = `Score: Player - ${playerScore}, Computer - ${computerScore}`;
}

function endGameCheck() {
    let score;
    let scoreDisplay = `Player - ${playerScore}, Computer - ${computerScore}`;
    let finalResult;
    // Check the scores
    if (computerScore === 5) {
        finalResult = "Game over. Computer wins!"; 
        score = `Final score: ${scoreDisplay}`;
        playAgain();
    } else if (playerScore === 5) {
        finalResult = "Congrats! You won the game!"; 
        score = `Final score: ${scoreDisplay}`;
        playAgain();
    } else {
        score = `Score: ${scoreDisplay}`;
    }

    gameResult.textContent = finalResult;
    gameStatus.textContent = score;

}


*/

function newGrid() {
    console.log("New grid button clicked.")

    // Prompt user for new grid
    let userSquares = prompt("Type the number of squares per side (max. 100):", "100");

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
    gridMsg.textContent = userInput;

    console.log("Finished creating new grid.")

}

function drawGrid(gridSize) {

    console.log("Drawing new grid with " + gridSize + " squares per side...")

    // Calculate the grid square size
    let squareSize = sketchPadSize / gridSize;
    console.log(squareSize);
    
    // Create each grid square and append to the sketch pad
    for (let i = 1; i <= gridSize; i++) {
        let newSquare = document.createElement("div");
        newSquare.classList.add("grid-square");
        sketchPad.appendChild(newSquare);
    }

    // Need to set width and height to squareSize.
    let gridSquareRules;

    for(let i = 0; i < stylesheet.cssRules.length; i++) {
        if(stylesheet.cssRules[i].selectorText === '.grid-square') {
            gridSquareRules = stylesheet.cssRules[i];
        }
    }

    gridSquareRules.style.width = `${squareSize}px`;
    gridSquareRules.style.height = `${squareSize}px`;

    /* gridSquareRules.style.setProperty = ('width', `${squareSize}px`);
    gridSquareRules.style.setProperty = ('height', `${squareSize}px`); */


    console.log("Width = " + gridSquareRules.style.width);
    console.log("Height = " + gridSquareRules.style.height);

    console.log("Grid complete.")

}
