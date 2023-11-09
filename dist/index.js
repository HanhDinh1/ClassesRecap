"use strict";
// class Player {
//     public readonly first: string; 
//     public readonly last: string;
//     private score: number = 0;
// constructor (first: string, last: string) {
//     this.first = first;
//     this.last = last;
//        }
//     private secretMethod(): void {
//         console.log("SECRET METHOD");
//     }
// }
class Player {
    // private score: number = 0;
    constructor(first, last, _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    } //short cut syntax
    secretMethod() {
        console.log("SECRET METHOD");
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative!");
        }
        this._score = newScore;
    }
}
const elton = new Player("Elton", "Steele", 100);
elton.fullName;
