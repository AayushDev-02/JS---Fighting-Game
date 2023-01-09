// DIVS
const playButton = document.querySelector("#play");
const resultDiv = document.querySelector("#result");
const p1NameDiv = document.querySelector("#p1Name");
const p2NameDiv = document.querySelector("#p2Name");
const p1HealthDiv = document.querySelector("#p1Health");
const p2HealthDiv = document.querySelector("#p2Health");

class Player{
    constructor(name, attackDamage){
        this.name = name;
        this.health = 100;
        this.attackDamage = attackDamage
    }

    strike(enemy){
        let damageAmount = Math.ceil(Math.random()*(this.attackDamage));
        enemy.health = enemy.health - damageAmount;
        if(enemy.health <= 0){
            enemy.health = 0;
            
        }
    }

    heal(){
        let healAmount = Math.ceil(Math.random()*5);
        this.health = this.health + healAmount;
        if(this.health > 100){
            this.health = 100;
        }

        
    }
}

class Game{
    constructor(){
        this.isOver = false;
    }

    declareResult(player1, player2){
        if(player1.health == 0 && player2.health != 0  ){
            resultDiv.innerText = `${player1.name} Wins!`
        }else if(player1.health !=0 && player2.health == 0){
            resultDiv.innerText = `${player2.name} Wins!`
        }
    }
}


const updateGame = () => {
    const name1 = prompt("Enter player 1 name: ");
    const name2 = prompt("Enter player 2 name: ");

    
    // updating the names of players
    p1NameDiv.innerText = name1;
    p2NameDiv.innerText = name2;
}

// creating class objects
const player1 = new Player("Player 1", 10);
const player2 = new Player("Player 2", 10);


// player 1 key presses:

document.addEventListener('keydown' , function(e){

    if(e.key == 'q' && player2.health >=0 ){

        player1.strike(player2);
        p2HealthDiv.innerText = player2.health;
        document.querySelector("#p1attack").play();
    }
})

document.addEventListener('keydown' , function(e){
    if(e.key == 'a' && player1.health >=0){
        player1.heal();
        p1HealthDiv.innerText = player1.health;
        document.querySelector("#p1heal").play();
    }
})

// player 2 key presses:--------------------------------

document.addEventListener('keydown' , function(e){

    if(e.key == 'p' && player1.health >=0 ){

        player2.strike(player1);
        p1HealthDiv.innerText = player1.health;
        document.querySelector("#p2attack").play();
    }
})

document.addEventListener('keydown' , function(e){
    if(e.key == 'l' && player1.health >=0){
        player2.heal();
        p2HealthDiv.innerText = player2.health;
        document.querySelector("#p2heal").play();
    }
})


document.querySelector("#reset").addEventListener("click", function(){
    updateGame()
})

