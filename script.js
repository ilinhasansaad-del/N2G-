
// ============================================
// 1. HOME SCREEN
// ============================================

const homeScreen = document.getElementById("home-screen");
const startGameBtn = document.getElementById("start-game-btn");
const headerScore = document.getElementById("header-score");


// ============================================
// 2. LEVEL SELECT SCREEN
// ============================================

const levelSelectScreen = document.getElementById("level-select-screen");

const level1Card = document.getElementById("level-1-card");
const level2Card = document.getElementById("level-2-card");
const level3Card = document.getElementById("level-3-card");

const selectLevel1Btn = document.getElementById("select-level-1-btn");
const selectLevel2Btn = document.getElementById("select-level-2-btn");
const selectLevel3Btn = document.getElementById("select-level-3-btn");

const level1Range = document.getElementById("level-1-range");
const level1Attempts = document.getElementById("level-1-attempts");
const level1Points = document.getElementById("level-1-points");

const level2Range = document.getElementById("level-2-range");
const level2Attempts = document.getElementById("level-2-attempts");
const level2Points = document.getElementById("level-2-points");

const level3Range = document.getElementById("level-3-range");
const level3Attempts = document.getElementById("level-3-attempts");
const level3Points = document.getElementById("level-3-points");


// ============================================
// 3. GAME SCREEN
// ============================================

const gameScreen = document.getElementById("game-screen");

const currentLevel = document.getElementById("current-level");
const currentScore = document.getElementById("current-score");
const attemptsRemaining = document.getElementById("attempts-remaining");

const levelTitle = document.getElementById("level-title");
const levelTitleEasy = document.getElementById("leveltitleeasy");
const gameInstruction = document.getElementById("game-instruction");

const numberRange = document.getElementById("number-range");
const minNumber = document.getElementById("min-number");
const maxNumber = document.getElementById("max-number");

const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");

const hintBtn = document.getElementById("hint-btn");
const hintText = document.getElementById("hint-text");
const hintTitle = document.getElementById("hint-title");
const hintMessage = document.getElementById("hint-message");
const hintsRemaining = document.getElementById("hints-remaining");

const gameMessage = document.getElementById("game-message");

const quitGameBtn = document.getElementById("quit-game-btn");


// ============================================
// 4. LEVEL RESULT SCREEN
// ============================================

const levelResultScreen = document.getElementById("level-result-screen");

const resultStatus = document.getElementById("result-status");
const resultStatusTitle = document.getElementById("result-status-title");
const resultStatusTitleSpan = document.getElementById("result-status-title-span");
const resultStatusMessage = document.getElementById("result-status-message");

const resultDetails = document.getElementById("result-details");
const resultSecretNumber = document.getElementById("result-secret-number");
const resultPointsEarned = document.getElementById("result-points-earned");
const resultAttemptsUsed = document.getElementById("result-attempts-used");
const resultPerformance = document.getElementById("result-performance");

const levelResultActions = document.getElementById("level-result-actions");
const nextLevelBtn = document.getElementById("next-level-btn");
const finishGameBtn = document.getElementById("finish-game-btn");


// ============================================
// 5. FINAL RESULT SCREEN
// ============================================

const finalResultScreen = document.getElementById("final-result-screen");

const finalResultContent = document.getElementById("final-result-content");
const gameCompleteTitle = document.getElementById("game-complete-title");
const finalMessage = document.getElementById("final-message");

const scoreSummary = document.getElementById("score-summary");
const finalScore = document.getElementById("final-score");
const totalAttempts = document.getElementById("total-attempts");
const accuracy = document.getElementById("accuracy");
const levelsCompleted = document.getElementById("levels-completed");

const finalPerformance = document.getElementById("final-performance");
const performanceRating = document.getElementById("performance-rating");
const performanceMessage = document.getElementById("performance-message");

const finalActions = document.getElementById("final-actions");
const playAgainBtn = document.getElementById("play-again-btn");
const backToHomeBtn = document.getElementById("back-to-home-btn");
const backToHome = document.getElementById("back-to-home");


// ============================================
// 6. GAME VARIABLES
// ============================================

let hintsLeft = 2;
let hintCount = 0;

let x = Math.floor(Math.random() * 100) + 1;

let score = 0;
let attemptsLeft = 4;
let guessCorrect = false;


// ============================================
// 7. GAME SCREEN CODE
// ============================================

