function createdOn(constructor: { new (...args: any[]): User}) {
    return class extends constructor {
        createdOn = new Date().toString();
    }
}

@createdOn
class User {
    constructor(public name: string, public age: number) {}

    displayUserInfo() {
        console.log(`${this.name}, Age: ${this.age}`);
    }
}

const user1 = new User('John', 60);
console.log(user1);
console.log((user1 as any).createdOn);

