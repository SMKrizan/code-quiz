// VIEW HIGH SCORES BUTTON was clicked; 
returnBtn = document.querySelector("button");

// // get saved scores from localstorage, or if not any, set to empty array
// var highscores =
//     JSON.parse(window.localStorage.getItem("highscores")) || [];

var returnToQuiz = function (event) {
    event.preventDefault();

    location.href = "index.html";

}

returnBtn.addEventListener("click", returnToQuiz)
