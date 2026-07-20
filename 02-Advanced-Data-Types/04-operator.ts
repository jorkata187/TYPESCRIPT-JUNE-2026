function operator(
    param: string | number | string[],
    operation: 'Index' | 'Length' | 'Add',
    operand: number
) {
    switch(operation) {
        case 'Index':
            if(typeof param !== 'number') return param[operand];
            break;
        case 'Length':
            if(typeof param !== 'number') return param.length % operand;
            break;
        case 'Add':
            if(!Array.isArray(param)) return Number(param) + operand;
            break;
    }
}