function checkAnswer() {
    const correctAnswer = "4";

    // Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        const feedback = document.getElementById("feedback");

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // No option selected
        document.getElementById("feedback").textContent = "Please select an answer.";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
