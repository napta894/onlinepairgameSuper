use = "strict";

//*
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');


function buildQuiz() { }

function showResults() { }

// display quiz right away

buildQuiz();

// on submit, show results


// Display Questions

let questions = 

    [
        {
            "id": 1,
            "question": "Number(\"1\") - 1 == 0; \rWhat is the result?",
            "a": "True",
            "b": "False",
            "c": "NaN",
            "d": "TypeError",
            "answer": "a"
        },
        {
            "id": 2,
            "question": "What is the result? \r(true + false) > 2 + true;",
            "a": "true",
            "b": "false",
            "c": "TypeError",
            "d": "NaN",
            "answer": "2"
        },
        {
            "id": 3,
            "question": "What is the result?\r\"1\" - - \"1\";",
            "a": "0",
            "b": "2",
            "c": "11",
            "d": "\"11\"",
            "answer": "b"
        },
        {
            "id": 4,
            "question": "What is the result? \r new String(\"This is a string\") instanceof String;        ",
            "a": "true",
            "b": "false",
            "c": "TypeError",
            "d": "NaN",
            "answer": "a"
        },
        {
            "id": 5,
            "question": "What is the result? \r[] + [] + 'foo'.split('');        ",
            "a": "\"f,o,o\"",
            "b": "TypeError",
            "c": "[\"f\",\"o\",\"o\"]",
            "d": "[][][\"f\",\"o\",\"o\"]",
            "answer": "a"
        },
        {
            "id": 6,
            "question": "What is the result? \r[] + [] + 'foo'.split('');",
            "a": "\"f, o, o\"",
            "b": "TypeError",
            "c": "[\"f\", \"o\", \"o\"]",
            "d": "[][][\"f\", \"o\", \"o\"]",
            "answer": "xxx"
        },
        {
            "id": 7,
            "question": "What is the result? \rnew Array(5).toString();",
            "a": "\",,,,\"",
            "b": "[]",
            "c": "\"[]\"",
            "d": "(empty)",
            "answer": "a"
        },
        {
            "id": 8,
            "question": "What is the result? \rString('Hello') === 'Hello';",
            "a": "true",
            "b": "false",
            "c": "TypeError",
            "d": "NaN",
            "answer": "a"
        },
        {
            "id": 1111,
            "question": "What is the result? \r\"This is a string\" instanceof String;",
            "a": "true",
            "b": "false",
            "c": "TypeError",
            "d": "NaN",
            "answer": "xxx"
        },
        {
            "id": 1111,
            "question": "What is the result console.log(myArr); ? \rvar myArr = ['foo', 'bar', 'baz']; \rmyArr.length = 0; \r myArr.push('bin');",
            "a": "['foo', 'bar', 'baz']",
            "b": "['foo', 'bar', 'baz', 'bin']",
            "c": "['bin', 'foo', 'bar', 'baz']",
            "d": "['bin']",
            "answer": "d"
        },
        {
            "id": 1111,
            "question": "What is the result? \rString('Hello') === 'Hello';",
            "a": "true",
            "b": "false",
            "c": "TypeError",
            "d": "NaN",
            "answer": "a"
        },
        {
            "id": 1111,
            "question": "What is the result? \r10 > 9 > 8 === true;",
            "a": "True",
            "b": "False",
            "c": "Error",
            "d": "Other",
            "answer": "b"
        },
        {
            "id": 1111,
            "question": "What is the result? \rNaN === NaN;",
            "a": "true",
            "b": "false",
            "c": "TypeError",
            "d": "NaN",
            "answer": "b"
        }
    ]
const question = document.getElementById("questions");
const answers = Array.from(document.getElementsByClassName("answer-text"));
const questionCounterText = document.getElementById("counter");
const scoreText = document.getElementById("score");

    
console.log(questions);

let questionCounter;
let score;
let MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    console.log(questions);

    availableQuestions = getRandomQuestions(questions, MAX_QUESTIONS);
    console.log(availableQuestions); 
};

const getRandomQuestions = (arr, n) => {

    let len = arr.lenght; 
    if (n > len) {
        throw new RangeError(
            "getRandomQuestions: more elements taken than available"
        );
    }

    const shuffled = [...arr].sort(() => 0.5 - Math.random()); 



    return (selected = shuffled.slice(0, n));
};
 
const getNewQuestion=() => {
    if (availableQuestions.length === 0) {
        alert("End of the game");
        return;
    }

    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    CurrentQuestion = availableQuestions[0];
    console.log(CurrentQuestion);
    question.innerText = CurrentQuestion.question;

    console.log(answers);

    answers.forEach()

    //availableQuestions.shift();
    //getNewQuestion();
}

startGame();


