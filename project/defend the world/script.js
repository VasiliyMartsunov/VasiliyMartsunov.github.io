const rerolArmor = document.querySelector(".rerol_armor");
const kickButton = document.querySelector(".kick");
const kickButton2 = document.querySelector(".kick2");
const superKickButton = document.querySelector(".super_kick");
const pointFigButton = document.querySelector(".point_fig");
const pointDexButton = document.querySelector(".point_dex");
const pointHpButton = document.querySelector(".point_hp");
const pointResetButton = document.querySelector(".point_reset");
const heroHpSpan = document.getElementById("hero_hp");
const heroFigSpan = document.getElementById("hero_fig");
const heroDexSpan = document.getElementById("hero_dex");
const enemyHpSpan = document.getElementById("enemy_hp");
const enemyFigSpan = document.getElementById("enemy_fig");
const enemyDexSpan = document.getElementById("enemy_dex");
const pointsSpan = document.getElementById("points");
const enemyNameSpan = document.getElementById("enemy_name");
let enemyHp = 10;
let enemyFig = 2;
let enemyDex = 2;
let heroHp = 10;
let heroFig = 1;
let heroDex = 1;
let points = 10;
let turn = 1;
let level = 1;
let wepons = 0;
let weponFig = 0;
let coast = 0;
let clickFig = 0;



kickButton2.disabled = true;
superKickButton.disabled = true;




function weponsSwitch(){
    switch(wepons){
        case 0:
            weponFig = 0; 
            coast = 0;
            document.getElementById("wep_1").style.display = "none";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
           break;
        case 1:
            weponFig = 5; 
            coast = 2;
            document.getElementById("wep_1").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 2:
            weponFig = 8; 
            coast = 5;
            document.getElementById("wep_1").style.display = "none";
            document.getElementById("wep_2").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 3:
            weponFig = 12; 
            coast = 10;
            document.getElementById("wep_2").style.display = "none";
            document.getElementById("wep_3").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 4:
            weponFig = 15; 
            coast = 13;
            document.getElementById("wep_3").style.display = "none";
            document.getElementById("wep_4").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 5:
            weponFig = 18;
            coast = 17;
            document.getElementById("wep_4").style.display = "none"; 
            document.getElementById("wep_5").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 6:
            weponFig = 21;
            coast = 20;
            document.getElementById("wep_5").style.display = "none"; 
            document.getElementById("wep_6").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 7:
            weponFig = 25;
            coast = 24;
            document.getElementById("wep_6").style.display = "none"; 
            document.getElementById("wep_7").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 8:
            weponFig = 28;
            coast = 28;
            document.getElementById("wep_7").style.display = "none"; 
            document.getElementById("wep_8").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 9:
            weponFig = 31;
            coast = 32;
            document.getElementById("wep_8").style.display = "none"; 
            document.getElementById("wep_9").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 10:
            weponFig = 40;
            coast = 35;
            document.getElementById("wep_9").style.display = "none"; 
            document.getElementById("wep_10").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 11:
            weponFig = 45;
            coast = 40;
            document.getElementById("wep_10").style.display = "none"; 
            document.getElementById("wep_11").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 12:
            weponFig = 50;
            coast = 40;
            document.getElementById("wep_11").style.display = "none"; 
            document.getElementById("wep_12").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 13:
            weponFig = 55;
            coast = 40;
            document.getElementById("wep_12").style.display = "none"; 
            document.getElementById("wep_13").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 14:
            weponFig = 60;
            coast = 40;
            document.getElementById("wep_13").style.display = "none"; 
            document.getElementById("wep_14").style.display = "inline-block";
            heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 15:
            weponFig = 65;
            coast = 40;
            document.getElementById("wep_14").style.display = "none"; 
            document.getElementById("wep_15").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 16:
            weponFig = 70;
            coast = 40;
            document.getElementById("wep_15").style.display = "none"; 
            document.getElementById("wep_16").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 17:
            weponFig = 75;
            coast = 40;
            document.getElementById("wep_16").style.display = "none"; 
            document.getElementById("wep_17").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 18:
            weponFig = 80;
            coast = 40;
            document.getElementById("wep_17").style.display = "none"; 
            document.getElementById("wep_18").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 19:
            weponFig = 85;
            coast = 40;
            document.getElementById("wep_18").style.display = "none"; 
            document.getElementById("wep_19").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 20:
            weponFig = 100;
            coast = 70;
            document.getElementById("wep_19").style.display = "none"; 
            document.getElementById("wep_20").style.display = "inline-block";
           heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
        case 21:
            weponFig = 100;
            coast = 0;
            alert("Оружие достигло максимального уровня")
            document.getElementById("wep_20").style.display = "inline-block";
            heroFigSpan.innerHTML = heroFig + "+" + weponFig;
            break;
    }   
}

