document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("finishButton");
    const scoreDisplay = document.getElementById("score");
    const questionDisplay = document.getElementById("question");
    const answerButtons = document.querySelectorAll('.card, .card1, .card2');

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
        } else {
            questionDisplay.textContent = "Quiz Concluído!";
            submitButton.style.display = "none";
        }
    }

    function checkAnswer(selectedAnswer) {
        if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
            score++;
        }
    }

    function updateScore() {
        scoreDisplay.textContent = score + " / " + questions.length;
    }

    function nextQuestion() {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
        updateScore();
    }

    loadQuestion(currentQuestionIndex);

    answerButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            checkAnswer(button.value);
            nextQuestion();
        });
    });

    submitButton.addEventListener("click", function () {
        nextQuestion();
    });
});
