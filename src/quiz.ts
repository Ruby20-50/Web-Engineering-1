// @ts-nocheck
/**
 * Quiz zu Ausdrücken und Operatoren (und ein bisschen zu Typen)
 * in JavaScript.
 * 
 * Als Lektüre wird empfohlen
 * - [Flan21] FLANAGAN, David: JavaScript – Das Handbuch für die Praxis. 7. Auflage. O’Reilly, 2021.
 * - [Che19] CHERNY, Boris: Programmieren in TypeScript. O’Reilly, 2019
 * 
 * Auf einzelne Unterkapitel wird in Kommentaren verwiesen.
 * 
 * Die Aufrufe zur Funktion `hilfe` dienen nur der Hilfeausgabe in den Tests.
 * Sie können im weiteren ignoriert werden, wobei die Hinweise, die als Argumente
 * übergeben werden, hier sehr hilfreich sind.
 */



function op0(x: any) {
    hilfe(0, x, "Lese [Flan21] Kap. 4.8.1, evtl. auch [Flan21] Kap. 3.3.2 Escape-Sequenzen in String-Literalen");
    return "Hello " + x;
}
export function q0_1() { return op0("Earth"); }
export function q0_2() { return op0('\x42\x65\x72\x6c\x69\x6E'); }


function op1(x: any) {
    hilfe(1, x, "Welche Operatoren erkennst Du? Lese [Flan21] Kap. 4.13.1")
    return typeof x !== "string" ? x - 2 : x.length * 11;
}
export function q1_1() { return op1("Greetings"); }
export function q1_2() { return op1(21); }
export function q1_3() { return op1(null); }


function op2(x?: string) {
    hilfe(2, x, "Vergleiche diese Funktion mit op3. Lese [Flan21] Kap. 4.10.2 sowie [Che19] S. 49");
    return x ?? "default"
}
export function q2_1() { return op2("Hey!"); }
export function q2_2() { return op2(""); }
export function q2_3() { return op2(); }


function op3(x?: string) {
    hilfe(3, x, "Vergleiche diese Funktion mit op2. Lese [Flan21] Kap. 4.13.2 (sowie [Che19] S. 49)");
    return x || "default"
}
export function q3_1() { return op3("Hey!"); }
export function q3_2() { return op3(""); }
export function q3_3() { return op3(); }


function op4(x?: string) {
    hilfe(4, x, "Vergleiche diese Funktion mit op5.");
    if (x) {
        return x.substring(8)
    } else {
        return "nix";
    }
}
export function q4_1() { return op4("blumentopferde"); }
export function q4_2() { return op4(); }


function op5(x?: string) {
    hilfe(5, x, "Vergleiche den Property-Zugriff in op5 mit dem in op6. Was fällt Dir auf? Lese [Flan21] Kap. 4.4.1");
    return x?.substring(8);
}
export function q5_1() { return op5("blumentopferde"); }
export function q5_2() { return op5(); }


function op6(x: any) {
    hilfe(6, x, "Lese [Flan21] Kap. 4.13.3");
    return typeof x;
}
export function q6_1() { return op6(21); }
export function q6_2() { return op6("Greetings"); }
export function q6_3() { return op6({}); }
export function q6_4() { return op6([]); }
export function q6_5() { return op6(NaN); }
export function q6_6() { return op6(() => { }); }
export function q6_7() { return op6(null); }


function op7(x: any) {
    hilfe(7, x, "Vgl. mit op8. Welchen Operator erkennst Du? Lese [Flan21] Kap. 4.10.1");
    return 127 && x
}
export function q7_1() { return op7(0); }
export function q7_2() { return op7(74); }
export function q7_3() { return op7("74"); }
export function q7_4() { return op7(""); }


function op8(x: any) {
    hilfe(8, x, "Vgl. mit op7. Welchen Operator erkennst Du? Lese [Flan21] Kap. 4.8.3");
    return x & 127
}
export function q8_1() { return op8(0); }
export function q8_2() { return op8(74); }
export function q8_3() { return op8("74"); }
export function q8_4() { return op8(""); }


function op9(x: any) {
    hilfe(9, x, "Lese [Flan21] Kap. 4.9.1, für q9_4 [Flan21] Kap. 3.2.3 (speziell S. 32)");
    return x === x;
}
export function q9_1() { return op9(21); }
export function q9_2() { return op9(null); }
export function q9_3() { return op9(Infinity); }
export function q9_4() { return op9(NaN); }




// Bitte ignoriere den folgenden Code. Er dient nur der Hilfeausgabe.
declare global {
    var quizHint: [number, any, string];
}
/** 
 * Aufrufe zu dieser Funktion sind nur für die Hilfeausgabe. Sie können im weiteren ignoriert werden, wobei die
 * Hinweise, die als Argumente übergeben werden, hier sehr hilfreich sind.
 */
function hilfe(op: number, arg: any, hint: string) {
    return globalThis.quizHint = [op, arg, hint];
}

