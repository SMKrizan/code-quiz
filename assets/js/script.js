//GLOBAL VARIABLES
var time = questions.length * 6;
var score = 0;
var timerId;

// Establishing question count
currentQ = 0;

// establishing user's selection input 
userSelection = "";

//DOM ELEMENTS
var startBtn = document.getElementById("start-quiz");
var trueBtn = document.querySelector("button.true");
var falseBtn = document.querySelector("button.false");
var nextBtn = document.querySelector("button.next");
var highScoreBtn = document.getElementById("scores");
var questionSpaceEl = document.querySelector("p.question-space");
var answerSpaceEl = document.querySelector("p.answer-space");
var timerEl = document.getElementById("time");
var initialsEl = document.getElementById("initials");
var userInput = document.querySelector("form");
var quizPage = document.getElementById("wrapper");
var scoresPage = document.getElementById("high-scores");

// set up for delegating click responsibility to div.container containing button elements
var pageContentEl = document.querySelector("container");

// QUIZ STARTS once 'start quiz' button is clicked
var startQuiz = function (event) {
    // prevents browser from reloading
    event.preventDefault();

    // start condition
    time = questions.length * 6;
    score = 0;
    timerId;
    currentQ = 0;
    answerSpaceEl.textContent = "";
    //removeT&F
    trueBtn.removeAttribute("id");
    falseBtn.removeAttribute("id");
    //remove form & start button
    userInput.setAttribute("id", "hide");
    startBtn.setAttribute("id", "hide");

    // establishing user's selection input 
    userSelection = "";

    timerEl.textContent = time;

    // replaces quiz instructions with question
    questionSpaceEl.textContent = questions[currentQ].question;
    // // updating CSS property to reveal 'T' and 'F' buttons
    // trueBtn.removeAttribute("id");
    // falseBtn.removeAttribute("id");
    // startBtn.setAttribute("id", "hide");

    console.log("Starting the quiz!");
    startTimer()
}

//START TIMER function counts down from 60s once 'start quiz' button is clicked
var startTimer = function () {
    timerId = setInterval(countdown, 1000);

    timerEl.textContent = time;

    displayQuestion()
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
        interimState()
    }
    else {
        wrongAnswer()
    }
}

// WRONG ANSWER SELECTED
var wrongAnswer = function () {
    // display message re incorrect answer
    answerSpaceEl.textContent = questions[currentQ].ifWrong;
    // subtract 5 seconds from clock timer, returning no less than 0
    time = Math.max(0, (time -= 5));

    timerEl.textContent = time;

    interimState()
}

var interimState = function () {
    trueBtn.setAttribute("id", "hide");
    falseBtn.setAttribute("id", "hide");
    nextBtn.removeAttribute("id");
    nextBtn.addEventListener("click", nextQuestion);
}

var nextQuestion = function () {
    nextBtn.setAttribute("id", "hide");
    trueBtn.removeAttribute("id");
    falseBtn.removeAttribute("id");
    answerSpaceEl.textContent = "";
    currentQ++;
    displayQuestion()
}

// QUIZ OVER function is triggered either by completion of all questions or reaching the maximum time available for the quiz (60 seconds)
quizOver = function () {
    clearInterval(timerId);
    trueBtn.setAttribute("id", "hide");
    falseBtn.setAttribute("id", "hide");
    userInput.removeAttribute("id");
    startBtn.removeAttribute("id");
    questionSpaceEl.textContent = "";
    
    var message = "";
    // a message displays with final score and option to input user initials
    if (time === 0 && currentQ < 10) {
        message += "You have run out of time. "
    }
    else {
        score = score + time;
        // answerSpaceEl.textContent = "Quiz complete! "
        message += "Quiz complete! "
    }
    answerSpaceEl.textContent = message + "Your score is " + score + ". Enter your name or initials and click 'submit' or play again!";

    saveStats()
}

// TIMER COUNTDOWN function
var countdown = function () {
    time = time - 1;
    timerEl.textContent = time;

    if (time <= 0) {
        quizOver();
    }
}

// SAVE STATS function collects user input (initials) and stores them in object with user's score
function saveStats() {

    highScoreBtn.innerHTML = "SUBMIT";
    // user stats object

    // make sure value wasn't empty
    if (userInput !== "") {

        // save to localstorage
        userInput.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
    }
}

    // VIEW HIGH SCORES BUTTON was clicked; 
    var displayHighScores = function (event) {
        event.preventDefault();

        location.href = "high-scores.html";

    }

    var saveInitials = function () {
        //reveal start button & user input form
        startBtn.removeAttribute("id");
        userInput.removeAttribute("id");

        localStorage.setItem("initials", initialsEl);
    }

    // // LOAD STATS function to get tasks from localStorage, convert from string format back into an array of objects and iterates through tasks array to create the elements on the page
    // var loadStats = function () {
    //     // get tasks from localStorage and account for the condition where there are no saved tasks
    //     var savedStats = localStorage.getItem("stats");

    //     if (savedStats === null) {
    //         return false;
    //     }
    //     // convert from string to an array of objects
    //     savedStats = JSON.parse(savedStats);

    //     // iterate through stats array to create elements on the page
    //     for (var i = 0; i < savedStats.length; i++) {
    //     // pass each stat object into the 'createStatEl()' function
    //     createStatEl(savedStats[i]);
    //     }
    // }


    // EVENT LISTENERS for button click events
    startBtn.addEventListener("click", startQuiz)
    trueBtn.addEventListener("click", trueOrFalse)
    falseBtn.addEventListener("click", trueOrFalse)
    highScoreBtn.addEventListener("click", displayHighScores)
