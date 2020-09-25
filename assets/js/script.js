//GLOBAL VARIABLES
var time = 60;
var score = 0;
currentQ = 0;
userSelection = "";
// var questions = [
//     {
//         question: 'The closest() method searches for a match within parent relationships whereas the querySelector() method searches for a match within descendent relationships.',
//         options: ['T', 'F'],
//         answer: 'T',
//         ifWrong: "INCORRECT: the statement above is true."
//     },
//     {
//         question: 'DOM stands for Document Object Model',
//         options: ['T', 'F'],
//         answer: 'T',
//         ifWrong: "INCORRECT: the statement above is true."
//     },
//     {
//         question: 'API stands for Application Parameter Interface',
//         options: ['T', 'F'],
//         answer: 'F',
//         ifWrong: "INCORRECT: API stands for Application Programming Interface"
//     },
//     {
//         question: 'answer callback function is passed as an argument to another function',
//         options: ['T', 'F'],
//         answer: 'T',
//         ifWrong: "INCORRECT: the statement above is true."
//     },
//     {
//         question: 'JavaScript data types include numbers, strings, objects, boolean, function, and array',
//         options: ['T', 'F'],
//         answer: 'T',
//         ifWrong: "INCORRECT: the statement above is true."
//     },
//     {
//         question: 'Parameters are the actual value/s that get/s passed through the parameter into the function to be used',
//         options: ['T', 'F'],
//         answer: 'F',
//         ifWrong: "INCORRECT: Parameters are placeholder variables where their values are defined when the function is called and are not assigned values within the function itself'"
//     },
//     {
//         question: 'Arguments are placeholder variables where their values are defined when the function is called and are not assigned values within the function itself',
//         options: ['T', 'F'],
//         answer: 'F',
//         ifWrong: "INCORRECT: Arguments are are the actual value/s that get/s passed through the parameter into the function to be used."
//     },
//     {
//         question: 'JSON stands for JavaScript Object Notification',
//         options: ['T', 'F'],
//         answer: 'F',
//         ifWrong: "INCORRECT: JSON stands for Javascript Object Notation"
//     },
//     {
//         question: 'Two browser specific functions that can be used to gather user input are <prompt> and <confirm>',
//         options: ['T', 'F'],
//         answer: 'T',
//         ifWrong: "INCORRECT: the statement above is true."
//     },
//     {
//         question: 'It is a best practice to assign reserved words as variables.',
//         options: ['T', 'F'],
//         answer: 'F',
//         ifWrong: "INCORRECT: reserved words like 'default' and 'export' should not be used as variables."
//     },
// ];

//DOM ELEMENTS
var trueBtn = document.querySelector("button.true");
var falseBtn = document.querySelector("button.false");
var questionSpaceEl = document.querySelector("p.question-space");
var answerSpaceEl = document.querySelector("p.answer-space");
var timerEl = document.getElementById("timer");
var startBtn = document.getElementsByClassName("start-quiz");
var scoreBtn = document.getElementById("score");
var initialsEl = document.getElementById("initials");

// set up for delegating click responsibility to div.container containing button elements
var pageContentEl = document.querySelector("container");

//(similar to taskinator) this function listens to events within entire div.container document
var quizButtonHandler = function (event) {
    // 'event.target' reports the element on which the event ("click") occurs
    console.log(event.target);

    // get target element from event
    var targetEl = event.target;
    // START BUTTON was clicked
    if (targetEl.matches(".start-quiz")) {
        // start timer countdown

        // present questions
        selectAnswer()
        // unhide TRUE/FALSE buttons
        unhideTrueBtn = trueBtn.removeAttribute("id");
        unhideFalseBtn = falseBtn.removeAttribute("id");
    }

    // TRUE BUTTON was clicked; 
    else if (targetEl.matches(".true")) {
        userSelection = "T";
        currentQ ++;
        selectAnswer();
    }

    // FALSE BUTTON was clicked;
    else if (targetEl.matches(".false")) {
        userSelection = "F";
        currentQ ++;
        selectAnswer();
    }

    // VIEW HIGH SCORES BUTTON was clicked; 
    else if (targetEl.matches(".scores")) {

    }
};
// START BUTTON will trigger presentation of the first question in place of the instructions within the "question-space"

//start countdown
// startBtn.onClick = countdown;
//get question

//TIMER function counts down from 60s once 'start quiz' button is clicked, with a 5s penalty for wrong answers.
//setTimeout takes two arguments, a function and a number and runs the function once after x milliseconds have passed
var startTimer = setInterval(stopTimer(1000));
//the timer is stopped with 'clearInterval'
var stopTimer = function () {
   if (time = 0) {
   }
}

//SCORING FUNCTION will award 2 points per question. At the end of the game, any time remaing will be added to the score, so 10 seconds remaining=10 points.
// We start the game with a score of 0.


// TRUE/FALSE BUTTONS function will display whether answer is correct and move to new question
var selectAnswer = function () {
    if (currentQ < 10) {
        // Display current question and T/F buttons
        questionSpaceEl.textContent = questions[currentQ].question;
        // Compare answers
        if ((userSelection === 'T' && questions[currentQ].answer === 'T') ||
            (userSelection === 'F' && questions[currentQ].answer === 'F')) {
            // Increase score
            score = score + 2;
            console.log(score);
            // Affirm selection;
            answerSpaceEl.textContent = "That is Correct!";
            // Move to next question
        } 
        else {
            // display message if incorrect answer is provided and subtract 5 seconds from clock timer
            questions[currentQ].ifWrong;
            // timer = timer - 5;
        }
    }
    else {
        document.getElementById("index").style.display = "none";
        document.getElementById("high-scores").style.display = "block";
    }  
}
    // SAVE STATS function takes and saves input of the user's initials and stores them along with the user's score  

    // QUIZ END function is triggered either by completion of all questions or reaching the maximum time available for the quiz (60 seconds)
    // IF TIME RUNS OUT before the quiz is complete, a "You're out of time - try again!" message displays and the "start quiz" button re-appears
    // IF USER COMPLETES QUIZ, a "Congratulations! You finished in time" message displays and the final score is displayed with input area for user's initials

    pageContentEl = addEventListener("click", quizButtonHandler)