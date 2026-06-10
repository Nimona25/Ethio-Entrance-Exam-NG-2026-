const questions = [
{
question: "A car travels 60 m in 3 s. What is its speed?",
options: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"],
answer: "20 m/s"
},
{
question: "Which physical quantity is measured in Newtons?",
options: ["Mass", "Force", "Velocity", "Energy"],
answer: "Force"
},
{
question: "What is the SI unit of work?",
options: ["Watt", "Joule", "Newton", "Pascal"],
answer: "Joule"
},
{
question: "Which law states that every action has an equal and opposite reaction?",
options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Gravitation"],
answer: "Newton's Third Law"
},
{
question: "What is the acceleration due to gravity on Earth?",
options: ["8.9 m/s²", "9.8 m/s²", "10.8 m/s²", "11.8 m/s²"],
answer: "9.8 m/s²"
},
{
question: "Which device measures electric current?",
options: ["Voltmeter", "Ammeter", "Thermometer", "Barometer"],
answer: "Ammeter"
},
{
question: "What is the SI unit of electric current?",
options: ["Volt", "Ohm", "Ampere", "Watt"],
answer: "Ampere"
},
{
question: "Light travels fastest in:",
options: ["Water", "Glass", "Air", "Vacuum"],
answer: "Vacuum"
},
{
question: "What type of lens is used to correct short-sightedness?",
options: ["Convex", "Concave", "Cylindrical", "Plane"],
answer: "Concave"
},
{
question: "What is the formula for density?",
options: ["Mass × Volume", "Mass ÷ Volume", "Volume ÷ Mass", "Mass + Volume"],
answer: "Mass ÷ Volume"
},
];
let current = 0;
let score = 0;
let timeLeft = 7200; // 10 minutes
function startTimer(){
setInterval(function(){

if(timeLeft <= 0){
finishExam();
return;
}
timeLeft--;
let hours = Math.floor(timeLeft / 7200);
let minutes = Math.floor((timeLeft % 7200) / 60);
let seconds = timeLeft % 60;
if(hours < 10) hours = "0" + hours;
if(minutes < 10) minutes = "0" + minutes;
if(seconds < 10) seconds = "0" + seconds;
document.getElementById("timer").innerHTML =
"Time Left: " + hours + ":" + minutes + ":" + seconds;
if(seconds < 10){
seconds = "0" + seconds;
}
document.getElementById("timer").innerHTML =
"Time Left: " + minutes + ":" + seconds;

},1000);

}
function loadQuestion(){
if(current >= questions.length){
finishExam();
return;
}
document.getElementById("questionCounter").innerHTML =
"Question " + (current + 1) + " of " + questions.length;
let progress =
((current + 1) / questions.length) * 100;
document.getElementById("progressBar").style.width =
progress + "%";

document.getElementById("questionElement").innerHTML =
(current + 1) + ") " +
questions[current].question;
let optionsHTML = "";
questions[current].options.forEach(function(option){
optionsHTML +=
`
<label class="option">
<input type="radio" name="answer" value="${option}">
${option}
</label>
`;
});
document.getElementById("options").innerHTML =
optionsHTML;
}
function nextQuestion() {
    let selected = document.querySelector('input[name="answer"]:checked');
    if (selected) {
        if (selected.value === questions[current].answer) {
            score++;
        }
    }
    current++;

    if (current >= questions.length) {
        finishExam();
        return;
    }

    loadQuestion();
}
function previousQuestion() {
    if (current > 0) {
        current--;
        loadQuestion();
    }
}
function finishExam() {

    document.getElementById("questionCounter").innerHTML = "";
    document.getElementById("questionElement").innerHTML = "Exam Finished";
    document.getElementById("options").innerHTML = "";

    document.getElementById("result").innerHTML =
        "Your Score: " + score + " / " + questions.length;

    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("restartBtn").style.display = "inline-block";
}
startTimer();
loadQuestion();