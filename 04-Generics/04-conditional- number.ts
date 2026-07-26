type StringOrNumber<T> = T extends number ? number : string; // In primitives extends is like '='

function conditionalNumber<T>(param: StringOrNumber<T>) {
    console.log(typeof param === 'number' ? param.toFixed(2) : param);
}

conditionalNumber<number>(20);
conditionalNumber<string>('some string');
conditionalNumber<boolean>('another string');

// conditionalNumber<boolean>(20);  // Error
// conditionalNumber<number>('some string'); // Error