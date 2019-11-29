// Define a set of questions for trivia
// each question has a question, Answer, a couple of wrong answers
// Display the question and multiple choices 

var arrayOfQuestions = [];
var answered = false;
var timeForTest = 90;
var timerRunning = false;
var questionSelected;
var questionDisplayed = false;
var correctAnswers = 0;
var wrongAnswers = 0;
var intervalId;

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
    var question4 = new triviaQuestion("With what is Loki able to control minds?", "Scepter", "Stones", "Weapon","using his hands");
    var question5 = new triviaQuestion("Who was the first major character to die?","Heimdall", "Spider Man", "Ant Man","Black Panther");
    var question6 = new triviaQuestion("what is Captain America's real name?", "Steve Rogers", "Bruce Banner", "Peter Parker", "Bucky Barnes");
    var question7 = new triviaQuestion("How does the Marvel hero Captain America get his powers?", "U.S. military experiment", "Hydra experiment", "chemical exposure", "Bug bite");
    var question8 = new triviaQuestion("Where did Iron Man built his suit", "In a bunker", "In his lab", "In his garage", "At School");
    var question9 = new triviaQuestion("Who created Ant Man suit", "Hank Pym", "Henry Pym", "Rachel Pym", "Scott Lang");
    var question10 = new triviaQuestion("What device allows Thanos to harness the power of the Infinity Stones?", "Infinity Gauntlet", "Glove compartment", "Metal Hand", "His Purse");
    var question11 = new triviaQuestion("How many Infinity Stones are there?", "Six", "Seven", "Four", "Fifteen");
    var question12 = new triviaQuestion("What is Tony Stark’s father’s name?", "Howard", "Andrew", "Peter", "Tony");
    var question13 = new triviaQuestion("Who are the shapeshifting villains in Captain Marvel?", "Skrulls", "Dust Mites", "Guardians", "Thanos Army");
    var question14 = new triviaQuestion("How would Groot answer this question?", "I am Groot", "I Kill you", "I am tree", "I am guardian");
    var question15 = new triviaQuestion("Who is the voice of Rocket?", "Bradley Cooper", "Gerard Butler", "Brad Pitt", "Leonardo DiCaprio");
    var question16 = new triviaQuestion("What allows transportation between Asgard and Earth in Thor?", "The bifrost", "The Forest", "Transportation pod", "Loki scepter");
    var question17 = new triviaQuestion("What video game is Thor playing in Avengers: Endgame?", "Fortnite", "Call of Duty", "Minecraft", "Subnautica");
    var question18 = new triviaQuestion("What store does Carol Danvers crash into in Captain Marvel?", "Blockbuster", "Key Food", "CostCo", "CVS Pharmacy");
    var question19 = new triviaQuestion("What do the Avengers eat after defeating Loki in New York?", "Shawarma", "Pizza", "Hot Dog", "Nuts");
    var question20 = new triviaQuestion("What color skin do the Sovereign have?", "Gold", "Pink", "Brown", "Orange");
    var question21 = new triviaQuestion("What is the name of T’Challa’s sister?", "Shuri", "Ramonda", "Okoye", "Nakia");
    var question22 = new triviaQuestion("What is Hawkeye’s weapon of choice?", "Bow and arrow", "Sword", "Shield", "Hammer");
    var question23 = new triviaQuestion("What does Stark Industries manufacture in Iron Man?", "Weapons", "Pots", "Chemicals", "Recycle");
    var question24 = new triviaQuestion("What is Peter Parker’s aunt’s name?", "May", "April", "June", "Linda");
    var question25 = new triviaQuestion("Complete the quote from Tony Stark’s daughter: I love you ____", "3000", "2000", "Dad", "Infinity");
    var question26 = new triviaQuestion("What is Thor the God of?", "Thunder", "Rain", "Love", "Strength");
    var question27 = new triviaQuestion("Where was Janet van Dyne stuck in Ant-Man?", "The Quantum Realm", "Asgard", "On a space craft", "Inter Universal Meadow");
    var question28 = new triviaQuestion("What group infiltrated S.H.I.E.L.D. in Captain America: The Winter Soldier?", "Hydra", "Ninja", "Nazi", "Mob");
    var question29 = new triviaQuestion("Which Infinity Stone does Vision have in his head?", "Mind Stone", "Soul Stone", "Power Stone", "Time Stone");

    arrayOfQuestions.push(question1, question2, question3, question4, question5, question6, question7,question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20, question21, question22, question23, question24, question25, question26, question27, question28, question29);
    console.log(arrayOfQuestions);
    // questionSelected = arrayOfQuestions[Math.floor(Math.random()*arrayOfQuestions.length)]
   
    // displayOptions(question1)
}



