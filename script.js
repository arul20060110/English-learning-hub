function startQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = `
        <p>Question 1: What is the correct spelling?</p>
        <button onclick="alert('Correct!')">A. Recieve</button>
        <button onclick="alert('Wrong!')">B. Receive</button>
    `;
}
