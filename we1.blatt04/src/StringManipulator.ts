import { AbstractStringManipulator } from "./AbstractStringManipulator"

export class StringManipulator extends AbstractStringManipulator {

    // Hier sind KEINE weiteren Methoden oder Felder zu ergänzen!

    override registerUnaryOperations() {
       this.addUnaryOperation("uppercase", (s) => s.toUpperCase());
       this.addUnaryOperation("trim", (s) => s.trim());
       this.addUnaryOperation("lowercase", (s) => s.toLowerCase());
    }

    override registerBinaryOperations() {
       this.addBinaryOperation("append", (txt1, txt2) => txt1 + txt2);
       this.addBinaryOperation("prepend", (txt1, txt2) => txt2 + txt1 );
    }

    override registerTernaryOperations(): void {
       this.addTernaryOperation("replace",(txt1, txt2, txt3) => {
         let index = txt1.indexOf(txt2);
         return txt1.slice(0, index) + txt3 + txt1.slice(index + txt2.length)} );
    }
    
    override registerVariadicOperations() {
       this.addVariadicOperation("concat", (...stringss) => {
         let txt = "";
         for ( const element of stringss) {
           txt += element; 
         }
         return txt});
    }
    
    // Hier sind KEINE weiteren Methoden oder Felder zu ergänzen!

}