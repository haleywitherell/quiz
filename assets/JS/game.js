// variables 
var question = document.querySelector("#question");
var choices = Array.from(document.querySelectorAll(".choice-text"));
var choicesBtn = Array.from(document.querySelectorAll(".choice-container"));
var timeEl = document.querySelector("#timeRemaining")
var scoreText = document.querySelector("#score");

let currentQuestion = {}
let acceptingAnswers = true
let timerCount = 60
let availableQuestions = {}

// Quiz Questions 
let questions = [
{
    question: "What do you not use to declare a variable in js?",
    choices: [
        "var", "const", "dec", "let"
    ],
    answer: 2,
},
{
    question: "What does not belong?",
    choices: [
        "string", "boolean", "number", "function"
    ],
    answer: 3, 
},
{
    question: "What goes in brackets []?",
    choices: [
        "arrays", "variables", "objects", "functions"
    ],
    answer: 0,
},
{
    question: "What is not a loop",
    choices: [
        "while", "for", "if/else", "the"
    ],
    answer: 3,
},
{
    question: "What did I not use to build this quiz?",
    choices: [
        "Javascript", "JSON", "HTML", "CSS"
    ],
    answer: 1,
}
]
// console.log(gamePage, endPage)
// gamePage.style.display = "none"
// lastPage.style.display = "none"

startGame = () => {
    startTimer()
    availableQuestions = [...questions]

    getNewQuestion()
}

// function 1 - get new question
getNewQuestion = () => {
    if (availableQuestions.length === 0) {
        localStorage.setItem("mostRecentTime", timer)

        return window.location.assign("./end.html")
    }

var questionIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionIndex]
question.textContent = currentQuestion.question

choices.forEach((choice, i) => { 
    var number = choice.dataset["number"]
    choice.innerText = currentQuestion.choices[i]
})

availableQuestions.splice(questionIndex, 1)

acceptingAnswers = true

}


choicesBtn.forEach(choice => {
    choice.addEventListener("click", e => {
        // if(!acceptingAnswers) return

        acceptingAnswers = false
        var selectedChoice = e.target
        // console.log(selectedChoice)
        var selectedAnswer = currentQuestion.choices[parseInt(selectedChoice.dataset["number"])]
        // console.log(selectedAnswer)

        let classToApply = selectedAnswer == currentQuestion.choices[currentQuestion.answer] ? "correct" : "incorrect"
        // console.log(classToApply)
        if(classToApply === "correct") {
            // Move to next question??
            console.log("You are right yay")
        }else {
            console.log("wrong")
        }
        
        setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()

        }, 1000) 

    })
})

startGame()

// Timer Function
function startTimer() {
    timer = setInterval(function() {
      timerCount--;
      if (timeEl) {
        timeEl.textContent = timerCount 
      }
    
      if(timerCount <=0 || availableQuestions.length == 0){
        clearInterval(timer)
        window.location.assign("./end.html")
      }
    }, 1000);
  }

//   document.getElementById("form").addEventListener("submit",function(event) {
//     event.preventDefault();
// });
// console.log("hello")

  