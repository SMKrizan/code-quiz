// VIEW HIGH SCORES BUTTON was clicked; 
returnBtn = document.querySelector("button");
var placeToPage = document.getElementById("scores");

// LOAD STATS function to get tasks from localStorage, convert from string format back into an array of objects and iterates through tasks array to create the elements on the page
var loadStats = function () {
    // get tasks from localStorage and account for the condition where there are no saved tasks
    var savedStats = localStorage.getItem("stats");

    if (!savedStats) {
        stats = [];
        return false;
    }

    // convert from string to an array of objects
    savedStats = JSON.parse(savedStats);

    // iterate through stats array to create elements on the page
    for (var i = 0; i < savedStats.length; i++) {
        // pass each stat object into the 'createStatEl()' function
        displayStats(savedStats[i]);
    }
}

var displayStats = function (savedStats) {
    console.log(savedStats);
    
    // create new entry into list of saved stats
    var statsListEl = document.createElement("li");
    statsListEl.className = "stats";
    console.log(statsListEl);

    // create div to hold stats info and add to list item
    var userStatsEl = document.createElement("div");
    userStatsEl.className = "user-stats";
    userStatsEl.textContent = '';
    userStatsEl.innerHTML = "<h3 class='user-name'> Name: " + savedStats.name + 
                            "</h3><p class='user-score'> Score: " + savedStats.score + 
                            "</p><p class='event-id'> Timestamp: " + savedStats.id + "</p>";
    statsListEl.appendChild(userStatsEl);
    placeToPage.appendChild(statsListEl);
    
}

var returnToQuiz = function (event) {
    event.preventDefault();

    location.href = "index.html";

}

returnBtn.addEventListener("click", returnToQuiz)

loadStats()
