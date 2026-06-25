let score = 0;

let level = 1;

let num1;
let num2;

let answer;

let playerName;

let timeLeft = 60;

let timer;

function startGame(){

    playerName =
    document.getElementById("playerName").value;

    if(playerName === ""){
        alert("Атыңды киргиз!");
        return;
    }

    document.getElementById("login").style.display =
    "none";

    document.getElementById("game").style.display =
    "block";

    document.getElementById("welcome").innerHTML =
    "Кош келдиң, " + playerName + "!";

    startTimer();

    newQuestion();
}

function startTimer(){

    timer = setInterval(() => {

        timeLeft--;

        document.getElementById("timer").innerHTML =
        timeLeft;

        if(timeLeft <= 0){

            clearInterval(timer);

            finishGame();
        }

    },1000);
}

function newQuestion(){

    if(level === 1){

        num1 = random(10);
        num2 = random(10);

        answer = num1 + num2;

        document.getElementById("question").innerHTML =
        `${num1} + ${num2} = ?`;
    }

    else if(level === 2){

        num1 = random(20);
        num2 = random(10);

        answer = num1 - num2;

        document.getElementById("question").innerHTML =
        `${num1} - ${num2} = ?`;
    }

    else if(level === 3){

        num1 = random(10);
        num2 = random(10);

        answer = num1 * num2;

        document.getElementById("question").innerHTML =
        `${num1} × ${num2} = ?`;
    }

    else{

        num1 = random(10);
        num2 = random(9) + 1;

        answer = num1;

        document.getElementById("question").innerHTML =
        `${num1 * num2} ÷ ${num2} = ?`;
    }
}

function checkAnswer(){

    let userAnswer =
    Number(document.getElementById("answer").value);

    if(userAnswer === answer){

        score += 10;

        document.getElementById("result").innerHTML =
        "✅ Туура жооп!";

        if(score === 50){
            level = 2;
        }

        if(score === 100){
            level = 3;
        }

        if(score === 150){
            level = 4;
        }

    }else{

        document.getElementById("result").innerHTML =
        "❌ Туура эмес!";
    }

    document.getElementById("score").innerHTML =
    score;

    document.getElementById("level").innerHTML =
    level;

    document.getElementById("answer").value = "";

    newQuestion();
}

function finishGame(){

    document.getElementById("game").style.display =
    "none";

    document.getElementById("finish").style.display =
    "block";

    document.getElementById("finalName").innerHTML =
    playerName;

    document.getElementById("finalScore").innerHTML =
    score;
}

function random(max){
    return Math.floor(Math.random() * max) + 1;
}