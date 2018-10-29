//cashing the dom means storing something for future use

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div =document.getElementById("r");
const paper_div =document.getElementById("p");
const scissor_div =document.getElementById("s");

//end cashing the dom

function getComputerChoice(){
const choices = ["r", "p", "s"];
const randomNumber = Math.floor(Math.random()* 3);
return choices[randomNumber];
}

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissor";
}

function win(user, computer){
   userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = convertToWord(user) + " beats " +convertToWord(computer) + " .You win";
document.getElementById(user).classList.add('green-glow')
setTimeout(function() {document.getElementById(user).classList.remove('green-glow')}, 300);
}


function lose(user, computer){
    computerScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = convertToWord(user) + " loses" +convertToWord(computer) + " .You lost";
document.getElementById(user).classList.add('red-glow')
setTimeout(function() {document.getElementById(user).classList.remove('red-glow')}, 300);
}
function draw(user, computer){
    
    result_p.innerHTML = convertToWord(user) + " equals " +convertToWord(computer) + " .It's a draw";
    document.getElementById(user).classList.add('gray-glow')
    setTimeout(function() {document.getElementById(user).classList.remove('gray-glow')}, 300);
    }


function game(userChoice){
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
    win(userChoice, computerChoice);
    break;
    case "rp":
    case "ps":
    case "sr":
    lose(userChoice, computerChoice);
    break;
    case "rr":
    case "pp":
    case "ss":
    draw(userChoice, computerChoice);
    break;
}
}


function main (){
rock_div.addEventListener('click',function() {
    game("r");
})

paper_div.addEventListener('click',function() {
    game("p");
})

scissor_div.addEventListener('click',function() {
    game("s");
})
}
main();
