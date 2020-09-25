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
// var startBtn = document.getElementsByClassName("start-quiz");
var scoreBtn = document.getElementById("score");
var initialsEl = document.getElementById("initials");

// set up for delegating click responsibility to div.container containing button elements
var pageContentEl = document.querySelector("container");

// this function listens to events within entire div.container document (similar to Taskinator) 
var quizButtonHandler = function (event) {
    // 'event.target' reports the element on which the event ("click") occurs
    console.log(event.target);

    // get target element from event
    var targetEl = event.target;

    // START BUTTON was clicked
    if (targetEl.matches(".start-quiz")) {
        // start timer countdown
        startTimer()
        // present questions
        selectAnswer()
        // unhide TRUE/FALSE buttons
        unhideTrueBtn = trueBtn.removeAttribute("id");
        unhideFalseBtn = falseBtn.removeAttribute("id");
    }

    // TRUE BUTTON was clicked; 
    else if (targetEl.matches(".true")) {
        userSelection = "T";
        currentQ++;
        selectAnswer();
    }

    // FALSE BUTTON was clicked;
    else if (targetEl.matches(".false")) {
        userSelection = "F";
        currentQ++;
        selectAnswer();
    }

    // VIEW HIGH SCORES BUTTON was clicked; 
    else if (targetEl.matches(".scores")) {
        document.getElementById("index").style.display = "none";
        document.getElementById("high-scores").style.display = "block";
    }
};

//START TIMER function counts down from 60s once 'start quiz' button is clicked
var startTimer = function () {
    var countdown = time - 1;
    timerEl.textContent = setInterval(countdown, 1000);
    //the timer is stopped with 'clearInterval'
    if (time = 0) {
        clearInterval(startTimer);
        quizOver();
    }
}

// SELECT ANSWER function will wait for T/F selection, display whether answer is correct and move to new question
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
            // affirm selection;
            answerSpaceEl.textContent = "That is Correct!";
        }
        else if {
            // display message re incorrect answer and subtract 5 seconds from clock timer
            ((document.trueBtn.addEventListener("click", selectAnswer)) || 
            (document.trueBtn.addEventListener("click", selectAnswer)))
            answerSpaceEl.textContent = questions[currentQ].ifWrong;
            time = time - 5;
        }
    }
    else {
        quizOver()
    }
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

pageContentEl = addEventListener("click", quizButtonHandler)
