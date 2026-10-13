// ============================================
// SELECT ALL SCREENS
// ============================================

const homescreen = document.getElementById("home-screen");

const levelSelectScreen = document.getElementById("level-select-screen");

const gameScreen = document.getElementById("game-screen");

const levelResultScreen = document.getElementById("level-result-screen");

const finalResultScreen = document.getElementById("final-result-screen");



// ============================================
// SCREEN NAVIGATION FUNCTION
// ============================================

function showScreen(screenToShow) {

    // Hide every screen
    document.querySelectorAll(".screen").forEach(function(screen) {

        screen.classList.remove("active");

    });

    // Show the selected screen
    screenToShow.classList.add("active");

}