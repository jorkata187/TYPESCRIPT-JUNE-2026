function log(target: any, methodName: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    descriptor.value = function(...args: string[]) {
        const result = original.apply(this, args);
        console.log(`Function: '${methodName}' called with arguments: ${args.join(', ')}`);
        return result;
    };
    return descriptor;
};

class Person {
    constructor(public fName: string, public lName: string) {}
    @log
    static getFullName(fName: string, lName: string): string {
        return `${fName} ${lName}`;
    }
}

let person = new Person('John', 'Daus');
Person.getFullName(person.fName, person.lName);
Person.getFullName('Benny', 'Tres');