var start = document.querySelector("#start");
var questions = document.querySelector("#questions");
var answers = document.querySelector(".answers");
var questionDisplay = document.querySelector("#question-display");


questions =[
    {
        question: "WHat is?"
        choices:
    }
]


var time = 100;
    var intervalID = setInterval(function(){
        time--
        console.log(time)
    }, 1000)
clearInterval(intervalID)
time +=10;
time -=10;


startButton.addEventListener("click", startQuiz)
function startQuiz() {
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    setQuestion()
}

function setQuestion() {


}

function answerChoice() {

}