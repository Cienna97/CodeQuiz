function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    var output = [];
    var answers;
}

function showQuestions(questions, quizContainer){

}

function showResults(questions, quizContainer, resultsContainer){

}

showQuestions(questions, quizContainer);

submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
}


var questions = [
    {
        question: "What is my name?",
        answers: {
            a: 'Peanut',
            b: 'Vicky',
            c: 'Cienna'
        },
        correctAnswer: 'c'
    },
]






var buttonEl = document.querySelector("#save-data")