interface BaseData {
    engine: {horsepower: number};
    tires: {model: string; pressure: number};
    body: {color: string};
}

class Mechanic<T extends BaseData> {
    technicalInspection(data: T): boolean {
        return true;
    }
}

let mechanic = new Mechanic();