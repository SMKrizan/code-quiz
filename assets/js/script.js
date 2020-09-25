//GLOBAL VARIABLES
var time = 60;
var score = 0;
currentQ = 0;
userSelection = "";

//DOM ELEMENTS
var trueBtn = document.querySelector("button.true");
var falseBtn = document.querySelector("button.false");
var questionSpaceEl = document.querySelector("p.question-space");
var answerSpaceEl = document.querySelector("p.answer-space");
var timerEl = document.querySelector("span");
var startBtn = document.getElementById("start-quiz")
var scoreBtn = document.getElementById("score");
var initialsEl = document.getElementById("initials");

// set up for delegating click responsibility to div.container containing button elements
var pageContentEl = document.querySelector("container");

// QUIZ STARTS once 'start quiz' button is clicked
var startQuiz = function (event) {
    // prevents browser from reloading
    event.preventDefault();

    console.log("Starting the quiz!");
    startTimer()
    // replaces quiz instructions with question
    questionSpaceEl.textContent = questions[currentQ].question;
    // updating CSS property to reveal 'T' and 'F' buttons
    trueBtn.removeAttribute("id");
    falseBtn.removeAttribute("id");
}

// VIEW HIGH SCORES BUTTON was clicked; 
var displayHighScores = function (event) {
    event.preventDefault();

    (targetEl.matches(".scores"))
    document.getElementById("index").style.display = "none";
    document.getElementById("high-scores").style.display = "block";
}

//START TIMER function counts down from 60s once 'start quiz' button is clicked
var startTimer = function () {
    var countdown = time - 1;
    timerEl.textContent = setInterval(countdown, 1000);
    //the timer is stopped with 'clearInterval'
    if (time = 0) {
        clearInterval(startTimer);
        quizOver()
    }
}

// DISPLAY QUESTION function will present the current question
var displayQuestion = function () {
    if (currentQ < questions.length) {
        // Display current question
        questionSpaceEl.textContent = questions[currentQ].question;
    }
    else {
        quizOver()
    }
}

// determine whether user selects 'true' or 'false'
var trueOrFalse = function (event) {
    event.preventDefault();
    // 'event.target' reports the element on which the event ("click") occurs
    console.log(event.target);
    // get target element from event
    var targetEl = event.target;
    // TRUE BUTTON was clicked; 
    if (targetEl.matches(".true")) {
        userSelection = "T";
    }
    // FALSE BUTTON was clicked;
    else if (targetEl.matches(".false")) {
        userSelection = "F";
    }
    assessUserSelection()
}

// let user know whether their selection is correct and move to next question
var assessUserSelection = function () {
    if
        ((userSelection === 'T' && questions[currentQ].answer === 'T') ||
        (userSelection === 'F' && questions[currentQ].answer === 'F')) {
        // Increase score
        score = score + 2;
        console.log(score);
        // affirm selection;
        answerSpaceEl.textContent = "That is Correct!";
    }
    else {
        // display message re incorrect answer and subtract 5 seconds from clock timer
        answerSpaceEl.textContent = questions[currentQ].ifWrong;
    }
    interimState()
}

var interimState = function() {
    trueBtn.setAttribute("id", "hide");
    falseBtn.setAttribute("id", "hide");
    startBtn.textContent = "NEXT";
    nextQuestion()
}

var nextQuestion = function() {
    currentQ ++;
    displayQuestion()
}

// QUIZ OVER function is triggered either by completion of all questions or reaching the maximum time available for the quiz (60 seconds)
quizOver = function () {
    if (time === 0 && currentQ < 10) {
        answerSpaceEl.textContent = "You have run out of time. Your score is " + score + ". Try again!";
    }
    // a message displays with final score and option to input user initials
    else {
        score = score + time;
        answerSpaceEl.textContent = "Quiz complete! Your score is " + score + ". Click the 'View High Scores' button to save your stats.";
    }
}

// SAVE STATS function takes and saves input of the user's initials and stores them along with the user's score 

//pageContentEl.addEventListener("click", quizButtonHandler)
startBtn.addEventListener("click", startQuiz)
trueBtn.addEventListener("click", trueOrFalse)
falseBtn.addEventListener("click", trueOrFalse)
