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
    private sizeX : number;
    private sizeY : number;
    private board : (Leer | Spieler)[][]; //this way we allow only stones or empty spaces

   /**
    * a constructor creates a new VierGewinnt game board
    * @param sizeX is number of columns
    * @param sizeY is number of rows
    * @throws Error if sizeX or sizeY is less than 1
   */
    constructor(sizeX: number = 7, sizeY: number = 6) {
         if(sizeX < 1 || sizeY < 1)
        throw new Error("size must be at least 1");
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.board = [];
        for(let i = 0; i < sizeX; i++){
            for(let j = 0; j < sizeY; j++){
                this.board[i][j] = LEER;
            }
            
        }
}   

    public get sizeX() {
       // throw new Error("Not implemented");
        return this.sizeX;
    }
    
    public get sizeY() {

        //throw new Error("Not implemented");
        return this.sizeY;
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