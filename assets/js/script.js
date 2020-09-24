//GLOBAL VARIABLES
var time = 60;
var score = 0;

//DOM ELEMENTS
var timerEl = document.getElementById("timer");
var questionsEl = document.getElementById("questions");
var startBtn = document.getElementById("start-quiz");
var trueBtn = document.getElementById("true");
var falseBtn = document.getElementById("false");
var scoreBtn = document.getElementById("score");
var qSpaceEl = document.getElementById("question-space");
var aSpaceEl = document.getElementById("answer-space");
var initialsEl = document.getElementById("initials");

// START BUTTON will trigger presentation of the first question in place of the instructions within the "question-space"
//hide quiz instructions

//start countdown
startButton.onClick = countdown;
//get question

// TIMER function counts down from 60s once 'start quiz' button is clicked, with a 5s penalty for wrong answers.
//setTimeout takes two arguments, a function and a number and runs the function once after x milliseconds have passed
var startTimer = setTimeout(stopTimer(), 60 * 1000);
//the timer is stopped with 'clearInterval'
var stopTimer = function () {
   if (timer < 0) {
       clearInterval(timer);
   }
}

//SCORING FUNCTION will award 2 points per question. At the end of the game, any time remaing will be added to the score, so 10 seconds remaining=10 points.
// We start the game with a score of 0.


// ANSWER SUBMIT function will display whether answer is correct and move to new question
// Loop over each object within the 'questions' array
for (var i = 0; i < questions.length; i++) {
    // Display current question to user and T/F buttons
    // User clicks either 'T' button or 'F' button
    var userAnswer = (questions[i].answer);

    // Compare answers
    if (
      (userAnswer === T && questions[i].answer === 'T') ||
      (userAnswer === F && questions[i].answer === 'F');
    ) {
      // Increase score
      score = score + 2;
      //display "That is correct!";
    } else {
      // display message if incorrect answer is provided and subtract 5 seconds from clock timer
      questions[i].ifWrong
      timer = timer - 5;
    }
  }
// SAVE STATS function takes and saves input of the user's initials and stores them along with the user's score  

// QUIZ END function is triggered either by completion of all questions or reaching the maximum time available for the quiz (60 seconds)
// IF TIME RUNS OUT before the quiz is complete, a "You're out of time - try again!" message displays and the "start quiz" button re-appears
// IF USER COMPLETES QUIZ, a "Congratulations! You finished in time" message displays and the final score is displayed with input area for user's initials


