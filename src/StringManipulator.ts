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
        // Fügen Sie hier die ternären Operationen hinzu
    }
    
    override registerVariadicOperations() {
        // Fügen Sie hier die variadischen Operationen hinzu
    }
    
    // Hier sind KEINE weiteren Methoden oder Felder zu ergänzen!

}