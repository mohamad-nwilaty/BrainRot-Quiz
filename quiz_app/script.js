const quesstions = [
    {
        question : "sticking out your gyat for the ---",
        answers:[
            {text:"rizler" , correct: true},
            {text:"ohio" , correct: false},
            {text:"fanum tax" , correct: false},
            {text:"chad" , correct: false}
            
        ]
    },
    {
        question : "I cant talk now Im --- ",
        answers:[
            {text:"rizzing" , correct: false},
            {text:"Gay" , correct: false},
            {text:"mewing" , correct: true},
            {text:"in ohio" , correct: false}
            
        ]
    },
    {
        question : "Erm what the ---",
        answers:[
            {text:"ohio" , correct: false},
            {text:"fuck" , correct: false},
            {text:"gyat" , correct: false},
            {text:"sigma" , correct: true}
            
        ]
    },
    {
        question : "Eww go outside and touch some",
        answers:[
            {text:"kids" , correct: false},
            {text:"women" , correct: false},
            {text:"grass" , correct: true},
            {text:"men" , correct: false}
            
        ]
    }
]
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let qurrentQuestionIndex = 0 ;
let score = 0 ;

function startQuiz(){
    clerAnswers();
    qurrentQuestionIndex = 0 ;
    score = 0
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    clerAnswers();
    let qurrentQuestion = quesstions[qurrentQuestionIndex] ;
    let questionNo = qurrentQuestionIndex +1 ;
    questionElement.innerHTML = questionNo + ". " + qurrentQuestion.question ;

    qurrentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text ;
        button.classList.add("btn");
        button.dataset.correct = answer.correct ;
        answerButtons.appendChild(button);
        button.addEventListener("click" , checkAnswer)

    });
}

function clerAnswers(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function checkAnswer(e){
    const selctedButton = e.target;
    if(selctedButton.dataset.correct === "true"){
        selctedButton.classList.add("correct");
        score++;
    }
    else{
        selctedButton.classList.add("false");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true ;
    });
    nextButton.style.display = "block";
}

function handleNextButton(){
    if(qurrentQuestionIndex < quesstions.length){
        nextquestin();
    }
    else{
        startQuiz();
    }
}

function nextquestin(){
    qurrentQuestionIndex ++;
    if(qurrentQuestionIndex < quesstions.length){
        showQuestion();
    }
    else{
        showScore();
    }

}

function showScore(){
    clerAnswers();
    let perfect = "you still have some brain left |WuW|";
    if(score === quesstions.length){
        perfect = "you are cooked XD !";
    }
    questionElement.innerHTML = `you scored ${score} / ${quesstions.length} <br> ${ perfect}`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click" , handleNextButton);

startQuiz();
