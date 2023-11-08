class Player {
    static description = "Players In Our Game";
    //If we put "static" in front of a property like one of these class fields,
    //or if we put that in front of a method, that tells JavaScript that property or method
    //exists on the class itself and is not going to exist on each individual instance.
    #score = 0;
    #numLives = 10;
constructor(first, last) {
    this.first = first;
    this.last = last;
    this.#secret();
}
static randomPlayers() {
return new Player ("Andy", "Samberg")
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




class AdminPlayer extends Player {
    constructor(first, last, powers){
        super(first, last); //You got multiple constructors. You have to call the parent constructor first
        //using super, pass through any values you want.
        this.powers = powers;
    }
    isAdmin = true;
}
const admin = new AdminPlayer("admin", "mcAdmins", ["delete", "restore world"]);
// const admin = new AdminPlayer("admin", "mcAdmins");


// const player1 = new Player("blue", "Steel");
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


// console.log(player1.score);
// player1.score = 28;
// console.log(player1.score);


// player1.score
// player1.score = 29;
// player1.fullName


// console.log(player1.fullName);
// player1.fullName = "Amy adams";
// console.log(player1);





