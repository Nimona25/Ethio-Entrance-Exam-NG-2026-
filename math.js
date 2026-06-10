const questions = [
{
question: "1) If x² - 5x + 6 = 0, then the values of x are:",
options: ["1 and 6", "2 and 3", "2 and 6", "3 and 5"],
answer: "2 and 3"
},
{
question: "2) Simplify (2x³y²)(3x²y)",
options: ["5x⁵y³", "6x⁵y³", "6x⁶y²", "5x⁶y³"],
answer: "6x⁵y³"
},
{
question: "3) Solve 3x - 7 = 11",
options: ["4", "5", "6", "7"],
answer: "6"
},
{
question: "4) If a + b = 10 and ab = 21, find a² + b²",
options: ["58", "60", "62", "64"],
answer: "58"
},
{
question: "5) Solve x² = 49",
options: ["7", "-7", "±7", "49"],
answer: "±7"
},
{
question: "6) If f(x) = 2x + 3, find f(5)",
options: ["10", "11", "12", "13"],
answer: "13"
},
{
question: "7) If g(x) = x² - 1, find g(3)",
options: ["6", "7", "8", "9"],
answer: "8"
},
{
question: "8) The domain of f(x) = 1/(x - 2) is:",
options: ["All real numbers", "x ≠ 2", "x > 2", "x < 2"],
answer: "x ≠ 2"
},
{
question: "9) If f(x) = 3x - 1, find f⁻¹(x)",
options: ["(x + 1)/3", "(x - 1)/3", "3x + 1", "x + 3"],
answer: "(x + 1)/3"
},
{
question: "10) If f(x) = x², then f(-4) equals:",
options: ["-16", "16", "8", "-8"],
answer: "16"
},
{
question: "11) log₁₀(1000) =",
options: ["2", "3", "10", "100"],
answer: "3"
},
{
question: "12) log₂(8) =",
options: ["2", "3", "4", "8"],
answer: "3"
},
{
question: "13) logₐ(a⁵) =",
options: ["1", "5", "a", "a⁵"],
answer: "5"
},
{
question: "14) log(100) + log(10) =",
options: ["2", "3", "4", "5"],
answer: "3"
},
{
question: "15) Solve log₃x = 2",
options: ["6", "8", "9", "12"],
answer: "9"
},
{
question: "16) sin 30° =",
options: ["0", "1/2", "√3/2", "1"],
answer: "1/2"
},
{
question: "17) cos 60° =",
options: ["0", "1/2", "√3/2", "1"],
answer: "1/2"
},
{
question: "18) tan 45° =",
options: ["0", "1/2", "1", "√3"],
answer: "1"
},
{
question: "19) sin²θ + cos²θ =",
options: ["0", "1", "2", "θ"],
answer: "1"
},
{
question: "20) If sinθ = 3/5 and θ is acute, then cosθ =",
options: ["4/5", "3/5", "2/5", "1/5"],
answer: "4/5"
},
{
question: "21) Area of a circle of radius 7 cm is:",
options: ["14π", "49π", "98π", "154π"],
answer: "49π"
},
{
question: "22) Sum of angles of a triangle:",
options: ["90°", "180°", "270°", "360°"],
answer: "180°"
},
{
question: "23) A right triangle has legs 6 and 8. The hypotenuse is:",
options: ["10", "12", "14", "16"],
answer: "10"
},
{
question: "24) Circumference of a circle with radius 5 cm:",
options: ["5π", "10π", "25π", "50π"],
answer: "10π"
},
{
question: "25) Volume of a cube of side 4 cm:",
options: ["16", "32", "64", "128"],
answer: "64"
},
{
question:"26) If sin θ = 3/5 and θ is acute, find cos θ.",
options:["4/5","3/4","5/4","2/5"],
answer:"4/5"
},
{
question:"27) Find tan 45°.",
options:["0","1","√2","2"],
answer:"1"
},
{
question:"28) Evaluate sin²30° + cos²30°.",
options:["0","1","2","1/2"],
answer:"1"
},
{
question:"29) The area of a circle with radius 7 cm is:",
options:["49π","14π","21π","28π"],
answer:"49π"
},
{
question:"30) Find the circumference of a circle with radius 5 cm.",
options:["10π","25π","5π","20π"],
answer:"10π"
},
{
question:"31) The derivative of x² is:",
options:["x","2x","x²","2"],
answer:"2x"
},
{
question:"32) The derivative of 5x³ is:",
options:["15x²","10x²","5x²","15x"],
answer:"15x²"
},
{
question:"33) ∫2x dx =",
options:["x² + C","2x + C","x + C","x³ + C"],
answer:"x² + C"
},
{
question:"34) Find d/dx(sin x).",
options:["cos x","sin x","-sin x","-cos x"],
answer:"cos x"
},
{
question:"35) The slope of y = 3x + 2 is:",
options:["2","3","5","1"],
answer:"3"
},
{
question:"36) A coin is tossed once. Probability of getting a head:",
options:["0","1","1/2","1/3"],
answer:"1/2"
},
{
question:"37) A die is rolled. Probability of getting 6:",
options:["1/3","1/2","1/6","1"],
answer:"1/6"
},
{
question:"38) Mean of 2,4,6,8 is:",
options:["4","5","6","7"],
answer:"5"
},
{
question:"39) Median of 1,3,5,7,9 is:",
options:["3","5","7","9"],
answer:"5"
},
{
question:"40) Mode of 2,2,3,4,5 is:",
options:["2","3","4","5"],
answer:"2"
},
{
question:"41) Vector (2,3)+(1,4) equals:",
options:["(3,7)","(1,1)","(2,7)","(3,4)"],
answer:"(3,7)"
},
{
question:"42) Magnitude of vector (3,4) is:",
options:["4","5","6","7"],
answer:"5"
},
{
question:"43) Determinant of [1 0; 0 1] is:",
options:["0","1","2","-1"],
answer:"1"
},
{
question:"44) If A=[2], then A⁻¹ =",
options:["1/2","2","4","0"],
answer:"1/2"
},
{
question:"45) Solve: x²−16=0",
options:["±4","±8","4","8"],
answer:"±4"
},
{
question:"46) Factor x²+5x+6.",
options:["(x+2)(x+3)","(x+1)(x+6)","(x-2)(x-3)","(x+6)(x+6)"],
answer:"(x+2)(x+3)"
},
{
question:"47) Evaluate 3² + 4².",
options:["25","12","49","7"],
answer:"25"
},
{
question:"48) If f(x)=2x+1, find f(4).",
options:["7","8","9","10"],
answer:"9"
},
{
question:"49) Domain of f(x)=1/x excludes:",
options:["0","1","-1","2"],
answer:"0"
},
{
question:"50) log₂(32)=",
options:["4","5","6","7"],
answer:"5"
},
{
question:"51) Simplify log a + log b.",
options:["log(ab)","log(a+b)","ab","a+b"],
answer:"log(ab)"
},
{
question:"52) sin 90° =",
options:["0","1","-1","1/2"],
answer:"1"
},
{
question:"53) cos 0° =",
options:["0","1","-1","1/2"],
answer:"1"
},
{
question:"54) tan 0° =",
options:["0","1","undefined","-1"],
answer:"0"
},
{
question:"55) Interior angles of a triangle sum to:",
options:["90°","180°","270°","360°"],
answer:"180°"
},
{
question:"56) Area of triangle =",
options:["1/2bh","bh","2bh","b+h"],
answer:"1/2bh"
},
{
question:"57) Derivative of constant 7:",
options:["0","1","7","undefined"],
answer:"0"
},
{
question:"58) ∫5 dx =",
options:["5x+C","x+C","25+C","0"],
answer:"5x+C"
},
{
question:"59) If P(A)=0.4, P(A')=",
options:["0.6","0.4","1.4","0"],
answer:"0.6"
},
{
question:"60) Mean of 10,20,30:",
options:["15","20","25","30"],
answer:"20"
},
{
question:"61) Vector (5,2)-(1,1)=",
options:["(4,1)","(6,3)","(4,3)","(5,1)"],
answer:"(4,1)"
},
{
question:"62) Rank of identity matrix I₃:",
options:["1","2","3","0"],
answer:"3"
},
{
question:"63) Solve 2x+5=15.",
options:["5","10","15","20"],
answer:"5"
},
{
question:"64) x²−9 factors as:",
options:["(x−3)(x+3)","(x−9)(x+1)","(x−3)²","(x+3)²"],
answer:"(x−3)(x+3)"
},
{
question:"65) Find f(0) if f(x)=x²+1.",
options:["0","1","2","3"],
answer:"1"
},
{
question:"66) log₁₀(0.1)=",
options:["-1","0","1","10"],
answer:"-1"
},
{
question:"67) sin 60° =",
options:["√3/2","1/2","1","0"],
answer:"√3/2"
},
{
question:"68) cos 60° =",
options:["1/2","√3/2","1","0"],
answer:"1/2"
},
{
question:"69) A right angle equals:",
options:["45°","90°","180°","360°"],
answer:"90°"
},
{
question:"70) Area of rectangle length 8 width 5:",
options:["40","13","26","80"],
answer:"40"
},
{
question:"71) d/dx(x⁵)=",
options:["5x⁴","x⁴","4x⁵","5x"],
answer:"5x⁴"
},
{
question:"72) ∫x²dx=",
options:["x³/3+C","2x+C","x²+C","3x+C"],
answer:"x³/3+C"
},
{
question:"73) Probability of impossible event:",
options:["0","1","1/2","2"],
answer:"0"
},
{
question:"74) Median of 2,4,6,8:",
options:["4","5","6","8"],
answer:"5"
},
{
question:"75) Dot product of (1,2) and (3,4):",
options:["11","10","12","14"],
answer:"11"
},
{
question:"76) Determinant of [2 0;0 3] is:",
options:["6","5","3","2"],
answer:"6"
},
{
question:"77) Solve x/4=5.",
options:["20","10","5","4"],
answer:"20"
},
{
question:"78) Simplify (x²)(x³).",
options:["x⁵","x⁶","x⁹","x"],
answer:"x⁵"
},
{
question:"79) If f(x)=x+7, find f(3).",
options:["8","9","10","11"],
answer:"10"
},
{
question:"80) log₃(81)=",
options:["2","3","4","5"],
answer:"4"
},
{
question:"81) tan 45° =",
options:["1","0","√3","undefined"],
answer:"1"
},
{
question:"82) Number of sides of a hexagon:",
options:["5","6","7","8"],
answer:"6"
},
{
question:"83) Perimeter of square side 4:",
options:["8","12","16","20"],
answer:"16"
},
{
question:"84) d/dx(eˣ)=",
options:["eˣ","x","1","0"],
answer:"eˣ"
},
{
question:"85) ∫0 dx =",
options:["C","0","1","x"],
answer:"C"
},
{
question:"86) Probability of getting odd number on die:",
options:["1/2","1/3","2/3","1/6"],
answer:"1/2"
},
{
question:"87) Mean of 5,10,15,20:",
options:["10","12.5","15","20"],
answer:"12.5"
},
{
question:"88) Magnitude of vector (6,8):",
options:["10","12","14","8"],
answer:"10"
},
{
question:"89) Identity matrix has determinant:",
options:["1","0","2","-1"],
answer:"1"
},
{
question:"90) Solve x²=49.",
options:["±7","7","14","49"],
answer:"±7"
},
{
question:"91) Factor x²−25.",
options:["(x−5)(x+5)","(x−25)(x+1)","(x−5)²","(x+5)²"],
answer:"(x−5)(x+5)"
},
{
question:"92) If f(x)=3x, find f(6).",
options:["9","12","18","24"],
answer:"18"
},
{
question:"93) log₅(25)=",
options:["1","2","3","5"],
answer:"2"
},
{
question:"94) cos 90° =",
options:["0","1","-1","1/2"],
answer:"0"
},
{
question:"95) Sum of interior angles of quadrilateral:",
options:["180°","270°","360°","540°"],
answer:"360°"
},
{
question:"96) Volume of cube side 3:",
options:["9","18","27","36"],
answer:"27"
},
{
question:"97) d/dx(ln x)=",
options:["1/x","x","ln x","0"],
answer:"1/x"
},
{
question:"98) integral of 1/x dx =",
options:["ln|x|+C","x+C","1/x+C","0"],
answer:"ln(x)+C"
},
{
question:"99) Probability always lies between:",
options:["0 and 1","1 and 2","-1 and 1","0 and 2"],
answer:"0 and 1"
},
{
question:"100) Standard deviation measures:",
options:["Spread of data","Mean","Median","Mode"],
answer:"Spread of data"
}
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
let paid = localStorage.getItem("paid");

if(paid === "true"){
   window.location.href="mathematics.html";
}else{
   window.location.href="pricing.html";
}