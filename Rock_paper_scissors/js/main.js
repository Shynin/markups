var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");

function getCompChoice() {
    const choices = ['r', 's', 'p'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";

}

function win(userChoice, compChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `Your ${convertToWord(userChoice)} beats his ${convertToWord(compChoice)}. You won!`;
    userChoice_div.classList.add('win-glow');
    userScore_span.classList.add('win-num');
    compScore_span.classList.add('lose-num');
    setTimeout(function(){
        userChoice_div.classList.remove('win-glow');
        compScore_span.classList.remove('lose-num');
        userScore_span.classList.remove('win-num')}, 300);
        setTimeout(() => result_p.innerHTML = `Yeah, nice one! Keep winning!` ,2000);
    }

function lose(userChoice, compChoice) {
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `Your ${convertToWord(userChoice)} loses to his ${convertToWord(compChoice)}. You lost...`;
    userChoice_div.classList.add('lose-glow');
    userScore_span.classList.add('lose-num');
    compScore_span.classList.add('win-num');
    setTimeout(function(){
        userChoice_div.classList.remove('lose-glow');
        compScore_span.classList.remove('win-num');
        userScore_span.classList.remove('lose-num')}, 300);
    setTimeout(() => result_p.innerHTML = `Don't worry. Try once more!` ,2000);
}

function draw(userChoice, compChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `Your ${convertToWord(userChoice)} equals his ${convertToWord(compChoice)}. It's a draw!`;
    userChoice_div.classList.add('draw-glow');
    userScore_span.classList.add('draw-num');
    compScore_span.classList.add('draw-num');
    setTimeout(function(){
        userChoice_div.classList.remove('draw-glow');
        compScore_span.classList.remove('draw-num');
        userScore_span.classList.remove('draw-num')}, 300);
    setTimeout(() => result_p.innerHTML = `Keep trying you can beat him!` ,2000);

}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener('click', () => game("r"));
    scissors_div.addEventListener('click', () => game("s"));
    paper_div.addEventListener('click', () => game("p"));
}

main();