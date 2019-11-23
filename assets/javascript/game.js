// Define a set of questions for trivia
// each question has a question, Answer, a couple of wrong answers
// Display the question and multiple choices 

var arrayOfQuestions = [];
var answered = false;
var timeForTest = 5;
var timerRunning = false;
var questionSelected;

function triviaQuestion(question, answer, option1, option2, option3) {
    this.question = question;
    this.answer = answer;
    this.option1 = option1;
    this.option2 = option2;
    this.option3 = option3;
}

function initQuestions(){
    var question1 = new triviaQuestion("Tony Stark is saved from dying in outer space only with the help of who of these?", "Captain Marvel", "Thor", "Hulk","BatMan");
    var question2 = new triviaQuestion("Who does Heimdall manage to send to Earth during Thanos attack?", "Hulk", "Thor", "Iron Man","Mickey Mouse");
    var question3 = new triviaQuestion("Where is Loki's sceptre ultimately located?", "Sokovia", "Norway", "Scotland","South Africa");
    var question4 = new triviaQuestion("With what is Loki able to control minds?", "Sceptre", "Stones", "Weapon","using his hands");
    var question5 = new triviaQuestion("Who was the first major character to die?","Heimdall", "Spider Man", "Ant Man","Black Panther");
    var question6 = new triviaQuestion("what is Captain America's real name?", "Steve Rogers", "Bruce Banner", "Peter Parker", "Bucky Barnes");
    var question7 = new triviaQuestion("How does the Marvel hero Captain America get his powers?", "U.S. military experiment", "Hydra experiment", "chemical exposure", "Bug bite");
    var question8 = new triviaQuestion("Where did Iron Man built his suit", "In a bunker", "In his lab", "In his garage", "At School");
    var question9 = new triviaQuestion("Who created Ant Man suit", "Hank Pym", "Henry Pym", "Rachel Pym", "Scott Lang");

    arrayOfQuestions.push(question1, question2, question3, question4, question5, question6, question7,question8, question9);
    console.log(arrayOfQuestions);
    // questionSelected = arrayOfQuestions[Math.floor(Math.random()*arrayOfQuestions.length)]
    startTimer(timeForTest);
    displayQuestion();
    // displayOptions(question1)
}



function displayQuestion(){
    var triviaq = $("<h3>");
    questionSelected = arrayOfQuestions[Math.floor(Math.random()*arrayOfQuestions.length)]
    var index = arrayOfQuestions.indexOf(questionSelected);
    arrayOfQuestions.splice(index, 1);
    console.log(arrayOfQuestions);
    var optionArray = [];
    if(!timerRunning){
        triviaq.html(questionSelected.question);
        $("#questionHolder").append(triviaq); 
        $("#optionHolder").append('<br>');
        $("#optionHolder").append('<br>');
        optionArray.push(questionSelected.answer, questionSelected.option1, questionSelected.option2, questionSelected.option3);
        shuffleArray(optionArray)
        for (var i=0; i<optionArray.length; i++) {
            var optionButton = $('<button>');
            optionButton.html(optionArray[i]);
            optionButton.addClass("btn btn-danger");
            optionButton.addClass("optionButtons");
            $("#optionHolder").append(optionButton);
         
        }
        $(".optionButtons").on("click", getValue);
    }
}

function getValue() {
    console.log("ss");
    var userChoice = $(this).html();
    checkAnswer(userChoice);
}

function checkAnswer(userChoice) {
   
    console.log(questionSelected.answer);
    if (userChoice === questionSelected.answer) {
        console.log("Correct Answer") ; 
        sessionStorage.noOfWins = parseInt(sessionStorage.noOfWins) + 1 + '';
        console.log(sessionStorage.noOfWins)
        // location.reload();
        displayQuestion();
    }
    else {
        console.log("Incorrect Answer");
        sessionStorage.noOfLosses = parseInt(sessionStorage.noOfLosses) + 1 + '';
        console.log(sessionStorage.noOfLosses);
        // location.reload();
        displayQuestion();
    }
}
//Durstenfeld shuffle 
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}


function startTimer(duration) {
    var timer = duration, minutes, seconds;
    var intervalId;
    intervalId = setInterval(function () {
        timerRunning = true;
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $("#displayTime").text(minutes + ":" + seconds);

        if (--timer < 0) {
            timeUp(intervalId);
            // document.getElementById("details").setAttribute("disabled","disabled");
        }
    }, 1000);
}

function timeUp(interval) {    
    clearInterval(interval);
    timerRunning = false;
    $("#displayTime").text("Time up!!!");
}

$(document).ready(function () {
    initQuestions();
});


// var intervalId;
// var clockRunning = false;
// var time = 0;

// function reset() {
//     time = 0;
//     $("#displayTime").text("00:00");
//   }

// function start() {
//     if (!clockRunning) {
//         intervalId = setInterval(count, 1000);
//         clockRunning = true;
//     }
// }

// function stop() {
//     var timePast = $("#displayTime").text();

//     clearInterval(intervalId);
//     clockRunning = false;
// }

// function count() {
//     time++;
//     var converted = timeConverter(time);
//     console.log(converted);
//     $("#displayTime").text(converted);
// }

// function timeConverter(t) {

//     var minutes = Math.floor(t / 60);
//     var seconds = t - (minutes * 60);
  
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }
  
//     if (minutes === 0) {
//       minutes = "00";
//     }
//     else if (minutes < 10) {
//       minutes = "0" + minutes;
//     }
  
//     return minutes + ":" + seconds;
//   }
  