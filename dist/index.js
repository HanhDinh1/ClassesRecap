"use strict";
// class Player {
//     public readonly first: string; 
//     public readonly last: string;
//     private score: number = 0;
// constructor (first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     }
//     private secretMethod(): void {
//         console.log("SECRET METHOD");
//     }
// }
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        this.score = 0;
    } //short cut syntax
    secretMethod() {
        console.log("SECRET METHOD");
    }
}
const elton = new Player("Elton", "Steele");
