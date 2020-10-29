var startButton = document.getElementById("start-btn");
var questions = document.querySelector("#questions");
var choicesEl = document.getElementById("choices");
var timerEl = document.getElementById("timer");
var choices = Array.from(document.getElementsByClassName("choice-text"));

 var questions =[
    {
        question: "Inside which HTML element do we put the JavaScript??",
        choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
        answer: [0],      
    },
        
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choices: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"],
        answer: [2],
    },
    
    {
        question: "How do you write 'Hello World' in an alert box?",
        choices: ["msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');"],
        answer: [3],
    },
        
 ];



var timer = 100;
    var intervalID = setInterval(function(){
        time--
        console.log(time)
    }, 1000)
clearInterval(intervalID)


function startQuiz () {
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