function enemyIconLevel(){
    switch(level){
        case 1:
            enemyHp = 10;
            enemyFig = 2;
            enemyDex = 2;
            document.getElementById("icon_level_1").style.display = "inline-block";
            enemyNameSpan.innerHTML = "Скелет";
            enemyHpSpan.innerHTML = enemyHp; 
            enemyFigSpan.innerHTML = enemyFig;
            enemyDexSpan.innerHTML = enemyDex;
            points = points + 10 + level * 3;
            pointsSpan.innerHTML = points;
            break;
        case 2: 
            enemyHp = 15;
            enemyFig = 5;
            enemyDex = 5;
            document.getElementById("icon_level_1").style.display = "none"; 
            document.getElementById("icon_level_2").style.display = "inline-block"; 
            enemyHpSpan.innerHTML = enemyHp; 
            enemyFigSpan.innerHTML = enemyFig;
            enemyDexSpan.innerHTML = enemyDex;
            points = points + 10 + level * 3;
            pointsSpan.innerHTML = points;
            break;
        case 3: 
            enemyHp = 20;
            enemyFig = 8;
            enemyDex = 8;
            document.getElementById("icon_level_2").style.display = "none"; 
            document.getElementById("icon_level_3").style.display = "inline-block"; 
            enemyHpSpan.innerHTML = enemyHp; 
            enemyFigSpan.innerHTML = enemyFig;
            enemyDexSpan.innerHTML = enemyDex;
            points = points + 10 + level * 3;
            pointsSpan.innerHTML = points;
        break;
        case 4: 
            enemyHp = 22;
            enemyFig = 10;
            enemyDex = 10;
            document.getElementById("icon_level_3").style.display = "none"; 
            document.getElementById("icon_level_4").style.display = "inline-block"; 
            enemyHpSpan.innerHTML = enemyHp; 
            enemyFigSpan.innerHTML = enemyFig;
            enemyDexSpan.innerHTML = enemyDex;
            points = points + 10 + level * 3;
            pointsSpan.innerHTML = points;
        break;
        case 5: 
            enemyHp = 25;
            enemyFig = 13;
            enemyDex = 13;
            document.getElementById("icon_level_4").style.display = "none"; 
            document.getElementById("icon_level_5").style.display = "inline-block"; 
            enemyHpSpan.innerHTML = enemyHp; 
            enemyFigSpan.innerHTML = enemyFig;
            enemyDexSpan.innerHTML = enemyDex;
            points = points + 10 + level * 3;
            pointsSpan.innerHTML = points;
        break;
        case 6: 
            enemyHp = 28;
            enemyFig = 16;
            enemyDex = 16;
            document.getElementById("icon_level_5").style.display = "none"; 
            document.getElementById("icon_level_6").style.display = "inline-block"; 
            enemyHpSpan.innerHTML = enemyHp; 
            enemyFigSpan.innerHTML = enemyFig;
            enemyDexSpan.innerHTML = enemyDex;
            points = points + 10 + level * 3;
            pointsSpan.innerHTML = points;
        break;
        case 7: 
            enemyHp = 32;
            enemyFig = 20;
            enemyDex = 20;
            document.getElementById("icon_level_6").style.display = "none"; 
            document.getElementById("icon_level_7").style.display = "inline-block"; 
            enemyHpSpan.innerHTML = enemyHp; 
            enemyFigSpan.innerHTML = enemyFig;
            enemyDexSpan.innerHTML = enemyDex;
            points = points + 10 + level * 3;
            pointsSpan.innerHTML = points;
        break;
        case 8: 
            enemyHp = 36;
            enemyFig = 24;
            enemyDex = 24;
            document.getElementById("icon_level_7").style.display = "none"; 
            document.getElementById("icon_level_8").style.display = "inline-block"; 
            enemyHpSpan.innerHTML = enemyHp; 
            enemyFigSpan.innerHTML = enemyFig;
            enemyDexSpan.innerHTML = enemyDex;
            points = points + 10 + level * 3;
            pointsSpan.innerHTML = points;
        break;
        case 9: 
            enemyHp = 40;
            enemyFig = 30;
            enemyDex = 30;
            document.getElementById("icon_level_8").style.display = "none"; 
            document.getElementById("icon_level_9").style.display = "inline-block"; 
            enemyHpSpan.innerHTML = enemyHp; 
            enemyFigSpan.innerHTML = enemyFig;
            enemyDexSpan.innerHTML = enemyDex;
            points = points + 10 + level * 3;
            pointsSpan.innerHTML = points;
        break;
        case 10: 
            enemyHp = 50;
            enemyFig = 40;
            enemyDex = 40;
            document.getElementById("icon_level_9").style.display = "none"; 
            document.getElementById("icon_level_10").style.display = "inline-block"; 
            enemyHpSpan.innerHTML = enemyHp; 
            enemyFigSpan.innerHTML = enemyFig;
            enemyDexSpan.innerHTML = enemyDex;
            points = points + 10 + level * 3;
            pointsSpan.innerHTML = points;
        break;
        case 11:
            document.getElementById("icon_level_10").style.display = "none"; 
            enemyNameSpan.innerHTML = "Победа"; 
        break;
    }
}


