// Function to handle the trivia question
function checkTrivia() {
    const userInput = document.getElementById('triviaInput').value;
    const answer = "Paris";
    const result = userInput.toLowerCase() === answer.toLowerCase();
    document.getElementById('triviaResult').innerText = `You guessed: ${userInput}. That is ${result ? "correct" : "incorrect"}!`;
}

// Function to allow submission of trivia answer with the Enter key
function checkEnter(event) {
    if (event.key === "Enter") {
        checkTrivia();
    }
}

// Function to check if a number is odd or even
function checkNumber() {
    const numInput = document.getElementById('numberInput').value;
    const num = parseInt(numInput);
    if (!isNaN(num) && num >= 10000 && num <= 99999) {
        const isEven = num % 2 === 0;
        document.getElementById('numberResult').innerText = `The number ${num} is ${isEven ? "even" : "odd"}.`;
    } else {
        document.getElementById('numberResult').innerText = "Please enter a valid 5-digit number.";
    }
}
