document.addEventListener("DOMContentLoaded", function () {
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
        }
    }

    function checkAnswer(selectedAnswer) {
        if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
            score++;
        }
    }

    function updateScore() {
        scoreDisplay.textContent = score;
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

    const card = document.getElementById("lua");
    const card1 = document.getElementById("tesouro");
    const card2 = document.getElementById("livro");

    card.addEventListener("click", function () {
        card.classList.add("clicked");
        card1.classList.remove("clicked");
        card2.classList.remove("clicked");
    });

    card1.addEventListener("click", function () {
        card1.classList.add("clicked");
        card.classList.remove("clicked");
        card2.classList.remove("clicked");
    });

    card2.addEventListener("click", function () {
        card2.classList.add("clicked");
        card.classList.remove("clicked");
        card1.classList.remove("clicked");
    });
});


