const questions = [
{
question:"What is the basic unit of life?",
options:["Cell","Tissue","Organ","Organism"],
answer:0
},
{
question:"Which organ pumps blood through the body?",
options:["Lung","Kidney","Heart","Liver"],
answer:2
},
{
question:"What carries genetic information?",
options:["DNA","Water","Protein","Fat"],
answer:0
},
{
question:"Which process do plants use to make food?",
options:["Respiration","Photosynthesis","Digestion","Transpiration"],
answer:1
},
{
question:"Which blood cells fight infection?",
options:["Red blood cells","White blood cells","Platelets","Plasma"],
answer:1
},
{
question:"What gas do plants absorb from the atmosphere?",
options:["Oxygen","Hydrogen","Carbon dioxide","Nitrogen"],
answer:2
},
{
question:"Which organ is responsible for filtering blood?",
options:["Heart","Kidney","Brain","Skin"],
answer:1
},
{
question:"What is the largest organ in the human body?",
options:["Liver","Brain","Skin","Lung"],
answer:2
},
{
question:"Which vitamin is produced when skin is exposed to sunlight?",
options:["Vitamin A","Vitamin B","Vitamin C","Vitamin D"],
answer:3
},
{
question:"What is the powerhouse of the cell?",
options:["Nucleus","Mitochondria","Ribosome","Cell wall"],
answer:1
}
];

let currentQuestion = 0;

function loadQuestion(){
document.getElementById("question-number").innerHTML =
"Question " + (currentQuestion+1) + " of " + questions.length;
document.getElementById("question").innerHTML =
(currentQuestion + 1) + ") " +
questions[currentQuestion].question;

let optionsHTML = "";

questions[currentQuestion].options.forEach(option=>{
optionsHTML += `
<div class="option">
<label>
<input type="radio" name="answer">
${option}
</label>
</div>`;
});

document.getElementById("options").innerHTML = optionsHTML;

document.getElementById("progress-bar").style.width =
((currentQuestion+1)/questions.length*100)+"%";
}

function nextQuestion(){
if(currentQuestion < questions.length-1){
currentQuestion++;
loadQuestion();
}
}

function previousQuestion(){
if(currentQuestion > 0){
currentQuestion--;
loadQuestion();
}
}

loadQuestion();