function displayQuestion(){
    var triviaq = $("<h3>");
    questionSelected = arrayOfQuestions[Math.floor(Math.random()*arrayOfQuestions.length)]
    var index = arrayOfQuestions.indexOf(questionSelected);
    arrayOfQuestions.splice(index, 1);
    console.log(arrayOfQuestions);
    var optionArray = [];
    console.log(timerRunning);
    if ( (!questionDisplayed) && (arrayOfQuestions.length > 0 ))
    {
        triviaq.html(questionSelected.question);
        $("#questionHolder").append(triviaq); 
        $("#optionHolder").append('<br>');
        $("#optionHolder").append('<br>');
        optionArray.push(questionSelected.answer, questionSelected.option1, questionSelected.option2, questionSelected.option3);
        shuffleArray(optionArray)
        for (var i=0; i<optionArray.length; i++) {
            var optionButton = $('<button>');
            optionButton.html(optionArray[i]);
            // optionButton.addClass("btn btn-danger");
            optionButton.addClass("optionButtons");
            $("#optionHolder").append(optionButton);
            $("#optionHolder").append("<br>");                   
        }
        $("#optionHolder").append("<br> <br> <br>");
        questionDisplayed = true;
        $(".optionButtons").on("click", getValue);
    }
    else if (arrayOfQuestions.length === 0 ) {
        $("#details").append("<h3> You have reached the end of the quiz </h3>");
        timeUp(intervalId);
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
        $('#details div').empty();
        var winImage = $("<img>");
        winImage.attr("src", "./assets/images/thorYes.gif");
        var winMsg = $("<h3>").html("You answered the question correct");
        $("#questionHolder").prepend(winMsg);
        $("#questionHolder").append(winImage);
        correctAnswers++;
        questionDisplayed = false;
        
        if(timerRunning) {
            setTimeout(() => {
                $('#details div').empty();

                // $("details").html("");
                displayQuestion();
            }, 1000);
            
        }
    }
    else {
        $("#details div").empty();
        var lossMsg = $("<h3>").html("Sorry wrong answer");
        var lossImage = $("<img>");
        lossImage.attr("src", "./assets/images/thorWrong.gif");
        $("#questionHolder").prepend(lossMsg);
        $("#questionHolder").append(lossImage);
        wrongAnswers++;
        questionDisplayed = false;
        if(timerRunning) {
            setTimeout(() => {
                $("#details div").empty();
                // $("details").html("");
                displayQuestion();
            }, 1000);
            
        }
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
   
    timerRunning = true;
    displayQuestion()
    intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        $("#displayTime").text(minutes + ":" + seconds);
        if (--timer < 0) {
            timeUp(intervalId);
        }
    }, 1000);
}

function timeUp(interval) {    
    clearInterval(interval);
    timerRunning = false;
    $("#displayTime").text("Time up!!!");
    $("#details div").empty();
    displayWinsLosses()
}
function displayWinsLosses(){
    // var timeUpInfo = $("<h3>");
    // timeUpInfo.html("Sorry Time is up... Please play again");
    var noOfWins = $("<h3>");
    var noOfLosses = $("<h3>");
    noOfWins.html("You have answered "+correctAnswers+" questions correct");
    noOfLosses.html("You have answered "+wrongAnswers+" questions incorrectly");
    // $("#details").append(timeUpInfo);
    $("#details").append(noOfWins);
    $("#details").append(noOfLosses);

    
}

$(document).ready(function () {
    initQuestions();
    if(!timerRunning) {
        var myTime= startTimer(timeForTest);
    }
    
});

