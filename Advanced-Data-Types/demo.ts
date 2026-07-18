// Union Types
function printMessage(text: string | string[]) {
    if (typeof text === "string") {
        console.log(text);
    } else {
        console.log(text.join(" "));
    }
};

// Type Aliases & Intersection Types
type Emploee = {
    name: string;
    age: string;
}; // Custom Type

type Age = number;
type User = {age: Age};
type Person = {name: string};
type Combined = User & Person; // Type alias with Intersection type
const user: Combined = {name: 'John', age: 20}; 

// Literal Types
let succsessStatus: 200 | 201 | 202;

succsessStatus = 200; // valid
succsessStatus = 404; // invalid

type Direction = "left" | "right" | "up" | "down";

// "keyof"
type Point = {x: number; y: number};
type PointKeys = keyof Point // 'x' | 'y'

// "in" -> checks if a given key exists in an object
type A = {name: string};
type B = {age: number};

let val: A | B = {age: 50};

if('age' in val) {
    console.log(val.age); // Used as type guard to narrow 'val' to type 'B' 
}

// "as const" -> Makes all properties readonly
const person = {
    name: 'Alice',
    age: 25
} as const;

// Mapped Types
type Points = {
    x: number;
    y: number;
    z: number;
};

type OptionalPoints = {
    [key in keyof Points]?: Points[key];
} // x?: number;
  // y?: number;
  // z?: number;

  
  // Interface
  interface PersonInfo {
    fullName: string,
    email: string,
  }

  let thomas: PersonInfo = {
    fullName: 'Thomas Shelby',
    email: 'thomas.shelby@example.com'
  }

  interface Calculator {
    (numOne: number, numTwo: number, operation: string): number;
  }  // Interface for function 

  // Implemented Interface by class
  interface ClockLayout {
    hour: number,
    minute: number,
    showTime (h: number, m: number): string;
  };

  class Clock implements ClockLayout {
    public hour;
    public minute;
    constructor(h: number, m: number) {
        this.hour = h;
        this.minute = m
    }
    showTime () {
        return `Current time ${this.hour}:${this.minute}`;
    }
  }



