// DOM Elements
const tapButton = document.getElementById("tap");
const resetButton = document.getElementById("reset");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const highScoreDisplay = document.getElementById("high-score");
const historyList = document.getElementById("history-list");
const tapSound = document.getElementById("tap-sound");

let score = 0;
let timeLeft = 5000; // time in milliseconds
let timerActive = false;
let timerInterval;
let highScore = 0;
let scoreHistory = [];

// Tap button event listener
tapButton.addEventListener("click", () => {
    if (!timerActive) {
        startTimer();
    }
    if (timeLeft > 0) {
        score++;
        scoreDisplay.innerText = score;
        tapSound.play();
        animateButton();
    }
});

// Function to start the timer
function startTimer() {
    timerActive = true;
    timeLeft = 5000; // time in milliseconds
    timerDisplay.innerText = (timeLeft / 1000).toFixed(2);

    timerInterval = setInterval(() => {
        timeLeft -= 10; // decrement by 10 milliseconds
        timerDisplay.innerText = (timeLeft / 1000).toFixed(2);

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerActive = false;
            timerDisplay.innerText = "Time's up!";
            tapButton.style.display = "none"; // hide tap button
            updateHighScore();
            saveScoreHistory();
        }
    }, 10); // update every 10 milliseconds
}

// Function to update high score
function updateHighScore() {
    if (score > highScore) {
        highScore = score;
        highScoreDisplay.innerText = highScore;
    }
}

// Save score history
function saveScoreHistory() {
    scoreHistory.push(score);
    updateScoreboard();
}

// Update scoreboard
function updateScoreboard() {
    historyList.innerHTML = "";
    scoreHistory.slice(-5).forEach((s, index) => {
        let listItem = document.createElement("li");
        listItem.innerText = `Game ${scoreHistory.length - 4 + index}: ${s} points`;
        historyList.appendChild(listItem);
    });
}

// Reset button event listener
resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    score = 0;
    timeLeft = 5000; // reset to 5000 milliseconds
    timerActive = false;
    scoreDisplay.innerText = score;
    timerDisplay.innerText = (timeLeft / 1000).toFixed(2);
    tapButton.style.display = "block"; // show tap button
});

// Button animation effect
function animateButton() {
    tapButton.style.transform = "scale(1.1)";
    setTimeout(() => {
        tapButton.style.transform = "scale(1)";
    }, 100);
}
