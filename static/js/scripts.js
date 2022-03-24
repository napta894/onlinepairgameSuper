use = "strict";

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


function buildQuiz() { }

function showResults() { }

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


// Display Questions

const myQuestions = [
    {
        question: "What is the capital of France?",
        answers: {
            a: "London",
            b: "Paris",
            c: "Rome",
            d: "Berlin"
        },
        correctAnswer: "b"
    },
    
];