interface CarBody {material: string; state: string};
interface Tyres {airPressure: number; condition: string};
interface Engine {horsepower: number; oilDensity: number};

interface AditionalProps {
    partName: 'Engine' | 'Car Body' | 'Tyres';
    runDiagnostics: () => string
}

function runDiagnostics(this: {partName: string}): string {
    return this.partName;
}


function carDiagnostics(
    carBody: CarBody & AditionalProps,
    tyres: Tyres & AditionalProps,
    engine: Engine & AditionalProps
) {
    console.log(carBody.runDiagnostics());
    console.log(tyres.runDiagnostics());
    console.log(engine.runDiagnostics());
}