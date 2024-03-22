class Mammal {
    readonly age: number;
    constructor(age: number) {
        this.age = age;
    }
    run() {
        return "I am running;"
    }
}

class Person extends Mammal {
    readonly name: string;
    readonly age: number;
   
    constructor(name: string, age: number) {
        super(age);
        this.name = name;
        this.age = age;
    }
   
    // private increaseHeartRate() {
    //   this.heartRate += 20;
    // }
   
    run() {
      return 'I am running on two legs';
    }
   
    talk() {
      return `I'm ${this.age} years old`;
    }
  }
   
  const priya = new Person('Priya', 30);
  console.log(priya.talk());
  console.log(priya.run());
   

    class EarPods{
        readonly name: string;
        readonly colour: string;
        readonly cost: number;
        constructor(model: string, colour: string, price: number) {
            this.name = model;
            this.colour = colour;
            this.cost = price;
        }
        bargain() {
            return `I am bargaining ${this.name}`;
        }
        buy() {
            return `I have bought ${this.name} of colour ${this.colour} with cost ${this.cost}`;
        }

    }

    
class Remote {
    readonly operation: string;
    readonly temp: number;
   
    constructor(operation: string, temp: number) {
      this.operation = operation;
      this.temp = temp;
    }
   
    turnON() {
      return `Turn on AC`;
    }
   
    ac() {
      return `${this.operation} to ${this.temp}`;
    }

  }
   const acRemote = new Remote('ON', 25);
   console.log(acRemote.turnON());
   console.log(acRemote.ac());


