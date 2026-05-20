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
    
    public get(x: number, y: number): Spieler | Leer {
         if(x > this._sizeX || x < 0)
            throw new Error("outside the game field");
         if(y > this._sizeY|| y < 0)
            throw new Error("outside the game field");  
        let stone : Spieler | Leer = this.board[x][y]; 
        return stone;
    }

    public istVoll(): boolean {
        return this.board.toString().includes(" ");  
    }

    public gewinner(): Spieler | null {
        if(this.rowWinner() != null)
            return this.rowWinner();
        else if(this.colWinner() != null)
            return this.colWinner();
        else if(this.rDiagonalWinner()!=null)
            return this.rDiagonalWinner();
        else
            return this.lDiagonalWinner();
    }
    rowWinner(): Spieler | null{
        let counter = 1;
      
        for(let y = 0; y < this._sizeY-1; y++){
            for(let x = 0; x < this._sizeX-1; x++){
           let Wstone = this.get(x,y);
            if( Wstone !== LEER && Wstone === this.get(x+1,y)){
                counter++;
                if(counter == 4)
                    return Wstone;
                }
            else{
                counter = 1;
        }
    }}
    return null;
    }
    colWinner(): Spieler | null{
        let counter = 1;
        
            for(let x = 0; x < this._sizeX-1; x++){
                for(let y = 0; y < this._sizeY-1; y++){
           let Wstone = this.get(x,y);
            if( Wstone !== LEER && Wstone === this.get(x,y+1)){
                counter++;
                if(counter == 4)
                    return Wstone;
                }
            else{
                counter = 1;
        }
    }}
    return null;
    }   
    rDiagonalWinner(): Spieler | null {

    let counter = 1;
    for(let x = 0; x < this._sizeX ; x++){
         for(let y = 0; y < this._sizeY; y++ ){
            let Wstone = this.get(x,y);
            if(Wstone !== LEER){
                for(let step = 1; step < this._sizeY ; step++){
                    if(this.get(x + step, y + step ) == Wstone){
                        counter++;
                         if(counter == 4)
                    return Wstone;
                    }else{
                      counter = 1;
                    }
                }
            }
        }
    }
        return null;
    }
    lDiagonalWinner(): Spieler | null {
   
    let counter = 1;
   
    for(let x = 0; x < this._sizeX ; x++){
         for(let y = this._sizeY; y > 0; y-- ){
            let Wstone = this.get(x,y);
            if(Wstone !== LEER){
                for(let step = 1; step < this._sizeY; step++){
                    if(this.get(x + step, y - step ) == Wstone){
                        counter++;
                         if(counter == 4)
                    return Wstone;
                    }else{
                      counter = 1;
                    }
                }
            }
        }
    }
        return null;
    }
    public get _lastInput(){
        return this.lastInput;
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
}