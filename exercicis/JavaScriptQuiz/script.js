const questions = [
  {
    image: "1.png",
    question: "Què mostrarà?",
    answers: ["NaN", "15", "105"],
    correctAnswer: 2
  },
  {
    image: "2.png",
    question: "Aquest codi funciona?",
    answers: ["Sí i mostra 10", "Sí i mostra 25", "No"],
    correctAnswer: 0
  },
  {    
    image: "3.png",
    question: "Aquest codi funciona?",
    answers: ["No", "sí i mostra  7", "sí i mostra 52"],
    correctAnswer: 2
  },
  {
    image: "4.png",
    question: "Quin valor mostrarà alert?",
    answers: ["1", "5", "0"],
    correctAnswer: 2
  },
  {
    image: "5.png",
    question: " Aquest codi funciona?",
    answers: ["No", "sí i mostra  0", "sí i mostra 12"],
    correctAnswer: 0
  },
  {
    image: "6.png",
    question: "Quin valor mostra?",
    answers: ["true", "2 €", "10 €"],
    correctAnswer: 1
  },
  {
    image: "7.png",
    question: "Quin valor mostrarà alert?",
    answers: ["8", "6", "5"],
    correctAnswer: 0
  },
  {
    image: "8.png",
    question: "Què mostrarà per pantalla?",
    answers: ["Volvo Saab Ford", "Saab Ford", "Ford"],
    correctAnswer: 1
  },
  {
    image: "9.png",
    question: "Quin valor mostrarà alert?",
    answers: ["Juanito", "Maria", "Juanito Maria"],
    correctAnswer: 1
  },
  {
    image: "10.png",
    question: "Què mostrarà l’alert?",
    answers: ["L1", "L2", "demo2"],
    correctAnswer: 1
  },


];

let currentQuestion = 0;
let score = 0;
let timer;
const totalTime = 120;

const start = document.getElementById("start");
const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const timerElement = document.getElementById("timer");
const questionTextElement = document.getElementById("question-text");
const answerElements = document.querySelectorAll("#answers input[type='radio']");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function init() {
  start.classList.remove("hide");
  questionContainer.classList.add("hide");
  resultContainer.classList.add("hide");
  score = 0;
}

function startQuiz() {
  start.classList.add("hide");
  questionContainer.classList.remove("hide");
  setNextQuestion();
  startTimer();
}

function setNextQuestion() {
  resetAnswers();
  if (currentQuestion < questions.length) {
    const question = questions[currentQuestion];
    questionTextElement.textContent = question.question;
    questionTextElement.innerHTML += "<br><img src='" + question.image + "' alt='Imatge de la pregunta'>";
    for (let i = 0; i < answerElements.length; i++) {
      answerElements[i].nextElementSibling.textContent = question.answers[i];
    }
  } else {
    endQuiz();
  }
}

function resetAnswers() {
  for (let i = 0; i < answerElements.length; i++) {
    answerElements[i].checked = false;
  }
}

function checkAnswer() {
  const selectedAnswer = document.querySelector("#answers input[name='answer']:checked");
  if (selectedAnswer) {
    const selectedAnswerIndex = Array.from(answerElements).indexOf(selectedAnswer);
    if (selectedAnswerIndex === questions[currentQuestion].correctAnswer) {
      score++;
    }
    currentQuestion++;
    setNextQuestion();
  }
}

function endQuiz() {
  clearInterval(timer);
  questionContainer.classList.add("hide");
  resultContainer.classList.remove("hide");
  scoreElement.innerHTML = `Preguntes respostes: ${currentQuestion}/${questions.length}<br><br>Correctes: ${score}<br><br>Puntuació: ${score * 10}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  resultContainer.classList.add("hide");
  questionContainer.classList.remove("hide");
  setNextQuestion();
  startTimer();
}

function startTimer() {
  let timeLeft = totalTime;
  timerElement.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft === 0) {
      endQuiz();
    }
  }, 1000);
}

document.getElementById("start-btn").addEventListener("click", startQuiz);
nextButton.addEventListener("click", checkAnswer);
document.getElementById("restart-btn").addEventListener("click", restartQuiz);

init();