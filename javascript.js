console.log("Hello World");

let randcomp = Math.floor((Math.random())*2.9);
let getComputerChoice = '';

    if (randcomp == 0) {getComputerChoice = "Rock"};
    if (randcomp == 1) {getComputerChoice = "Paper"};
    if (randcomp == 2) {getComputerChoice = "Scissors"};

console.log(getComputerChoice);