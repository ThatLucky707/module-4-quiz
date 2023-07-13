class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}


        //show question
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {

        //show question
        let questionElement =document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;

        //list choices
        let choices = quiz.getQuestionIndex().choices;
        for (let i=0; i < choices.length; i++) {
            let choiceElement = document.getElementbyID("choice"
            + i); 
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        
        //show progress
        showProgress();
    }
};

function guess(id, guess) {}


// var questions = [
//     {
//         question: "In JavaScript, what do we use the 'var' keyword to declare?",
//         choices: ["Variants", "Variables", "To link a variety of CSS style sheets to the js file"],
//         answer: "Variables"
//     },
//     {
//         question: "In CSS, what does padding refer to?",
//         choices: ["Space around element border", "The space outside of an element", "Space inside of an element"],
//         answer: "Space inside of an element"
//     },
//     {
//         question: "What is the first coding language typically used when starting to develop a website?",
//         choices: ["HTML", "HTML.CSS", "Script.HTML"],
//         answer: "HTML"
//     },
//     {
//         question: "Considering JavaScript logic, the (===) operator will return a true Boolean value if the two values are found to be __________.",
//         choices: ["Canceling each other out", "False", "True"],
//         answer: "True"
//     },
//     {
//         question: "What does DOM stand for in web development?",
//         choices: ["Direct Operations Materials", "Data Outcome Manipulation", "Document Object Model"],
//         answer: "Document Object Model"
//     },
//     // More questions
// ];

// var currentQuestionIndex = 0;
// var time = questions.length * 15;  // 15 seconds per question
// var timerId;