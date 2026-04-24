//state - tracks everything about the quiz
let currentTopic=null;
let currentQuestionIndex=0;
let score= 0;
let timerInterval=null;
let timeLeft= 15;

//elements - grabiing all HTML elements once 
const homeScreen= document.getElementById('home-screen');
const quizScreen= document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const subjectGrid= document.getElementById('subject-grid');

//init-- this runs when the page will loads first 
function init() {
    topics.forEach(function(topic){
        const btn=document.createElement('button');
        btn.textContent= topic.title;
        btn.addEventListener('click',function(){
            startQuiz(topic);
        });
        subjectGrid.appendChild(btn);
    });
}

init()
function startQuiz(topic) {
    currentTopic= topic;
    currentQuestionIndex=0;
    score=0;
    homeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
}