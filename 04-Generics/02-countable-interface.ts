interface CountableSet<T> {
    add(item: T): void;
    remove(item: T): void;
    contains(item: T): boolean;
    getNumberOfCopies(item: T): number;
};

class CountedSet<T> implements CountableSet<T>{
    private dict = new Map<T, number>();

    add(item: T): void {
        this.dict.set(item, (this.dict.get(item) || 0) + 1);
    }

    remove(item: T): void {
        if (this.dict.has(item) && this.dict.get(item)! > 0) {
            this.dict.set(item, this.dict.get(item)! - 1);
        }
    }

    getNumberOfCopies(item: T): number {
        return this.dict.get(item) || 0;
    }

    contains(item: T): boolean {
        return this.getNumberOfCopies(item) > 0;
    }
}

let codesCounterSet = new CountedSet<200 | 404 | 500>();

codesCounterSet.add(200);
// codesCounterSet.add(400); // This will cause a TypeScript error because 400 is not part of the defined type