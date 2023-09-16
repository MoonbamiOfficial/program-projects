
const questions = [
    {
        question: "Who is the main character in Fairy Tail?",
        answers: [
            {text : "Natsu", correct: false},
            {text : "Lucy", correct: true},
            {text : "Gray", correct: false},
            {text : "Erza", correct: false}
        ]
    },
    {
        question: "Who is the \"beater\" in Sword Art Online?",
        answers: [
            {text : "Asuna", correct: false},
            {text : "Silica", correct: false},
            {text : "Kirito", correct: true},
            {text : "Alice", correct: false}
        ]
    },
    {
        question: "Which Pyrokinetic generation has the ability to generate fire from themselves?",
        answers: [
            {text : "3rd", correct: true},
            {text : "2nd", correct: false},
            {text : "1st", correct: false},
            {text : "None of the Above", correct: false}
        ]
    },
];
const question = document.querySelector('#question');
const answersBtn = document.querySelector('#answers-btn');
const nextBtn = document.querySelector('#next-btn');
nextBtn.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length) handleNextButton();
    else startAnimeQuiz();
});

let currentQuestionIndex = 0;
let score = 0;

function startAnimeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.textContent = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex+1;
    question.textContent = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        answersBtn.appendChild(button);
        if(answer.correct) button.dataset.correct = answer.correct;
        button.addEventListener('click', selectedAnswer);
    })
}
function selectedAnswer(btn) {
    const selectedBtn = btn.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect)selectedBtn.classList.add("correct");
    else selectedBtn.classList.add("incorrect");
    Array.from(answersBtn.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
            score++;
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) showQuestion();
    else showScore();
}
function showScore() {
    resetState();
    question.textContent = `You got ${score} points out of ${questions.length}!`;
    nextBtn.textContent = "Play Again?";
    nextBtn.style.display = "block";
}
function resetState() {
    nextBtn.style.display = "none";
    while(answersBtn.firstChild) {
        answersBtn.removeChild(answersBtn.firstChild);
    }
}
startAnimeQuiz();