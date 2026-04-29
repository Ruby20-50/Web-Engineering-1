export class Conversions {
    static toNumber(x: any): number {
        if(x === null) throw new Error("value can't be undefined");
        return Number(x)
        
    }
    static toBoolean(x: any): boolean {
          if(x === null) throw new Error("value can't be undefined");
        if(x === "false") return false;
        return Boolean([])
    }
    static toString(x: any): string {
          if(x === null) throw new Error("value can't be undefined");
        return String(x);
    }
}