if (gameScreen) {

    currentScore.textContent = score;
    attemptsRemaining.textContent = attemptsLeft;
    hintsRemaining.textContent = hintsLeft;


    // ----------------------------------------
    // GUESS BUTTON
    // ----------------------------------------

    guessBtn.addEventListener("click", function () {

        if (attemptsLeft <= 0) {
            gameMessage.textContent =
                "Game Over! No attempts remaining. Start a new game.";

            guessBtn.disabled = true;
            guessInput.disabled = true;
            return;
        }

        let input = guessInput.value.trim();

        if (input === "") {
            gameMessage.textContent = "Please enter a number!";
            return;
        }

        let guess = Number(input);

        if (!Number.isInteger(guess)) {
            gameMessage.textContent = "Please enter a whole number!";
            return;
        }

        if (guess < 1 || guess > 100) {
            gameMessage.textContent =
                "Invalid input! Try a number between 1 and 100.";
            return;
        }

        attemptsLeft--;

        attemptsRemaining.textContent = attemptsLeft;


        if (guess > x) {

            gameMessage.textContent = "The number is too high!";

        } else if (guess < x) {

            gameMessage.textContent = "The number is too low!";

        } else if (guess === x) {

            score = 10;
            guessCorrect = true;

            currentScore.textContent = score;

            gameMessage.textContent =
                "You guessed the number right! It is " + x;

            guessBtn.disabled = true;
            guessInput.disabled = true;
        }


        // Save game information

        sessionStorage.setItem("secretNumber", x);
        sessionStorage.setItem("score", score);
        sessionStorage.setItem("attemptsUsed", 4 - attemptsLeft);
        sessionStorage.setItem("guessCorrect", guessCorrect);

    });



    // ----------------------------------------
    // HINT BUTTON
    // ----------------------------------------

    hintBtn.addEventListener("click", function () {

        if (hintsLeft === 0) {
            hintMessage.textContent = "No hints remaining!";
            return;
        }

        let input = guessInput.value.trim();

        if (input === "") {
            hintMessage.textContent =
                "Please enter a number first!";
            return;
        }

        hintsLeft--;
        hintCount++;

        hintsRemaining.textContent = hintsLeft;


        if (hintCount === 1) {

            if (x % 2 === 0) {
                hintMessage.textContent =
                    "The secret number is even.";
            } else {
                hintMessage.textContent =
                    "The secret number is odd.";
            }

        } else if (hintCount === 2) {

            let middle = Math.floor(x / 10) * 10;

            hintMessage.textContent =
                "The secret number is between " +
                middle + " and " + (middle + 12) + ".";
        }

    });



    // ----------------------------------------
    // QUIT GAME BUTTON
    // ----------------------------------------

    quitGameBtn.addEventListener("click", function () {

        sessionStorage.setItem("secretNumber", x);
        sessionStorage.setItem("score", score);
        sessionStorage.setItem("attemptsUsed", 4 - attemptsLeft);
        sessionStorage.setItem("guessCorrect", guessCorrect);

        window.location.href = "level.result-screen.html";

    });

}


// ============================================
// 8. LEVEL RESULT SCREEN
// ============================================

if (levelResultScreen) {

    resultSecretNumber.textContent =
        sessionStorage.getItem("secretNumber") ?? 0;

    resultPointsEarned.textContent =
        sessionStorage.getItem("score") ?? 0;

    resultAttemptsUsed.textContent =
        sessionStorage.getItem("attemptsUsed") ?? 0;

    let guessCorrect =
        sessionStorage.getItem("guessCorrect") === "true";


    if (guessCorrect) {

        resultPerformance.textContent = "Good 🥰";

    } else {

        resultPerformance.textContent =
            "Better luck next time! 💩🤦‍♂️";
    }

}


// ============================================
// 9. FINAL RESULT SCREEN
// ============================================

if (finalResultScreen) {

    finalScore.textContent =
        sessionStorage.getItem("finalScore") ?? 0;

    totalAttempts.textContent =
        sessionStorage.getItem("finalAttempts") ?? 0;

    accuracy.textContent =
        sessionStorage.getItem("finalAccuracy") ?? "0%";

    levelsCompleted.textContent =
        sessionStorage.getItem("levelsCompleted") ?? 0;

}


// ============================================
// 10. NEXT LEVEL BUTTON
// ============================================

if (nextLevelBtn) {

    nextLevelBtn.addEventListener("click", function () {

        window.location.href = "notfound.html";

    });

}


// ============================================
// 11. FINISH GAME BUTTON
// ============================================

if (finishGameBtn) {

    finishGameBtn.addEventListener("click", function () {

        let score = Number(sessionStorage.getItem("score")) || 0;
        let attempts = Number(sessionStorage.getItem("attemptsUsed")) || 0;
        let guessCorrect = sessionStorage.getItem("guessCorrect") === "true";

        let accuracy = 0;

        if (attempts > 0 && guessCorrect) {
            accuracy = (1 / attempts) * 100;
        }

        sessionStorage.setItem("finalScore", score);
        sessionStorage.setItem("finalAttempts", attempts);
        sessionStorage.setItem("finalAccuracy", accuracy.toFixed(0) + "%");

        window.location.href = "final-result-screen.html";

    });

}




// ============================================
// 12. PLAY AGAIN BUTTON
// ============================================

if (playAgainBtn) {

    playAgainBtn.addEventListener("click", function () {

        sessionStorage.removeItem("secretNumber");
        sessionStorage.removeItem("score");
        sessionStorage.removeItem("attemptsUsed");
        sessionStorage.removeItem("guessCorrect");

        window.location.href = "level-select-screen.html";

    });

}


// ============================================
// 13. BACK TO HOME BUTTON
// ============================================

if (backToHomeBtn) {

    backToHomeBtn.addEventListener("click", function () {

        window.location.href = "index.html";

    });

}

if (backToHome) {

    backToHome.addEventListener("click", function () {

        window.location.href = "index.html";

    });

}
