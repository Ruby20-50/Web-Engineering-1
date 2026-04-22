import { AsyncLocalStorage } from "async_hooks";

/**
 * Hinweise und Details zur Klasse und den einzelnen Methoden siehe Aufgabenblatt.
 */
export class Waage {
    /*
      */
    private letztesGewicht : number;
    
    private vorherigeGewicht : number;
    private anzahl : number;
    

    // Ergänzen Sie hier die Felddeklarationen, add field declarations here

    constructor() {
    this.letztesGewicht = 0;
    this.vorherigeGewicht = 0;
    this.anzahl = 0;
    
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
      
    }else{
        this.letztesGewicht = gewicht;
        this.anzahl++;
    }
    }

    // Ergänzen Sie hier die fehlenden Methoden:
    getTrend() : number {
        if(this.letztesGewicht == 0){
        throw new Error("es muss erst mal Gewicht registiert!");
        }
        if(this.letztesGewicht < this.vorherigeGewicht)  {
            return -1;
        }else if(this.letztesGewicht > this.vorherigeGewicht){
            return 1;
        }else if(this.letztesGewicht == this.vorherigeGewicht){
            return 0;
        }
          return this.letztesGewicht - this.vorherigeGewicht;
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
        /*how do i create a space for every recorded weight so that it is 
        calculated here?
        arrays are forbidden!
        */
        if(this.letztesGewicht = 0)
            throw new Error("noch kein Gewicht erfasst");
        
        return 1;
    }
}
    