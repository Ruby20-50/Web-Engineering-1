/**
 * Hinweise und Details zur Klasse und den einzelnen Methoden siehe Aufgabenblatt.
 */
export class Waage {
    /*
      */
    private letztesGewicht : number;
    private hatGewischt : boolean;


    // Ergänzen Sie hier die Felddeklarationen, add field declarations here

    constructor() {
    this.letztesGewicht = 0;
    this.hatGewischt = false;    
    
    }

    // Implementieren Sie die hier vorgegebenen Methoden:

    getLetztesGewicht(): number {
        if(!this.hatGewischt){
        throw new Error("Not implemented yet");
    }
    return this.letztesGewicht;
}

    registriere(gewicht: number): void {
    
        throw new Error("Not implemented yet");
    }

    // Ergänzen Sie hier die fehlenden Methoden:
    getTrend() : void {

    }
    getMin() : number {
    }
    getMax() : number {

    }
    getAnzahl() : number {

    }
    getDurchschnitt() : number {

    }
}
    