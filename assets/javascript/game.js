window.onload = function() {

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessHistory = [];

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-text");
var guessHistoryText = document.getElementById("guess-history-text");

var computerChoice = letters[Math.floor(Math.random() * letters.length)];

document.onkeyup = function(event) {

    var userGuess = event.key;

    if (userGuess === computerChoice) {
        wins++;
        guessesLeft = 9;
        guessHistory = [];
        alert("You win a brand new car!!!");
        computerChoice =  letters[Math.floor(Math.random()* letters.length)];
    }
    else { 
        if (guessHistory.includes(userGuess)) {
        }
        else {
            guessesLeft--;
            guessHistory.push(userGuess);
    }
    }
    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 9;
        guessHistory = [];
        alert("You are turrible....");
        computerChoice =  letters[Math.floor(Math.random()* letters.length)];
    }

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    guessHistoryText.textContent = "Your guesses so far: " + guessHistory;
}
}
