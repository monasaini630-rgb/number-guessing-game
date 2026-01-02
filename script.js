let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;
let score = 0;

function checkGuess() {
    const userGuess = Number(document.getElementById("guessInput").value);
    const message = document.getElementById("message");

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.innerText = "❌ Enter a number between 1 and 100";
        return;
    }

    attempts--;
    document.getElementById("attempts").innerText = attempts;

    if (userGuess === randomNumber) {
        message.innerText = "🎉 Correct! You guessed the number!";
        score += 10;
        document.getElementById("score").innerText = score;
        setTimeout(resetGame, 1500);
    } else if (userGuess > randomNumber) {
        message.innerText = "📉 Too High!";
    } else {
        message.innerText = "📈 Too Low!";
    }

    if (attempts === 0) {
        message.innerText = "😢 Game Over! Number was " + randomNumber;
        setTimeout(resetGame, 2000);
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 10;
    document.getElementById("attempts").innerText = attempts;
    document.getElementById("message").innerText = "";
    document.getElementById("guessInput").value = "";
}
