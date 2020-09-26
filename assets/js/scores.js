// VIEW HIGH SCORES BUTTON was clicked; 
returnBtn = document.querySelector("button");

// // get saved scores from localstorage, or if not any, set to empty array
// var highscores =
//     JSON.parse(window.localStorage.getItem("highscores")) || [];

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


var returnToQuiz = function (event) {
    event.preventDefault();

    location.href = "index.html";

}

returnBtn.addEventListener("click", returnToQuiz)
