export function CriticalStrike(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    
    if (typeof original !== 'function') {
        throw new Error('CriticalStrike can only be applied to methods')
    }

    descriptor.value = function(...args: any[]) {
        const result = original.apply(this, args);
        return result * 1.5;
    }

    return descriptor;
};