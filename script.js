let targetNumber = createRandomNumber();
let chancesLeft = 3;

function createRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

function checkGuess() {

    const input = document.getElementById("guessInput");
    const messageBox = document.getElementById("message");
    const attemptBox = document.getElementById("attempts");

    let userGuess = Number(input.value);

    if (!userGuess || userGuess < 1 || userGuess > 20) {
        messageBox.textContent = "Enter a number between 1 and 20.";
        return;
    }

    if (chancesLeft <= 0) {
        messageBox.textContent = "Game finished! Click Restart.";
        return;
    }

    chancesLeft--;

    if (userGuess === targetNumber) {
        messageBox.textContent = "Correct! You won!";
        attemptBox.textContent = "";
        chancesLeft = 0;
    } 
    else if (userGuess > targetNumber) {
        messageBox.textContent = "Too high!";
    } 
    else {
        messageBox.textContent = "Too low!";
    }

    if (chancesLeft > 0 && userGuess !== targetNumber) {
        attemptBox.textContent = "Chances left: " + chancesLeft;
    } 
    else if (chancesLeft === 0 && userGuess !== targetNumber) {
        messageBox.textContent = "Game Over! The number was " + targetNumber;
        attemptBox.textContent = "";
    }

    input.value = "";
}

function resetGame() {
    targetNumber = createRandomNumber();
    chancesLeft = 3;

    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
}