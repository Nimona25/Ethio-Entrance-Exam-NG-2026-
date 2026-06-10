const questions = [

{
question:"1) What is the chemical symbol for water?",
options:["H2O","CO2","O2","NaCl"],
answer:"H2O"
},

{
question:"2) What is the atomic number of Hydrogen?",
options:["1","2","8","12"],
answer:"1"
},

{
question:"3) Which gas do plants use in photosynthesis?",
options:["Oxygen","Carbon Dioxide","Nitrogen","Hydrogen"],
answer:"Carbon Dioxide"
},

{
question:"4) What is the pH of pure water?",
options:["5","6","7","8"],
answer:"7"
},

{
question:"5) Which particle has a negative charge?",
options:["Proton","Neutron","Electron","Nucleus"],
answer:"Electron"
},

{
question:"6) Which element is represented by O?",
options:["Gold","Oxygen","Iron","Silver"],
answer:"Oxygen"
},

{
question:"7) What is NaCl commonly called?",
options:["Sugar","Salt","Water","Baking Soda"],
answer:"Salt"
},

{
question:"8) Which metal is liquid at room temperature?",
options:["Mercury","Iron","Copper","Aluminium"],
answer:"Mercury"
},

{
question:"9) What is the smallest unit of an element?",
options:["Cell","Atom","Molecule","Compound"],
answer:"Atom"
},

{
question:"10) Which acid is found in vinegar?",
options:["Nitric Acid","Sulfuric Acid","Acetic Acid","Hydrochloric Acid"],
answer:"Acetic Acid"
},

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