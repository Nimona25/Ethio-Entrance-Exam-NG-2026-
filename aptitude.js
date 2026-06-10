const questions = [
{
    question:"1) If a train travels 360 km in 4.5 hours, what is its average speed?",
    options:["60 km/h","70 km/h","80 km/h","90 km/h"],
    answer:"80 km/h"
},

{
    question:"2) Solve: 3x + 7 = 25",
    options:["4","5","6","7"],
    answer:"6"
},

{
    question:"3) What is 15% of 240?",
    options:["24","36","48","30"],
    answer:"36"
},

{
    question:"4) If the ratio of boys to girls is 3:5 and there are 40 students, how many are boys?",
    options:["15","20","24","25"],
    answer:"15"
},

{
    question:"5) Find the next number: 2, 6, 12, 20, 30, ?",
    options:["36","40","42","44"],
    answer:"42"
},

{
    question:"6) A shop gives a 20% discount on a $50 item. What is the sale price?",
    options:["$30","$35","$40","$45"],
    answer:"$40"
},

{
    question:"7) What is the value of 7² - 5²?",
    options:["12","20","24","36"],
    answer:"24"
},

{
    question:"8) If 5 workers complete a task in 12 days, how many days will 10 workers take?",
    options:["4","5","6","8"],
    answer:"6"
},

{
    question:"9) Solve: (18 ÷ 3) × (4 + 2)",
    options:["24","30","36","42"],
    answer:"36"
},

{
    question:"10) The average of 12, 18, 20 and 30 is:",
    options:["18","20","22","25"],
    answer:"20"
},

{
    question:"11) Which word is closest in meaning to 'Diligent'?",
    options:["Lazy","Hardworking","Weak","Careless"],
    answer:"Hardworking"
},

{
    question:"12) Choose the correct spelling.",
    options:["Occassion","Occasion","Ocassion","Occation"],
    answer:"Occasion"
},

{
    question:"13) Select the antonym of 'Expand'.",
    options:["Increase","Stretch","Contract","Grow"],
    answer:"Contract"
},

{
    question:"14) Complete the analogy: Book : Read :: Music : ?",
    options:["Hear","Listen","Watch","Speak"],
    answer:"Listen"
},

{
    question:"15) Choose the correct sentence.",
    options:[
        "She don't like coffee.",
        "She doesn't likes coffee.",
        "She doesn't like coffee.",
        "She not like coffee."
    ],
    answer:"She doesn't like coffee."
},

{
    question:"16) Which word is a noun?",
    options:["Beautiful","Quickly","Happiness","Run"],
    answer:"Happiness"
},

{
    question:"17) Find the synonym of 'Ancient'.",
    options:["Modern","Old","Recent","Current"],
    answer:"Old"
},

{
    question:"18) Complete the sentence: Neither John nor his friends ___ coming.",
    options:["is","are","was","be"],
    answer:"are"
},

{
    question:"19) Choose the word that best completes the sentence: The scientist made a remarkable ___.",
    options:["discover","discovery","discovering","discovered"],
    answer:"discovery"
},

{
    question:"20) Which sentence is grammatically correct?",
    options:[
        "He has went home.",
        "He have gone home.",
        "He has gone home.",
        "He gone home."
    ],
    answer:"He has gone home."
},
{
    question:"21) A car travels 240 km in 3 hours. What is its average speed?",
    options:["60 km/h","70 km/h","80 km/h","90 km/h"],
    answer:"80 km/h"
},

{
    question:"22) If x² = 144, what is the positive value of x?",
    options:["10","11","12","13"],
    answer:"12"
},

{
    question:"23) The sum of three consecutive integers is 72. What is the largest integer?",
    options:["23","24","25","26"],
    answer:"25"
},

{
    question:"24) A shirt costing $80 is discounted by 25%. What is the sale price?",
    options:["$50","$55","$60","$65"],
    answer:"$60"
},

{
    question:"25) Find the next number: 1, 4, 9, 16, 25, ?",
    options:["30","35","36","49"],
    answer:"36"
},

{
    question:"26) Choose the synonym of 'Abundant'.",
    options:["Scarce","Plentiful","Rare","Limited"],
    answer:"Plentiful"
},

{
    question:"27) Choose the antonym of 'Generous'.",
    options:["Kind","Selfish","Helpful","Friendly"],
    answer:"Selfish"
},

{
    question:"28) Which sentence is grammatically correct?",
    options:[
        "She have finished her work.",
        "She has finished her work.",
        "She finished has her work.",
        "She having finished her work."
    ],
    answer:"She has finished her work."
},

{
    question:"29) Complete the analogy: Teacher : School :: Doctor : ?",
    options:["Hospital","Medicine","Patient","Nurse"],
    answer:"Hospital"
},

{
    question:"30) Choose the correctly spelled word.",
    options:["Accomodation","Acommodation","Accommodation","Accommadation"],
    answer:"Accommodation"
},

{
    question:"31) What is 18% of 250?",
    options:["40","45","50","55"],
    answer:"45"
},

{
    question:"32) Solve: 5x - 10 = 40",
    options:["8","9","10","12"],
    answer:"10"
},

{
    question:"33) A number is increased by 20% and becomes 120. What was the original number?",
    options:["90","95","100","110"],
    answer:"100"
},

{
    question:"34) The average of 15, 20, 25 and 40 is:",
    options:["20","25","30","35"],
    answer:"25"
},

{
    question:"35) If a rectangle has length 12 cm and width 8 cm, its area is:",
    options:["80","88","96","104"],
    answer:"96"
},

{
    question:"36) Choose the synonym of 'Cautious'.",
    options:["Careful","Careless","Brave","Weak"],
    answer:"Careful"
},

{
    question:"37) Choose the antonym of 'Ancient'.",
    options:["Old","Historic","Modern","Traditional"],
    answer:"Modern"
},

{
    question:"38) Complete the sentence: Neither the teacher nor the students ___ present.",
    options:["is","are","was","be"],
    answer:"are"
},

{
    question:"39) Which word is a verb?",
    options:["Happiness","Beautiful","Run","Quickly"],
    answer:"Run"
},

{
    question:"40) Select the correct sentence.",
    options:[
        "I has completed the assignment.",
        "I have completed the assignment.",
        "I completed have the assignment.",
        "I having completed the assignment."
    ],
    answer:"I have completed the assignment."
},

{
    question:"41) Find the next number: 3, 6, 12, 24, 48, ?",
    options:["72","84","96","98"],
    answer:"96"
},

{
    question:"42) Solve: 9 × 8 - 12",
    options:["50","60","72","84"],
    answer:"60"
},

{
    question:"43) If 8 workers finish a task in 15 days, how many days will 16 workers take?",
    options:["5","6","7.5","10"],
    answer:"7.5"
},

{
    question:"44) The perimeter of a square with side 9 cm is:",
    options:["18","27","36","45"],
    answer:"36"
},

{
    question:"45) What is 3/4 of 200?",
    options:["100","120","150","180"],
    answer:"150"
},

{
    question:"46) Choose the synonym of 'Rapid'.",
    options:["Slow","Fast","Weak","Calm"],
    answer:"Fast"
},

{
    question:"47) Choose the antonym of 'Victory'.",
    options:["Success","Achievement","Defeat","Progress"],
    answer:"Defeat"
},

{
    question:"48) Complete the analogy: Pen : Write :: Knife : ?",
    options:["Cut","Eat","Draw","Cook"],
    answer:"Cut"
},

{
    question:"49) Choose the correctly spelled word.",
    options:["Priviledge","Privilege","Privelege","Privillage"],
    answer:"Privilege"
},

{
    question:"50) Which sentence is grammatically correct?",
    options:[
        "Each student have a book.",
        "Each student has a book.",
        "Each students has a book.",
        "Each student having a book."
    ],
    answer:"Each student has a book."
},
{
    question:"51) A student scored 72, 68, 75, 85 and 100 marks. What is the average score?",
    options:["78","79","80","81"],
    answer:"80"
},

{
    question:"52) A product costs $120 and is sold for $150. What is the profit percentage?",
    options:["20%","25%","30%","35%"],
    answer:"25%"
},

{
    question:"53) If 40% of a number is 160, what is the number?",
    options:["300","350","400","450"],
    answer:"400"
},

{
    question:"54) Find the next number: 5, 11, 23, 47, 95, ?",
    options:["180","190","191","195"],
    answer:"191"
},

{
    question:"55) The probability of getting a 6 on a fair die is:",
    options:["1/2","1/3","1/4","1/6"],
    answer:"1/6"
},

{
    question:"56) Choose the word closest in meaning to 'Meticulous'.",
    options:["Careful","Careless","Fast","Weak"],
    answer:"Careful"
},

{
    question:"57) Choose the antonym of 'Transparent'.",
    options:["Visible","Clear","Opaque","Bright"],
    answer:"Opaque"
},

{
    question:"58) Complete the analogy: Architect : Building :: Author : ?",
    options:["Library","Book","Reader","Teacher"],
    answer:"Book"
},

{
    question:"59) Which sentence is grammatically correct?",
    options:[
        "Neither of the boys are present.",
        "Neither of the boys is present.",
        "Neither of the boys were present.",
        "Neither boys is present."
    ],
    answer:"Neither of the boys is present."
},

{
    question:"60) Select the correctly spelled word.",
    options:["Entreprenuer","Entrepreneur","Entrepreneur","Entreprenur"],
    answer:"Entrepreneur"
},
{
    question:"61) If the ratio of boys to girls in a class is 7:8 and there are 120 students, how many girls are there?",
    options:["56","64","72","80"],
    answer:"64"
},

{
    question:"62) A train moving at 90 km/h crosses a pole in 20 seconds. What is the train's length?",
    options:["400 m","450 m","500 m","550 m"],
    answer:"500 m"
},

{
    question:"63) What is 25% of 25% of 400?",
    options:["20","25","30","35"],
    answer:"25"
},

{
    question:"64) Find the next number: 2, 5, 11, 23, 47, ?",
    options:["91","93","95","97"],
    answer:"95"
},

{
    question:"65) The mean of 5 numbers is 24. If four numbers are 18, 22, 25 and 30, find the fifth number.",
    options:["20","25","27","25"],
    answer:"25"
},

{
    question:"66) Choose the synonym of 'Eloquent'.",
    options:["Silent","Persuasive","Weak","Careless"],
    answer:"Persuasive"
},

{
    question:"67) Choose the antonym of 'Scarcity'.",
    options:["Lack","Shortage","Abundance","Poverty"],
    answer:"Abundance"
},

{
    question:"68) Complete the analogy: Heart : Circulation :: Brain : ?",
    options:["Digestion","Respiration","Coordination","Movement"],
    answer:"Coordination"
},

{
    question:"69) Select the grammatically correct sentence.",
    options:[
        "Each of the players have arrived.",
        "Each of the players has arrived.",
        "Each players has arrived.",
        "Each player have arrived."
    ],
    answer:"Each of the players has arrived."
},

{
    question:"70) Choose the correctly spelled word.",
    options:["Conscience","Consciense","Conscience","Conscence"],
    answer:"Conscience"
},

{
    question:"71) If a sum doubles in 8 years at simple interest, in how many years will it triple?",
    options:["12","14","16","18"],
    answer:"16"
},

{
    question:"72) What is the probability of getting an even number when rolling a die?",
    options:["1/6","1/3","1/2","2/3"],
    answer:"1/2"
},

{
    question:"73) A shopkeeper gains 20% by selling an item for $240. What was its cost price?",
    options:["$180","$190","$200","$210"],
    answer:"$200"
},

{
    question:"74) Find the next number: 1, 8, 27, 64, 125, ?",
    options:["196","216","225","256"],
    answer:"216"
},

{
    question:"75) The area of a circle with radius 7 cm is:",
    options:["154 cm²","144 cm²","164 cm²","174 cm²"],
    answer:"154 cm²"
},

{
    question:"76) Choose the synonym of 'Prudent'.",
    options:["Wise","Careless","Fearful","Weak"],
    answer:"Wise"
},

{
    question:"77) Choose the antonym of 'Optimistic'.",
    options:["Hopeful","Positive","Pessimistic","Confident"],
    answer:"Pessimistic"
},

{
    question:"78) Complete the analogy: Keyboard : Computer :: Steering Wheel : ?",
    options:["Car","Road","Driver","Engine"],
    answer:"Car"
},

{
    question:"79) Which sentence is correct?",
    options:[
        "The information are useful.",
        "The information is useful.",
        "The informations are useful.",
        "The informations is useful."
    ],
    answer:"The information is useful."
},

{
    question:"80) Select the correctly spelled word.",
    options:["Maintenance","Maintanance","Maintenence","Maintenance"],
    answer:"Maintenance"
},
{
    question:"81) If 12 workers can complete a job in 15 days, how many workers are needed to complete it in 9 days?",
    options:["18","20","22","24"],
    answer:"20"
},

{
    question:"82) The difference between 40% of 500 and 25% of 400 is:",
    options:["80","90","100","110"],
    answer:"100"
},

{
    question:"83) Find the next number: 7, 14, 28, 56, 112, ?",
    options:["196","214","224","228"],
    answer:"224"
},

{
    question:"84) A sum of money becomes $1500 after gaining 25%. What was the original amount?",
    options:["$1000","$1100","$1200","$1300"],
    answer:"$1200"
},

{
    question:"85) If x + y = 15 and x = 9, what is y?",
    options:["4","5","6","7"],
    answer:"6"
},

{
    question:"86) Choose the synonym of 'Resilient'.",
    options:["Fragile","Adaptable","Weak","Careless"],
    answer:"Adaptable"
},

{
    question:"87) Choose the antonym of 'Deteriorate'.",
    options:["Decline","Improve","Damage","Destroy"],
    answer:"Improve"
},

{
    question:"88) Complete the analogy: Seed : Plant :: Egg : ?",
    options:["Nest","Bird","Feather","Wing"],
    answer:"Bird"
},

{
    question:"89) Select the grammatically correct sentence.",
    options:[
        "Everyone have completed the test.",
        "Everyone has completed the test.",
        "Everyone completed has the test.",
        "Everyone having completed the test."
    ],
    answer:"Everyone has completed the test."
},

{
    question:"90) Choose the correctly spelled word.",
    options:["Questionnaire","Questionaire","Questionnair","Quesionnaire"],
    answer:"Questionnaire"
},

{
    question:"91) The perimeter of a rectangle is 50 cm. If its length is 15 cm, its width is:",
    options:["8 cm","9 cm","10 cm","11 cm"],
    answer:"10 cm"
},

{
    question:"92) What is the value of 12² - 8²?",
    options:["60","70","80","90"],
    answer:"80"
},

{
    question:"93) Find the next number: 1, 3, 6, 10, 15, ?",
    options:["18","20","21","24"],
    answer:"21"
},

{
    question:"94) A bag contains 5 red, 3 blue and 2 green balls. What is the probability of selecting a blue ball?",
    options:["1/5","3/10","2/5","1/2"],
    answer:"3/10"
},

{
    question:"95) If the average of 8 numbers is 25, what is their total sum?",
    options:["180","190","200","210"],
    answer:"200"
},

{
    question:"96) Choose the synonym of 'Authentic'.",
    options:["False","Genuine","Fake","Weak"],
    answer:"Genuine"
},

{
    question:"97) Choose the antonym of 'Transparent'.",
    options:["Clear","Visible","Opaque","Bright"],
    answer:"Opaque"
},

{
    question:"98) Complete the analogy: Finger : Hand :: Toe : ?",
    options:["Foot","Leg","Arm","Body"],
    answer:"Foot"
},

{
    question:"99) Which sentence is correct?",
    options:[
        "Neither of the answers are correct.",
        "Neither of the answers is correct.",
        "Neither answers are correct.",
        "Neither answer are correct."
    ],
    answer:"Neither of the answers is correct."
},

{
    question:"100) Select the correctly spelled word.",
    options:["Embarrassment","Embarassment","Embarrasment","Embarrasment"],
    answer:"Embarrassment"
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