//two main ways of timing things in javascript
//setInterval takes two arguments, a function and a number and runs the function every x milliseconds 
var myInterval = setInterval(function () {
    console.log("I happened!")
}, 2 * 1000)
//setTimeout takes two arguments, a function and a number and runs the function once after x milliseconds have passed
var myTimeOut = setTimeout(function () {
    console.log("so did I!")
}, 5 * 1000)
//because we assigned each of our intervals to a variable, we can cancel them using clearInterval
function stopIntervals () {
    clearInterval(myInterval);
    clearInterval(myTimeOut)
}
//Just like with event listeners, we can use an anonymous function like in the previous examples, or
//pass a function defined elsewhere. Note the lack of parens after the function name
var myTimeOut = setInterval(stopIntervals, 10 * 1000)