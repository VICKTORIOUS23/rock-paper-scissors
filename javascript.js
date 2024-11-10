//Initialize Variables
let pcChoice = "";
let npcChoice = "";
let pcScore = 0;
let npcScore = 0;
const npcOptions = ["Rock", "Paper", "Scissors"];
let resultText = "";

// User Choice Button Function
function updatePcChoice(event) {
    pcChoice = event.target.textContent;
    updateNpcChoice();
    playGame();
    console.log("You Chose " + pcChoice);
    console.log("The NPC Chose " + npcChoice);
    console.log(resultText);
    console.log(pcScore, npcScore);
}

//event listeners
document.getElementById("rock").addEventListener("click", updatePcChoice);
document.getElementById("paper").addEventListener("click", updatePcChoice);
document.getElementById("scissors").addEventListener("click", updatePcChoice);
document.getElementById("reset").addEventListener("click", resetScore);

//Initiate Random Number Function
function getRandNum(max) {
    return Math.floor(Math.random() * max);
}

// Sends text from .js to .html ("tagname", varname)
function sendText(par1, par2) {
    document.querySelector(par1).innerText = par2;
}

//Function to determine npc choice
function updateNpcChoice() {
    npcChoice = npcOptions[getRandNum(3)];
}

//Determine Win
function getWin() {
    if ((pcChoice === "Rock" && npcChoice === "Scissors") || (pcChoice === "Paper" && npcChoice === "Rock") || (pcChoice === "Scissors" && npcChoice === "Paper"))
        {return true;}
}

function playGame() {
    if (pcChoice === npcChoice) {resultText = "Tie Game!";}
    else if (getWin()) {pcScore ++, resultText = "You Win!";}
    else {npcScore ++, resultText = "You Lose!";}

    sendText(".pc-score", pcScore);
    sendText(".npc-score", npcScore);
    sendText(".result-text", resultText);
}

function resetScore() {
    pcScore = 0;
    npcScore = 0;
    resultText = "Good Luck!";
    console.log(pcScore, npcScore);
    sendText(".pc-score", pcScore);
    sendText(".npc-score", npcScore);
    sendText(".result-text", resultText);
}

