const questions = [

{
question:"Choose the correct spelling.",
options:["Recieve","Receive","Receve","Receeve"]
},

{
question:"What is the synonym of 'Happy'?",
options:["Sad","Angry","Joyful","Tired"]
},

{
question:"Choose the correct sentence.",
options:[
"He go to school.",
"He goes to school.",
"He going school.",
"He gone school."
]
},

{
question:"What is the antonym of 'Big'?",
options:["Large","Huge","Small","Wide"]
},

{
question:"Choose the noun.",
options:["Run","Beautiful","School","Quickly"]
},

{
question:"Which word is a verb?",
options:["Teacher","Jump","Book","Chair"]
},

{
question:"Complete: She ___ a letter.",
options:["write","writes","writing","written"]
},

{
question:"What is the plural of 'Child'?",
options:["Childs","Children","Childes","Childrens"]
},

{
question:"Choose the adjective.",
options:["Quickly","Run","Beautiful","Teacher"]
},

{
question:"What punctuation ends a question?",
options:[".","!","? ",","]
}

];

let currentQuestion = 0;

let score = 0;

function loadQuestion(){

document.getElementById("question-number").innerHTML =
"Question " + (currentQuestion+1) + " of " + questions.length;

document.getElementById("question").innerHTML =
(currentQuestion+1) + ") " +
questions[currentQuestion].question;

let optionsHTML = "";

questions[currentQuestion].options.forEach(option => {

optionsHTML += `
<div class="option">
<label>
<input type="radio" name="answer">
${option}
</label>
</div>
`;

});

document.getElementById("options").innerHTML = optionsHTML;

document.getElementById("progress-bar").style.width =
((currentQuestion+1)/questions.length*100) + "%";
}

function nextQuestion(){

if(currentQuestion < questions.length - 1){

currentQuestion++;

loadQuestion();

}else{

document.getElementById("question-number").innerHTML =
"Exam Finished!";

document.getElementById("question").innerHTML =
"Your Score: " + score + " / " + questions.length;

document.getElementById("options").innerHTML = "";

}

}

function previousQuestion(){
if(currentQuestion > 0){
currentQuestion--;
loadQuestion();
}
}

loadQuestion();