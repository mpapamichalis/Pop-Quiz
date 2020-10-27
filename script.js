var startButton = document.getElementById("start-btn");
var questionsEl = document.querySelector("#questions");
var choicesEl = document.getElementById("choices");
var timerEl = document.getElementById("timer");

// var questions =[
//     {
//         question: "What is?"
//         choices:
//     }
// ]


// var timer = 100;
//     var intervalID = setInterval(function(){
//         time--
//         console.log(time)
//     }, 1000)
// clearInterval(intervalID)
// time +=10;
// time -=10;

function startQuiz () {
    console.log("the button was clicked")
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timer
}

startButton.onclick = startQuiz

function setQuestion() {


}

function answerChoice() {

}