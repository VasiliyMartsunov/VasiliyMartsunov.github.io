let correct = 0;
let mist = 0;
let min = 1;
let max = 9;


function checkAnswer(correctAnswer,userAnswer){
    if (correctAnswer == userAnswer){
        correct++;
        alert ("Это правильный ответ!");
    }else {
        mist++;
        alert ("Вы ошиблись :(" + " Правильный ответ был" + correctAnswer);
    }
}

function random(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



//кнопки с математическими упражнениями.
document.querySelector(".add").onclick = function(){
    let nonA = random(min,max);  
    let nonB = random(min,max);
    let correctAnswer = nonA + nonB;
    let userAnswer = prompt(nonA + " + "  + nonB+ "=", "");
    checkAnswer(correctAnswer,userAnswer);
}
document.querySelector(".subtract").onclick = function(){
    let nonA = random(min,max);  
    let nonB = random(min,max);
    let correctAnswer = nonA - nonB;
    let userAnswer = prompt(nonA + " - "  + nonB+ "=", "");
    checkAnswer(correctAnswer,userAnswer);
}
document.querySelector(".multiply").onclick = function(){
    let nonA = random(min,max);  
    let nonB = random(min,max);
    let correctAnswer = nonA * nonB;
    let userAnswer = prompt(nonA + " * "  + nonB+ "=", "");
    checkAnswer(correctAnswer,userAnswer);
}
document.querySelector(".divide").onclick = function(){
    let nonA = random(min,max);  
    let nonB = random(min,max);
    let correctAnswer = nonA / nonB;
    correctAnswer = Math.round(correctAnswer);
    alert("Пожалуйста округлите ответ до целого числа!")
    let userAnswer = prompt(nonA + " / "  + nonB+ "=", "");
    checkAnswer(correctAnswer,userAnswer);
}



//кнопка проверки правильных ответов.
document.querySelector(".check").onclick = function(){
alert("Итого: \n" + correct + " правильных ответов \n " + mist + " неправильных ответов ");
}



//кнопка сброса.
document.querySelector(".reset").onclick = function(){
    correct = 0; mist = 0;
}


//выбор уровня.
document.querySelector("select").onchange = function(){
    let val =document.querySelector("select").value;
    switch(val) {
        case "easy" : {
            min = 1; max = 9; break;

        }
        case "medium" : {
            min = 10; max = 99; break;

        }
        case "hard" : {
            min = 100; max = 999; break;

        }
    }
}