function turnDex(){
    turn = heroDex / 3;
    if (turn < 1){
        turn = 1;
    }
}




document.querySelector(".start_game").onclick = function(){
    kickButton.disabled = false;
    enemyHp = 10;
    enemyFig = 2;
    enemyDex = 2;
    heroHp = 10;
    heroFig = 1;
    heroDex = 1;
    points = 10;
    turn = 1;
    level = 1;
    wepons = 0;
    weponFig = 0;
    coast = 0;
    clickFig = 0;
    document.querySelector(".game_button").style.display = "flex";
    document.querySelector(".points").style.display = "flex";
    document.querySelector(".rerol_armor").style.display = "flex";
    document.querySelector(".hero").style.display = "block";
    document.querySelector(".enemy").style.display = "block";
    pointsSpan.innerHTML = points;
    document.getElementById("icon_level_2").style.display = "none"; 
    document.getElementById("icon_level_3").style.display = "none"; 
    document.getElementById("icon_level_4").style.display = "none"; 
    document.getElementById("icon_level_5").style.display = "none"; 
    document.getElementById("icon_level_6").style.display = "none"; 
    document.getElementById("icon_level_7").style.display = "none"; 
    document.getElementById("icon_level_8").style.display = "none"; 
    document.getElementById("icon_level_9").style.display = "none"; 
    document.getElementById("icon_level_10").style.display = "none"; 
    document.getElementById("wep_1").style.display = "none"; 
    document.getElementById("wep_2").style.display = "none"; 
    document.getElementById("wep_3").style.display = "none"; 
    document.getElementById("wep_4").style.display = "none"; 
    document.getElementById("wep_5").style.display = "none"; 
    document.getElementById("wep_6").style.display = "none"; 
    document.getElementById("wep_7").style.display = "none"; 
    document.getElementById("wep_8").style.display = "none"; 
    document.getElementById("wep_9").style.display = "none"; 
    document.getElementById("wep_10").style.display = "none"; 
    document.getElementById("wep_11").style.display = "none"; 
    document.getElementById("wep_12").style.display = "none"; 
    document.getElementById("wep_13").style.display = "none"; 
    document.getElementById("wep_14").style.display = "none"; 
    document.getElementById("wep_15").style.display = "none"; 
    document.getElementById("wep_16").style.display = "none"; 
    document.getElementById("wep_17").style.display = "none"; 
    document.getElementById("wep_18").style.display = "none"; 
    document.getElementById("wep_19").style.display = "none"; 
    document.getElementById("wep_20").style.display = "none"; 


    pointsSpan.innerHTML = points;
    heroFigSpan.innerHTML = heroFig;
    heroDexSpan.innerHTML = heroDex;
    heroHpSpan.innerHTML = heroHp;
    heroFigSpan.innerHTML = heroFig + "+" + weponFig; 
    enemyHpSpan.innerHTML = enemyHp; 
    enemyFigSpan.innerHTML = enemyFig;
    enemyDexSpan.innerHTML = enemyDex;
    enemyIconLevel()
}


