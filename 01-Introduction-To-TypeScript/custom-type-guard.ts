function customTypeGuard(param: unknown): param is string[] {
    return (
        Array.isArray(param) &&
        param.length > 0 &&
        param.every((el) => typeof el === 'string')
    );
}

console.log(customTypeGuard(['one', 'two', 'three']));
