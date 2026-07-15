// string
let greeting: string = 'Hello TypeScript';

// number
let count: number = 42;

// boolean
let isOpen: boolean = true;

// null
let nothingHere: null = null;

// undefined
let undefinedValue: undefined = undefined;

// symbol
let uniqueKey: symbol = Symbol('unique');

// bigint
let bigCount: bigint = 9007199254740991n;

// any - we have to use it as a last option
let anything: any = 100;
anything = true;

// unknown
let uncertain: unknown = 'Could be anything';

if(typeof uncertain ==='string') {
    uncertain.toUpperCase(); 
}

// void
function logMessage(msg: string): void {
    console.log(msg);
}

// never with optional-parameter
function throwError(message: string, sameParam?: string): never {
    throw new Error(message);
}

// interface
interface Data {
    code: number;
    text: string;
};

let httpCode: Data = {
    code: 404,
    text: 'Page not found',
};

// assertions / type casting - allow to pass type info to TS -> somthing like any
let val: unknown = 20;
let str = val as string;



