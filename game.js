// Function to scramble a word
function scrambleWord(word) {
    // Split the word into an array of characters, sort them randomly, and then join them back into a string
    return word.split('').sort(function() {
        return 0.5 - Math.random();
    }).join('');
}

// Main game function
function customWordScrambleGame() {
    // Array of custom words
    const customWords = [
        "Smart",
        "Thoughtful",
        "Loving",
        "Considerate",
        "Passionate",
        "Coolest bro",
        "Protective"
    ];

    // Variables to track correct guesses and total guesses
    let correctGuesses = 0;
    let guessedWords = 0;

    // Loop through each word
    for (const word of customWords) {
        // Scramble the word
        const scrambledWord = scrambleWord(word);

        let userGuess = '';

        // Loop until user guesses the correct word or quits
        while (userGuess.toLowerCase() !== word.toLowerCase() && userGuess !== 'quit') {
            userGuess = prompt(`Unscramble the word: ${scrambledWord}`).trim();

            if (userGuess === 'quit') {
                alert('Thanks for playing!');
                return;
            }

            guessedWords++;

            // Check if user's guess matches the word
            if (userGuess.toLowerCase() === word.toLowerCase()) {
                alert('Correct!');
                correctGuesses++;
            } else {
                alert('Incorrect. Try again!');
            }
        }

        // Break the loop if the user quits
        if (userGuess === 'quit') {
            break;
        }
    }

    // Check if the player qualifies for the bonus round
    if (correctGuesses >= 3) {
        bonusRound(); // Call the bonus round function
    }

    // Bonus round function
    function bonusRound() {
        // Custom message to display
        const customMessage = "Love and support from ur beloved family";

        // Display the message
        alert(`!!!Secret msg!!!: ${customMessage}`);
    }
}

// Start the game when the page loads
window.onload = customWordScrambleGame;
