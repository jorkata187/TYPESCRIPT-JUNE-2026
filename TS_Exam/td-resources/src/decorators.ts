export function Upgraded(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;

    if (typeof original !== 'function') {
        throw new Error('Upgraded can only be applied to methods')
    }

    descriptor.value = function(...args: any[]) {
        const result = original.apply(this, args);
        return result * 1.75;
    }
    return descriptor;
};


