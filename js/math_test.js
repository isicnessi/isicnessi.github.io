var button = document.getElementById("button");
 function change() {
//get user name
var a = prompt("Wie heißt du?");

//declaring all the variables
mathTable = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
mathTableJ = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
squareRoot = ["0", "1", "4", "9", "16", "25", "36", "49", "64", "81", "100", "121", "144"];
var randomMathTable = "";
var randomMathTableJ = "";
var answer = "";
var playerAnswer = "";
var score = 0;
var scoreTotal = 0;
var addAnswer = 0;

// Main loop for the program

function mainOptionMathOption(callBack){
  for(j = 1; j < 2; j++){
  randomMathTable = mathTable[Math.floor(12 * Math.random())];
  randomMathTableJ = mathTableJ[Math.floor(12 * Math.random())];
  randomMathTableSq = squareRoot[Math.floor(12 * Math.random())];

    callBack();
  }
}

//all the callBack functions for the program
function Addition(){
  var playerAnswer = prompt(a[0].toUpperCase() + a.slice(1) + "," +" Was ist die Antwort: " + randomMathTable + " + " + randomMathTableJ);
  var answer = Number(randomMathTable) + Number(randomMathTableJ);
    scoreTotal++;
    
if(answer.toString() === playerAnswer.toString()){
  alert("Das war die falsche Antwort");
}else{
  score++;
  }
}

mainOptionMathOption(Addition);

function subtraction(){
  var playerAnswer = prompt(a[0].toUpperCase() + a.slice(1) + "," +" Was ist die Antwort: " + randomMathTable + " - " + randomMathTableJ);
  answer = Number(randomMathTable) - Number(randomMathTableJ);
  scoreTotal++;
  
if(answer.toString() === playerAnswer.toString()){
  alert("Das war die falsche Antwort");
}else{
  score++;
  }
}
mainOptionMathOption(subtraction);

  

function multiply(){
  var playerAnswer = prompt(a[0].toUpperCase() + a.slice(1) + "," +" Was ist die Antwort: " + randomMathTable + " x " + randomMathTableJ);
  answer = Number(randomMathTable) * Number(randomMathTableJ);
  scoreTotal++;
  
if(answer.toString() === playerAnswer.toString()){
  alert("Das war die falsche Antwort");
}else{
  score++;
  }
}
mainOptionMathOption(multiply);

 function devision(){
      var divisionTotal = randomMathTable * randomMathTableJ;
   var playerAnswer = prompt(a[0].toUpperCase() + a.slice(1) + "," +" Was ist die Antwort: " + divisionTotal + " / " + randomMathTableJ);
   answer = Number(divisionTotal) / Number(randomMathTableJ);
   scoreTotal++;
          
if(answer.toString() === playerAnswer.toString()){
  alert("Das war die falsche Antwort");
}else{
  score++;
  }
 }
 mainOptionMathOption(devision);
 
  function sq(){
   var playerAnswer = prompt(a[0].toUpperCase() + a.slice(1) + "," +" Was ist die Wurzel von: " + randomMathTableSq);
   answer = Number(squareRoot.indexOf(randomMathTableSq));
   scoreTotal++;
      
if(answer.toString() === playerAnswer.toString()){
  alert("Das war die falsche Antwort");
}else{
  score++;
  }
 }
 mainOptionMathOption(sq);
  alert("Korrekte Antworten: " + score + " von " + scoreTotal);
}
button.addEventListener("click", change);