document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("finishButton");
    const scoreDisplay = document.getElementById("score");
    const questionDisplay = document.getElementById("question");
    const answerInputs = document.querySelectorAll('input[type="radio"]');

    const questions = [
        {
            question: "Qual era o objetivo da personagem?",
            correctAnswer: "c"
        },
        
    ];

    

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion(index) {
        if (index < questions.length) {
            const currentQuestion = questions[index];
            questionDisplay.textContent = currentQuestion.question;

            answerInputs.forEach((input) => {
                input.checked = false;
            });
        } else {
            questionDisplay.textContent = "Quiz Concluído!";
            submitButton.style.display = "none";
        }
    }

    loadQuestion(currentQuestionIndex);

    submitButton.addEventListener("click", () => {
        const selectedAnswer = document.querySelector('input[type="radio"]:checked');

        if (selectedAnswer) {
            if (selectedAnswer.value === questions[currentQuestionIndex].correctAnswer) {
                score++;
            }

            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
            scoreDisplay.textContent = score + " / " + questions.length;
        }
    });
});




