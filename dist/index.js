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
    constructor(first, last, _score // Protected - available in the class you define it in, and any classes that inherit from that class.
    ) {
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
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999;
    }
}
const elton = new Player("Elton", "Steele", 100);
elton.fullName;
elton.score = 12;
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand} jacket`);
    }
}
const bike1 = new Bike("red");
const jacket1 = new Jacket("Prada", "black");
class Employee {
    // You mark the class abstract, you can't actually instantiate an instance of it anymore.
    // But you can use the abstract keyword to mark methods as abstract, which means that in a child class, those methods must be implemented.
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet() {
        console.log("HELLO");
    }
}
class FullTimeEmployeen extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployeen extends Employee {
    constructor(first, last, hourlyRate, hourlyWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hourlyWorked = hourlyWorked;
    }
    getPay() {
        return this.hourlyRate * this.hourlyWorked;
    }
}
const betty = new FullTimeEmployeen("Betty", "White", 95000);
console.log(betty.getPay());
const bill = new PartTimeEmployeen("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());
// Employee - FullTimeEmployee - PartTimeEmployee
