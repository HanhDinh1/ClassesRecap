class Player {
    #score = 0; 
    #numLives = 10;
constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
}
get fullName() {
    return `${this.first} ${this.last}`;
}

set fullName(newName){
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
}
get score() {
    return this.#score;
}
set score(newScore){
    if (newScore <0){
        throw new Error ("Score must be greater than 0")
    }
    this.#score = newScore;
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
    #secret(){
        console.log("SECRET!")
    }
}   

const player1 = new Player("blue", "Steel");
// Player1.taunt();

// const Player2 = new Player("kenny", "Brow");
// console.log(Player1.first);
// console.log(Player1);

// console.log(player1.#numLives);
// player1.loseLife();
// console.log(player1.#numLives);

// console.log(player1.getScore());
// console.log(player1.updateScore(28));
// console.log(player1.getScore());

console.log(player1.score);
player1.score = 28;
console.log(player1.score);

player1.score
player1.score = 29;
player1.fullName

console.log(player1.fullName);
player1.fullName = "Amy adams";
console.log(player1);

