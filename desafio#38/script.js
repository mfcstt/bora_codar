document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    const scoreDisplay = document.getElementById("score");

    // Defina aqui as perguntas e respostas corretas
    const questions = [
        {
            question: "O que Lila ganhou do gnomo?",
            correctAnswer: "c"
        },
       
    ];

    submitButton.addEventListener("click", () => {
        let score = 0;

        // Verifique as respostas
        questions.forEach((question, index) => {
            const selectedAnswer = document.querySelector(`input[name="pergunta${index + 1}"]:checked`);

            if (selectedAnswer) {
                if (selectedAnswer.value === question.correctAnswer) {
                    score++;
                }
            }
        });

        // Exiba o score
        scoreDisplay.textContent = score + " / " + questions.length;
    });
});