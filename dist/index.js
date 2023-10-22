class Player {
    #score = 0; 
    #numLives = 10;
constructor(first, last) {
    this.first = first;
    this.last = last;
    
}
getScore() {
    return this.#score;
}
updateScore(newScore) {
    this.#score = newScore;
}
    taunt(){
        console.log("BOOYAH!")
    }
    loseLife() {
        this.numLives -= 1;
    }
}   

const player1 = new Player("blue", "Steel");
// Player1.taunt();

// const Player2 = new Player("kenny", "Brow");
// console.log(Player1.first);
// console.log(Player1);\

// console.log(player1.#numLives);
// player1.loseLife();
// console.log(player1.#numLives);

console.log(player1.getScore());
console.log(player1.updateScore(28));
console.log(player1.getScore());

console.log(player1);
