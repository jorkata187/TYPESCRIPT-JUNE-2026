class Employee {
    constructor(public name: string, protected position: string, private salary: number){}

    getDetails(): string {
        return `Name: ${this.name}, Position: ${this.position}`;
    };

    showSalary(): string {
        return`Salary: ${this.salary}`;
    }
};