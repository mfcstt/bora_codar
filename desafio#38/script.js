document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    const scoreDisplay = document.getElementById("score");

    // Defina aqui as perguntas e respostas corretas
    const questions = [
        {
            question: "Qual era o objetivo da personagem?",
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




let cardSelected = false;
let card1Selected = false;
let card2Selected = false;


// Adicione um evento de clique a cada card
const cards = document.querySelectorAll(".card, .card1, .card2");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        if (!cardSelected) {
            card.style.backgroundColor = "#1d2330"; 
            cardSelected = true;
            cards.forEach((otherCard) => {
                if (otherCard !== card) {
                    otherCard.style.pointerEvents = "none";
                }
            });
        }
    });
});

cards.forEach((card1) => {
    card1.addEventListener("click", () => {
        if (!card1Selected) {
            card1.style.backgroundColor = "#1d2330"; 
            card1Selected = true;
            cards.forEach((otherCard) => {
                if (otherCard !== card1) {
                    otherCard.style.pointerEvents = "none";
                }
            });
        }
    });
});

cards.forEach((card2) => {
    card2.addEventListener("click", () => {
        if (!card2Selected) {
            card2.style.backgroundColor = "#1d2330"; 
            card2Selected = true;
            cards.forEach((otherCard) => {
                if (otherCard !== card2) {
                    otherCard.style.pointerEvents = "none";
                }
            });
        }
    });
});

