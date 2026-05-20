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
    private _sizeX : number;
    private _sizeY : number;
    private board : (Leer | Spieler)[][]; //this way we allow only stones or empty spaces
    private lastInput : Spieler | Leer;
   /**
    * a constructor creates a new VierGewinnt game board
    * @param sizeX is number of columns
    * @param sizeY is number of rows
    * @throws Error if sizeX or sizeY is less than 1
   */
    constructor(sizeX: number = 7, sizeY: number = 6) {
         if(sizeX < 1 || sizeY < 1)
        throw new Error("size must be at least 1");
        this._sizeX = sizeX;
        this._sizeY = sizeY;
        this.lastInput = LEER;
        this.board = [];
        for(let i = 0; i < sizeX; i++){
            this.board[i] = []
            for(let j = 0; j < sizeY; j++){
                this.board[i][j] = LEER;
            }
            
        }
}   

    public get sizeX() {
       // throw new Error("Not implemented");
        return this._sizeX;
    }
    
    public get sizeY() {

        //throw new Error("Not implemented");
        return this._sizeY;
    }
    public get _lastInput(){
        return this.lastInput;
    }

    public set(x:  number, stein: Spieler): boolean {
        if(x > this._sizeX || x < 0){
            throw Error("x is outside the game field");
        }
        if(this.lastInput === stein){
            throw Error("a Player cannot play two times in row or enter MT value!!");
        }
        
        const row = this.findTheFreeRow(x);
        if(row != -1){
            this.board[x][row] = stein; 
            this.lastInput = stein;
            return true;
        }else{
            return false;}
    }
    findTheFreeRow(x : number ) : number{
        for(let i = 0; i < this._sizeY; i++){
            let cell = this.get(x,i);
            if(cell == LEER){
                return i;
            }
        }
        return -1
    }
    public get(x: number, y: number): Spieler | Leer {
         if(x > this._sizeX || x < 0)
            throw new Error("outside the game field");
         if(y > this._sizeY|| y < 0)
            throw new Error("outside the game field");  
        let stone : Spieler | Leer = this.board[x][y]; 
        return stone;
    }

    public istVoll(): boolean {
        throw new Error("Not implemented");
    }

    public gewinner(): Spieler | null {
        throw new Error("Not implemented");
    }

    // Ergänzen Sie hier Hilfsmethoden nach Bedarf.


}