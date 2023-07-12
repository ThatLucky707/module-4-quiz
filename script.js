var questions = [
    {
        question: "In JavaScript, what do we use the 'var' keyword to declare?",
        choices: ["Variants", "Variables", "To link a variety of CSS style sheets to the js file"],
        answer: "Variables"
    },
    {
        question: "What does padding refer to in CSS?",
        choices: ["Choice 1", "Choice 2", "Choice 3"],
        answer: "Choice 1"
    },
    {
        question: "What does Javascript essentially do?",
        choices: ["Choice 1", "Choice 2", "Choice 3"],
        answer: "Choice 1"
    },
    {
        question: "What does Javascript essentially do?",
        choices: ["Choice 1", "Choice 2", "Choice 3"],
        answer: "Choice 1"
    },
    {
        question: "What does Javascript essentially do?",
        choices: ["Choice 1", "Choice 2", "Choice 3"],
        answer: "Choice 1"
    },
    // More questions
];

var currentQuestionIndex = 0;
var time = questions.length * 15;  // 15 seconds per question
var timerId;