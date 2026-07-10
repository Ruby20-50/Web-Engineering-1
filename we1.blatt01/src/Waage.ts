
/**
 * Hinweise und Details zur Klasse und den einzelnen Methoden siehe Aufgabenblatt.
 */
export class Waage {
    /*
      */
    private letztesGewicht : number;
    private vorherigeGewicht : number;
    private anzahl : number;
    private summe : number;
    

    // Ergänzen Sie hier die Felddeklarationen, add field declarations here

    constructor() {
    this.letztesGewicht = 0;
    this.vorherigeGewicht = 0;
    this.anzahl = 0;
    this.summe = 0;
    
    }

    // Implementieren Sie die hier vorgegebenen Methoden:

    getLetztesGewicht(): number {
        if(this.letztesGewicht == 0){
        throw new Error("Not implemented yet");
    }
    return this.letztesGewicht;
}

    registriere(gewicht: number): void {
    if(gewicht < 0 ){
        throw new Error("Gwichtswert darf nicht negativ sein")
    }
    if(gewicht > 999){
        throw new Error("Waagezahl darf nicht groesser als 999 sein");
    }
    if(this.letztesGewicht != 0 ){
        this.vorherigeGewicht= this.letztesGewicht;
        this.letztesGewicht = gewicht;
        this.anzahl ++;
        this.summe += gewicht;
      
    }else{
        this.letztesGewicht = gewicht;
        this.anzahl++;
         this.summe += gewicht;
    }
    }

    // Ergänzen Sie hier die fehlenden Methoden:
    getTrend() : number {
        if(this.letztesGewicht == 0){
        throw new Error("es muss erst mal Gewicht registiert!");
        }
        if(this.letztesGewicht < this.vorherigeGewicht)  
          return -1;
         if(this.letztesGewicht > this.vorherigeGewicht)
            return 1;
            return 0;
    }
    
    getMin() : number {
        if(this.letztesGewicht == 0 )
            throw new Error();
        if(this.letztesGewicht < this.vorherigeGewicht)
        return this.letztesGewicht;
        else (this.letztesGewicht > this.vorherigeGewicht)
        return this.vorherigeGewicht;
    }
    getMax() : number {
         if(this.letztesGewicht == 0 )
            throw new Error();
         if(this.letztesGewicht > this.vorherigeGewicht)
        return this.letztesGewicht;
        else (this.letztesGewicht < this.vorherigeGewicht)
        return this.vorherigeGewicht;
    }
    getAnzahl() : number {
        return this.anzahl;
    }
    getDurchschnitt() : number {
        if(this.letztesGewicht == 0){
            throw new Error("noch kein Gewicht erfasst");}
        let average = this.summe / this.anzahl;
        return average;
    }
}
    