pointFigButton.onclick = function(){
    if(points > 0){
        heroFig++;
        points--; 
        heroFigSpan.innerHTML = heroFig + "+" + weponFig;
        pointsSpan.innerHTML = points;
    }
}
pointDexButton.onclick = function(){
    if(points > 0){
        heroDex++;
        points--; 
        heroDexSpan.innerHTML = heroDex;
        pointsSpan.innerHTML = points;
    }
}
pointHpButton.onclick = function(){
    if(points > 0){
        heroHp++;
        points--; 
        heroHpSpan.innerHTML = heroHp;
        pointsSpan.innerHTML = points;
    }
}
pointResetButton.onclick = function(){
    points = points + (heroFig-1) + (heroDex-1) + (heroHp-1);
    heroFig = 1;
    heroDex = 1;
    heroHp = 1;
    pointsSpan.innerHTML = points;
    heroFigSpan.innerHTML = heroFig;
    heroDexSpan.innerHTML = heroDex;
    heroHpSpan.innerHTML = heroHp;
    heroFigSpan.innerHTML = heroFig + "+" + weponFig; 
}
kickButton.onclick = function(){
    console.log(turn)
    if (turn >= 1){
        enemyHp = enemyHp - heroFig - weponFig;
        enemyHpSpan.innerHTML = enemyHp;
        turn--;
        clickFig++;
        if (clickFig >= 5){
            kickButton2.disabled = false;
            if(clickFig>= 10){
                superKickButton.disabled = false;
            }
        }
        else{
            kickButton2.disabled = true;
            superKickButton.disabled = true; 
        }
    }
    else{
        turnEnemy()
    }
}
function turnEnemy(){
    if(enemyHp <= 0){
        level++;
        enemyIconLevel();   
    }
    else{
        heroHp = heroHp - enemyFig;
        heroHpSpan.innerHTML = heroHp;
        turnDex();
        if(heroHp <= 0){
            alert("Вы проиграли");
           kickButton.disabled = true;
           kickButton2.disabled = true;
           superKickButton.disabled = true;  
        }
    }
}
document.querySelector(".rerol_armor").onclick = function(){
    if(points > coast + level){
        if(wepons <= 21){
            points = points - coast;
            wepons++;
            weponsSwitch();
            pointsSpan.innerHTML = points;
        }
        else{
            wepon = 21
        }
    }
}
kickButton2.onclick = function(){
    if (clickFig >= 5){
        kickButton2.disabled = false;
        enemyHp = enemyHp - (heroFig + weponFig + 5);
        enemyHpSpan.innerHTML = enemyHp;
        clickFig = 0;
    }
    else{
        kickButton2.disabled = true;
        superKickButton.disabled = true; 
    }
}
superKickButton.onclick = function(){
    if (clickFig >= 10){
        superKickButton.disabled = false;
        enemyHp = enemyHp - (heroFig + weponFig * 2);
        enemyHpSpan.innerHTML = enemyHp;
        clickFig = 0;
    }
    else{
        kickButton2.disabled = true;
        superKickButton.disabled = true; 
    }
}