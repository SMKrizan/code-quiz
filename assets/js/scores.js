// VIEW HIGH SCORES BUTTON was clicked; 
returnBtn = document.querySelector("button");

// get saved scores from localstorage, or if not any, set to empty array
var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

// LOAD STATS function to get tasks from localStorage, convert from string format back into an array of objects and iterates through tasks array to create the elements on the page
var loadStats = function () {
    // get tasks from localStorage and account for the condition where there are no saved tasks
    var savedStats = localStorage.getItem("stats");

    if (!savedStats) {
        stats = [];
        return false;
    }
    console.log("stats located")

    // convert from string to an array of objects
    savedStats = JSON.parse(savedStats);
    console.log(savedStats);

    // iterate through stats array to create elements on the page
    for (var i = 0; i < savedStats.length; i++) {
        // pass each stat object into the 'createStatEl()' function
        createStatEl(savedStats[i]);
    }
}

var displayStats = function (savedStats) {
    console.log(userStatsObj);
    console.log(userStatsObj.status);
    
    // create new entry into high stats list
    var statsListEl = document.createElement("li");
    statsListEl.className = "stats";

    // create div to hold stats info and add to list item
    var userStatsEl = document.createElement("div");
    userStatsEl.className = "user-stats";
    userStatsEl.innerHTML = "<h3 class='user-name'>" + userStatsObj.name + "</h3><span class='user-score'>" + userStatsObj.score + "</span>";
    statsListEl.appendChild(userStatsEl);

}

var returnToQuiz = function (event) {
    event.preventDefault();

    location.href = "index.html";

}

returnBtn.addEventListener("click", returnToQuiz)
