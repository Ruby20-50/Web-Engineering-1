/* istanbul ignore file */
/*
 * ****************************************************************************
 * Beachte: Diese Datei sollte nicht bearbeitet werden!
 * ****************************************************************************
 */

class Operation {
    constructor(public operandenCount: number, public op: (...operanden: string[]) => string) { }
}

type TokenType = "string" | "opname" | "comma" | "openBrace" | "closeBrace" | "endOfExpression";

class Token {
    constructor(public type: TokenType, public value: string) {}

    toString() {
        return `${this.value} (${this.type})`;
    }
}

const EOE = new Token("endOfExpression", "");

/**
 * Erweiterbarer Stringmanipulator im Funktionsstil. Alle Operatoren müssen
 * aus Kleinbuchstaben bestehen, die Operatoren folgen in Klammern mit Komma
 * getrennt.
 * 
 * Operationen können über addOperation hinzugefügt werden.
 */
export abstract class AbstractStringManipulator {

    private operations: Map<string, Operation>;

    constructor() {
        this.operations = new Map();

        this.registerUnaryOperations();
        const unaryOpsSize = this.operations.size;
        this.registerBinaryOperations();
        const binaryOpsSize = this.operations.size - unaryOpsSize;
        this.registerTernaryOperations();
        const ternaryOpsSize = this.operations.size - binaryOpsSize - unaryOpsSize;
        this.registerVariadicOperations();
        const variadicOpsSize = this.operations.size - unaryOpsSize - binaryOpsSize - ternaryOpsSize;

        if (Array.from(this.operations.values()).filter(op => op.operandenCount == 1).length != unaryOpsSize) {
            throw new Error("Unary operations must be registered only in registerUnaryOperations");
        }
        if (Array.from(this.operations.values()).filter(op => op.operandenCount == 2).length != binaryOpsSize) {
            throw new Error("Binary operations must be registered only in registerBinaryOperations");
        }
        if (Array.from(this.operations.values()).filter(op => op.operandenCount == 3).length != ternaryOpsSize) {
            throw new Error("Ternary operations must be registered only in registerTernaryOperations");
        }
        if (Array.from(this.operations.values()).filter(op => op.operandenCount == -1).length != variadicOpsSize) {
            throw new Error("Variadic operations must be registered only in registerVariadicOperations");
        }
    }

    abstract registerUnaryOperations(): void
    abstract registerBinaryOperations(): void;
    abstract registerTernaryOperations(): void;
    abstract registerVariadicOperations(): void

    /**
     * Fügt eine neue Operation hinzu. Die Funktion `operation` wird mit den Operanden aufgerufen,
     * die in der Eingabe angegeben wurden (also die in der Klammer nach der Operation stehen).
     * Diese Methode ist privat, da sie nur intern verwendet wird. Bitte verwenden Sie stattdessen
     * die Methoden addUnaryOperation, addBinaryOperation und addVariadicOperation.
     */
    private addOperation(name: string, operandenCount: number, op: (...operanden: string[]) => string) {
        this.operations.set(name, new Operation(operandenCount, op));
    }

    /**
     * Fügt eine neue unäre Operation hinzu. 
     * Die Funktion `operation` wird mit einem Operanden aufgerufen,
     * der in der Eingabe angegeben wurden (also der, als einziger Operand,
     * in der Klammer nach der Operation stehen).
     */
    addUnaryOperation(name: string, operation: (operand: string) => string) {
        this.addOperation(name, 1, operation);
    }

    /**
     * Fügt eine neue binäre Operation hinzu. 
     * Die Funktion `operation` wird mit zwei Operanden aufgerufen,
     * die in der Eingabe angegeben wurden.
     */
    addBinaryOperation(name: string, operation: (operand1: string, operand2: string) => string) {
        this.addOperation(name, 2, operation);
    }

    /**
     * Fügt eine neue ternäre Operation hinzu. 
     * Die Funktion `operation` wird mit drei Operanden aufgerufen,
     * die in der Eingabe angegeben wurden.
     */
    addTernaryOperation(name: string, operation: (operand1: string, operand2: string, operand3: string) => string) {
        this.addOperation(name, 3, operation);
    }

    /**
     * Fügt eine neue variadische Operation hinzu.
     * Eine variadische Operation ist eine Operation, die beliebig
     * viele Operanden verarbeiten kann hinzu. 
     * Die Funktion `operation` wird mit null oder mehr Operanden aufgerufen,
     * die in der Eingabe angegeben wurden.
     */
    addVariadicOperation(name: string, operation: (...operands: string[]) => string) {
        this.addOperation(name, -1, operation);
    }

    /**
     * Wertet den gegebenen Ausdruck aus.
     */
    eval(expression: string): string {

        let pos = 0;

        const isQuote = (c: string) => c == '"';
        const isLetter = (c: string) => c >= 'a' && c <= 'z';

        // Im Compilerbau wäre dies der Lexer oder Scanner
        const nextToken = () => {
            while (pos < expression.length && expression[pos] == " ") pos++;
            if (pos >= expression.length) {
                return EOE;
            }

            if (isQuote(expression[pos])) {
                let value = "";
                pos++;
                while (pos < expression.length && !isQuote(expression[pos])) {
                    value += expression[pos];
                    pos++;
                }
                if (pos >= expression.length) {
                    throw new Error(`Error at ${pos}, string not closed`);
                }
                pos++;
                return new Token("string", value);
            }
            if (isLetter(expression[pos])) {
                let token = "";
                do {
                    token += expression[pos];
                    pos++;
                } while (pos < expression.length && isLetter(expression[pos]))
                return new Token("opname", token);
            }
            switch (expression[pos]) {
                case ",":
                    pos++;
                    return new Token("comma", ",");
                case "(":
                    pos++;
                    return new Token("openBrace", "(");
                case ")":
                    pos++;
                    return new Token("closeBrace", ")");
            }
            throw new Error("Error at " + pos + ", '" + expression[pos] + "' not recognized.");
        }

        // Im Compilerbau wäre dies der eigentliche Parser
        const evalToken = (token: Token) => {
            if (token.type === "string") {
                return token.value;
            }
            
            if (token.type !== "opname") {
                throw new Error(`Error at ${pos}, operand expected, was '${token}'.`);
            }

            const opName = token.value;

            const operation = this.operations.get(opName);
            if (!operation) {
                throw new Error(`Error at ${pos}, operation '${opName}' not found.`);
            }
            if (nextToken().type !== "openBrace") {
                throw new Error(`Error at ${pos}, expect '(', was ${token}`);
            }

            const operands: string[] = [];
            do {
                token = nextToken();
                if (token.type === "string" || token.type === "opname") {
                    operands.push(evalToken(token));
                    token = nextToken();
                } else if (token.type !== "closeBrace") {
                    throw new Error(`Error at ${pos}, expect operand or ')', was '${token}'`);
                }

                if (token.type !== "closeBrace" && token.type!=="comma") {
                    throw new Error(`Error at ${pos}, expect ')' or ',', was '${token}'`);
                }

            } while (token.type==="comma")

            const operandenCount = operands.length;
            if (operation.operandenCount >= 0 && operandenCount != operation.operandenCount) {
                throw new Error(`Error at ${pos}, operation '${opName}' expects ${operation.operandenCount} operands, was ${operandenCount}.`);
            }

            return operation.op(...operands);
        }

        const result = evalToken(nextToken());
        while (pos < expression.length && expression[pos] == " ") pos++;
        if (pos < expression.length) {
            throw new Error(`Error at ${pos}, superfluous characters found`);
        }
        return result;
    }

}