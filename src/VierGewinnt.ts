/**
 * Hilfstyp für Spielsteine
 */
export type Spieler = "X" | "O";
/**
 * Typ für leeres Feld
 */
export type Leer = " "

/**
 * Leers Feld
 */
const LEER: Leer = " ";


export class VierGewinnt {

    // Ergänzen Sie hier Felder nach Bedarf

    constructor(sizeX: number = 7, sizeY: number = 6) {
        throw new Error("Not implemented");
    }

    public get sizeX() {
        throw new Error("Not implemented");
    }
    
    public get sizeY() {
        throw new Error("Not implemented");
    }

    public set(x: number, stein: Spieler): boolean {
        throw new Error("Not implemented");
    }

    public get(x: number, y: number): Spieler | Leer {
        throw new Error("Not implemented");
    }

    public istVoll(): boolean {
        throw new Error("Not implemented");
    }

    public gewinner(): Spieler | null {
        throw new Error("Not implemented");
    }

    // Ergänzen Sie hier Hilfsmethoden nach Bedarf.


}