class Calculator{
    calculate(operation: 'power' | 'log', a: number, b: number): number;
    calculate(operation: 'add' | 'subtract' | 'multiply' | 'divide', a: number, b: number, c?: number, d?: number): number;
    calculate(operation: 'power' | 'log' | 'add' | 'subtract' | 'multiply' | 'divide', a: number, b: number, c?: number, d?: number): number {
        const numbers = [a, b, c, d].filter((n) => n !== undefined)

        switch(operation) {
            case "power":
                return Math.pow(a, b);
            case "log":
                return Math.log(a) / Math.log(b);
            case "add":
                return numbers.reduce((acc, curr) => acc + curr, 0);
            case "subtract":
                return numbers.reduce((acc, curr) => acc + curr);
            case "multiply":
                return numbers.reduce((acc, curr) => acc * curr, 1);
            case "divide":
                return numbers.reduce((acc, curr) => acc / curr);
        }
    }
};

const calc = new Calculator();
// console.log(calc.calculate('power', 2, 3, 2)); // Error
// console.log(calc.calculate('add', 2)); // Error
// console.log(calc.log('add', 2, 5, 6, 7)); // Error

