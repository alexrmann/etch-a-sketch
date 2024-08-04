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
const newGridBtn = document.querySelector("#new-grid-btn");

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

// INIT an array
// const choices = [itemA, itemB, ...];

// INIT a mutable variable
// let variableName;

// INIT a mutable variable with an initial value
// let variableName = 0; 

/*
HANDLE EVENTS
*/

// When user clicks "Create New Grid" button
newGridBtn.addEventListener("click", newGrid);

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

function playAgain() {
    // remove the rock, paper, scissors buttons
    rock.remove();
    paper.remove();
    scissors.remove();
    //scissors.style.display = "none";

    // show the play again button
    buttons.appendChild(playAgainBtn);
}
*/

function newGrid() {
    console.log("New grid button clicked.")

    // Prompt user for new grid
    let squares = prompt("Type the number of squares per side:", "Max: 100");

    if (squares == null || squares == "") {
        document.getElementById("msg").innerHTML = "You did not entert anything. Please enter your name again";
    }
    else
    {
        setupGrid();
    }
}

function setupGrid() {

    // Remove sketch pad
    sketchPad.remove();

    /* // Reset the current round to 1
    currentRound = 1;
    round.textContent = "Select an option to begin.";
    gameResult.textContent = "";
    gameStatus.textContent = "";

    // Reset player scores
    playerScore = 0;
    computerScore = 0;

    // Clear the scorecard
    textPlayer.textContent = "";
    textComputer.textContent = "";
    roundResult.textContent = "";

    // Re-add rock, paper, scissors buttons
    buttons.appendChild(rock);
    buttons.appendChild(paper);
    buttons.appendChild(scissors); */

    // Change grid message
    document.getElementById("grid-msg").textContent = "Grid size: " squares + " x " + squares;

    console.log("Finished creating new grid.")

}