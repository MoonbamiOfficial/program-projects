
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

let currentQuestionIndex = 0;
let score = 0;

function startAnimeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.textContent = "Next";
    showQuestion();
}
function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex+1;
    question.textContent = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        answersBtn.appendChild(button);
    })
}

startAnimeQuiz();