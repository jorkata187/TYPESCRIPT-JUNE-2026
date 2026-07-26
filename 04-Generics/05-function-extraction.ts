type FunctionPropertiesNames<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
} [keyof T];

type AllFunctions<T> = Pick<T, FunctionPropertiesNames<T>>;


type test = {
    name: string;
    age: number;
    greet: () => void;
};

type extracted = AllFunctions<test>; // { greet: () => void; }

type employees = {
    name: string;
    age: number;
    greet: () => void;
    work: (task: string) => void;
};

type extractedEmployees = AllFunctions<employees>; // { greet: () => void; work: (task: string) => void; }