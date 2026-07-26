function swap<T>(a: T[], aIndex: number, b: T[], bIndex: number) {
    const original = a[aIndex];
    a[aIndex] = b[bIndex];
    b[bIndex] = original;
};

let a = ['test', '23'];
let b = ['a', 'b', 'c'];

swap<string>(a, 0, b, 0);

