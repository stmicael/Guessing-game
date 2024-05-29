let hiddenNumber;
    let remainingGuesses;

    resetGame();

    function resetGame() {
      hiddenNumber = Math.floor(Math.random() * 100) + 1;
      remainingGuesses = 3;
      document.getElementById("guessInput").value = "";
      document.getElementById("result").textContent = "";
      document.getElementById("hiddenNumberDisplay").textContent = "";
      document.getElementById("card").classList.remove("flipped");
      document.getElementById("guessInput").disabled = false;
      document.querySelector("button").disabled = false;
    }

    function checkGuess() {
      let guessInput = document.getElementById("guessInput").value;
      let resultDisplay = document.getElementById("result");

      if (isNaN(guessInput) || guessInput < 1 || guessInput > 100) {
        resultDisplay.textContent =
          "Please enter a valid number between 1 and 100.";
        return;
      }

      remainingGuesses--;

      if (guessInput == hiddenNumber) {
        resultDisplay.textContent =
          "Congratulations! You guessed the correct number.";
        disableInput();
        revealHiddenNumber();
      } else if (remainingGuesses === 0) {
        resultDisplay.textContent =
          "Sorry, you've run out of guesses. The correct number was " +
          hiddenNumber +
          ".";
        disableInput();
        revealHiddenNumber();
      } else {
        if (guessInput < hiddenNumber) {
          resultDisplay.textContent =
            "Too low! You have " + remainingGuesses + " guesses remaining.";
        } else {
          resultDisplay.textContent =
            "Too high! You have " + remainingGuesses + " guesses remaining.";
        }
      }
    }

    function disableInput() {
      document.getElementById("guessInput").disabled = true;
      document.querySelector("button").disabled = true;
    }

    function revealHiddenNumber() {
      document.getElementById("hiddenNumberDisplay").textContent =
        hiddenNumber;
      document.getElementById("card").classList.add("flipped");
    }

    function playAgain() {
      resetGame();
    }