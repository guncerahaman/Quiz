var question = document.getElementById("question");
var audio = document.getElementById("audio");
var answer1 = document.getElementById("answer1");
var answer2 = document.getElementById("answer2");
var answer3 = document.getElementById("answer3");
var answer4 = document.getElementById("answer4");
var answers = [];
var msg = document.getElementById("msg");
var btn = document.getElementById("btn");
var skip = document.getElementById("skip");
var randomquestion;
var correctanswers=0;
var wronganswers =0;
var totalqu=0;
var timeout ;
function game() {  
    document.getElementById("letterbox").style.display="grid";
    totalqu++;
   msg.innerText="";
    document.getElementById("listen").style.display="inline-block";
    randomquestion = getrandom();
    audio.src = randomquestion + ".mp3";
    for (i = 1; i < 29; i++) {
        if (i != randomquestion) { answers.push(i); }

    }
    shuffle(answers);
    answers.splice(3, 28);
    answers.push(randomquestion);
    shuffle(answers);
    answer1.src = answers[0] + ".png";
    answer2.src = answers[1] + ".png";
    answer3.src = answers[2] + ".png";
    answer4.src = answers[3] + ".png";
    audio.play();
    question.style.display = "none"; 
    btn.style.display = "none";
 
    document.getElementById("listen").addEventListener("click",function () { playagain()});
document.getElementById("qu").innerText = totalqu;


//reward condition 5 questions answered , correct answers are more than wrong answers
if(totalqu >= 5 && correctanswers > wronganswers)
{
    document.getElementById("video").style.display = "block";
    document.getElementById("letter").style.visibility = "hidden";
    document.getElementById("letterbox").style.display = "none";  
  timeout=  setTimeout(function(){yutub()}, 300000);
}

}
function yutub(){
    totalqu = 0;
    wronganswers = 0;
    correctanswers =0;
    document.getElementById("video").style.display = "none";
document.getElementById("letter").style.visibility = "visible";
document.getElementById("restart").style.display = "block";
  }

question.addEventListener("click", function () {
   {game()} 
    });


function playagain() {
    audio.play();
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
answer1.addEventListener("click", function () {

    if (answers[0] == randomquestion) {
        correct();
    }
    else {
wrong();
    }


})
answer2.addEventListener("click", function () {

    if (answers[1] == randomquestion) {
        correct();
    }
    else {
wrong();
    }


})
answer3.addEventListener("click", function () {

    if (answers[2] == randomquestion) {
  correct();
    }
    else {
wrong();
    }


})
answer4.addEventListener("click", function () {

    if (answers[3] == randomquestion) {
        correct();
    }
    else {
wrong();
    }


})

function correct(){
    btn.innerText = "Well done! "
    btn.style.display = "inline-block";
    correctanswers++;
    document.getElementById("letterbox").style.display = "none";
    msg.innerText = "";
    document.getElementById("cor").innerText = correctanswers;

};
function wrong(){
    msg.innerText = "Try Again!";
    shuffle(answers);
    answer1.src = answers[0] + ".png";
    answer2.src = answers[1] + ".png";
    answer3.src = answers[2] + ".png";
    answer4.src = answers[3] + ".png";
    audio.play();
    wronganswers++;
    document.getElementById("wro").innerText = wronganswers;

};





function getrandom() {

    return (Math.ceil(Math.random() * 28));
}
btn.addEventListener("click", function () { {game()} });


skip.addEventListener("click",function(){  
    document.getElementById("video").style.display = "none";
document.getElementById("letter").style.visibility = "visible";
document.getElementById("letterbox").style.display = "grid"; 
totalqu=0;
clearTimeout(timeout);
}
);
