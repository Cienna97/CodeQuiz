const score = 0;

const generateQuiz = document.getElementById('generate')
const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const resultsContainerElement = document.getElementById('results')
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
    setNextQuestion() 

    

    //Display Questions, click an answer if correct adds point,start the timer,  subracts time if incorrect, store the data and create a place to save highscore with initals 
}

function setNextQuestion(){
    resetButton()
   showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {
    questionElement.innerText = question.question
    questions.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function selectAnswer(e) {

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
function resetButton() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}



const questions = [
    {
        question: "What are the JavaScript Data Types?",
        answers: [
            {text: 'Number and String', correct: false },
            {text: 'Boolean and Object', correct: false},
            {text: 'a, b, and d', correct: true},
            {text: 'Undefined', correct: false}

        ] 
    },


    {
        question: "Which company developed JavaScript?",
        answers: [
            {text: 'Target', correct: false},
            {text: 'Amazon', correct: false},
            {text: 'Netscape', correct: true},
            {text: 'Microsoft', correct: false}
        ]
    },


{
    question: "What is a prompt box?",
    answers: [
        {text: 'A box that allows you to select yes or no', correct: false},
        {text: 'A fancy box', correct: false},
        {text: 'A box that allows one to input text by providing a box', correct: true},
        {text: 'Nothing', correct: false}
    ]
},

{
    question: "What are all the types of pop up boxes in JavaScript?",
    answers: [
        {text: 'Alert', correct: false},
        {text: 'Confirm', correct: false},
        {text: 'Prompt', correct: false},
        {text: 'All of the above', correct: true}
    ]
},

{
    question: "How do you read and write a file using JavaScript?",
    answers: [
        {text: 'Using JavaScript extentions', correct: false},
        {text: 'Copy and paste', correct: false},
        {text: 'Both a and d', correct: true},
        {text: 'Using a web page and Active X objects', correct: false}
    ]
},


{
    question: "What are the looping structures in JavaScript?",
    answers: [
        {text: 'For', correct: false},
        {text: 'While', correct: false},
        {text: 'a, b, and d', correct: true},
        {text: 'Do-while loops', correct: false}
    ]
}











//var buttonEl = document.querySelector("#save-data")

  