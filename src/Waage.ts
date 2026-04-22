/**
 * Hinweise und Details zur Klasse und den einzelnen Methoden siehe Aufgabenblatt.
 */
export class Waage {
    /*
      */
    private letztesGewicht : number;
    
    private vorherigeGewicht : number;
    

    // Ergänzen Sie hier die Felddeklarationen, add field declarations here

    constructor() {
    this.letztesGewicht = 0;
    this.vorherigeGewicht = 0;
    
    }

    // Implementieren Sie die hier vorgegebenen Methoden:

    getLetztesGewicht(): number {
        if(this.letztesGewischt == 0){
        throw new Error("Not implemented yet");
    }
    return this.letztesGewicht;
}

    registriere(gewicht: number): void {
    if(this.letztesGewicht != 0 ){
        this.vorherigeGewicht= this.letztesGewicht;
      
    }

    }

    // Ergänzen Sie hier die fehlenden Methoden:
    getTrend() : number {
        if(this.vorherigeGewicht = 0){
        
        }
        if(this.letztesGewicht < this.vorherigeGewicht)  {
            return -1;
        }else if(this.letztesGewicht > this.vorherigeGewicht){
            return 1;
        }else if(this.letztesGewicht = this.vorherigeGewicht){
            return 0;
        }
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
    