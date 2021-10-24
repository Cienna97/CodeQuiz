


var score = 0;





const generateQuiz = document.getElementById('generate')
const questionContainer = document.getElementById('question-container')
const resultsContainer = document.getElementById('results')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex 

generateQuiz.addEventListener('click', startQuiz);







function startQuiz() {
    console.log('start')  
    generateQuiz.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    questionContainer.classList.remove('hide')
    //nextQuestion() 

    

    //Display Questions, click an answer if correct adds point,start the timer,  subracts time if incorrect, store the data and create a place to save highscore with initals 
}

function setNextQuestion(){
   showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
}


//function showResults(questions, quizContainer, resultsContainer){
 //var answerContainers = quizContainer.querySelectorAll('.answers');





 //for(var i=0; i<questions.length; i++){

    //userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

    //if(userAnswer===questions[i].correctAnswer){

        //numCorrect++;

    //answerContainers[i].style.color = 'lightgreen';
    //}

   // else{
      //  answerContainers[i].style.color = 'red';
    //}
 //}

//  resultsContainer.innerHTML = numCorrect + 'out of' + questions.length;




const questions = [
    {
        question: "What are the JavaScript Data Types?",
        answers: {
            a: "Number and String",
            b: "Boolean and Object",
            c: "a, b , and d",
            d: "Undefined"
        },
        correctAnswer: 'c'
    },
]

const questions = [
    {
        question: "Which company developed JavaScript",
        answers: {
            a: "Target",
            b: "Amazon",
            c: "Netscape",
            d: "Microsoft"
        },
        correctAnswer: 'c'
    },
]

const questions = [
    {
        question: "What is a prompt box?",
        answers: {
            a: "A box that allows you to select yes or no",
            b: "A fancy box",
            c: "A box that allows one to input text by providing a box",
            d: "Nothing" 
        },
        correctAnswer: 'c'
    },
]

const questions = [
    {
        question: "",
        answers: {
            a: "",
            b: "",
            c: ""
        },
        correctAnswer: 'c'
    },
]

const questions = [
    {
        question: "How do you read and write a file using JavaScript?",
        answers: {
            a: "Using JavaScript extensions",
            b: "Copy and paste",
            c: "Both a and d",
            d: "Using a web page and Active X objects"
        },
        correctAnswer: 'c'
    },
]

const questions = [
    {
        question: "What are all the looping structures in JavaScript?",
        answers: {
            a: "For",
            b: "While",
            c: "a, b, and d",
            d: "Do-while loops"
        },
        correctAnswer: 'c'
    },
]




//generate.addEventListener("click", generateQuiz);




//var buttonEl = document.querySelector("#save-data")