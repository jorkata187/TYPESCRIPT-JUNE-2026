function unknownResponse(param: unknown): string {
    if (
        param && typeof param === 'object' && 'value' in param && typeof param.value === 'string'
    ) {
        return param.value;
    }
    return '-';
}

console.log(unknownResponse({code: 200, text: 'Ok', value: [1, 2, 3]}));
console.log(unknownResponse({code: 200, text: 'Ok', value: 'Object Created'}));
