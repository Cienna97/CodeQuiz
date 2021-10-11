function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    var output = [];
    var answers;

    for(var i=0; i<questions.length; i++){

        answers = [];

        for(letter in questions[i].answers){

            answers.push(
                '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
                + questions[i].answers[letter]
            +'</label>'
            );
        }

        output.push(
            '<div class="questions">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }
    quizContainer.innerHTML = output.join('');
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
        questions: "What is my name?",
        answers: {
            a: 'Peanut',
            b: 'Vicky',
            c: 'Cienna'
        },
        correctAnswer: 'c'
    },
]






var buttonEl = document.querySelector("#save-data")