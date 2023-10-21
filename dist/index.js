class Player {
constructor(first, last) {
    this.first = first;
    this.last = last;
}
    taunt(){
        console.log("BOOYAH!")
    }
}   

const Player1 = new Player("blue", "Steel");
Player1.taunt();

const Player2 = new Player("kenny", "Brow");
console.log(Player1.first);
