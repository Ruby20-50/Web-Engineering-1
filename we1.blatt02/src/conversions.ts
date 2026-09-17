export class Conversions {
    static toNumber(x: any): number {
        if(x === null) throw new Error("value can't be null");
        return Number(x)
        
    }
    static toBoolean(x: any): boolean {
          if(x === null) throw new Error("value can't be null");
        if(x === "false") return false;
        return Boolean(x)
    }
    static toString(x: any): string {
          if(x === null) throw new Error("value can't be null");
        return String(x);
    }
}