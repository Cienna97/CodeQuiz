


var score = 0;





var generateQuiz = document.getElementById('generate');
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');






function generateQuiz(){

    //Display Questions, click an answer if correct adds point,start the timer,  subracts time if incorrect, store the data and create a place to save highscore with initals 
}

function showResults(questions, quizContainer, resultsContainer){
 var answerContainers = quizContainer.querySelectorAll('.answers');



 var numCorrect = 0;

 //for(var i=0; i<questions.length; i++){

    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

    if(userAnswer===questions[i].correctAnswer){

        numCorrect++;

    answerContainers[i].style.color = 'lightgreen';
    }

    else{
        answerContainers[i].style.color = 'red';
    }
 }

//  resultsContainer.innerHTML = numCorrect + 'out of' + questions.length;


function showQuestions(questions, quizContainer){


var questions = [
    {
        questions: "What are the JavaScript Data Types?",
        answers: {
            a: "Number and String",
            b: "Boolean and Object",
            c: "a, b , and d",
            d: "Undefined"
        },
        correctAnswer: 'c'
    },
]

var questions = [
    {
        questions: "Which company developed JavaScript",
        answers: {
            a: "Target",
            b: "Amazon",
            c: "Netscape",
            d: "Microsoft"
        },
        correctAnswer: 'c'
    },
]

var questions = [
    {
        questions: "What is a prompt box?",
        answers: {
            a: "A box that allows you to select yes or no",
            b: "A fancy box",
            c: "A box that allows one to input text by providing a box",
            d: "Nothing" 
        },
        correctAnswer: 'c'
    },
]

var questions = [
    {
        questions: "What is love?",
        answers: {
            a: "trusing one another",
            b: "meaningful relationship",
            c: "It's not real"
        },
        correctAnswer: 'c'
    },
]

var questions = [
    {
        questions: "How do you read and write a file using JavaScript?",
        answers: {
            a: "Using JavaScript extensions",
            b: "Copy and paste",
            c: "Both a and d",
            d: "Using a web page and Active X objects"
        },
        correctAnswer: 'c'
    },
]

var questions = [
    {
        questions: "What are all the looping structures in JavaScript?",
        answers: {
            a: "For",
            b: "While",
            c: "a, b, and d",
            d: "Do-while loops"
        },
        correctAnswer: 'c'
    },
]}




generate.addEventListener("click", generateQuiz)




//var buttonEl = document.querySelector("#save-data")