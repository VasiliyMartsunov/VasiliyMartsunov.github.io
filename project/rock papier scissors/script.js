const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("comp_score");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("rock");
const scissors_div = document.getElementById("scissors");
const paper_div = document.getElementById("paper");
let userScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let choices = ["r", "s", "p"];
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function main(){
    rock_div.addEventListener("click", function(){
        console.log("Выбрали камень.");
        game("r")
    })
    scissors_div.addEventListener("click", function(){
        console.log("Выбрали ножницы.");
        game("s")
    })
    paper_div.addEventListener("click", function(){
        console.log("Выбрали бумагу."); 
        game("p")
    })
}
main()

function game(userChoice){
    let computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice, computerChoice)
            break;
    }
}
function convertToWord(letter){
    if(letter==="r"){
        return "Камень";
    }
    if(letter==="s"){
        return "Ножницы";
    }
    if(letter==="p"){
        return "Бумага";
    }
}
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice)+" бьёт " + convertToWord(computerChoice)+". Ты выиграл!!!";
}
function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = convertToWord(userChoice)+" не бьёт " + convertToWord(computerChoice)+". Ты поиграл :(";
}
function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(userChoice)+" не бьёт " + convertToWord(computerChoice)+". Ничья";
}
document.querySelector(".reset").addEventListener("click", function(){
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
})
