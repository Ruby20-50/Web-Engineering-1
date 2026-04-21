/**
 * Bitte ändern Sie diese Datei nicht bzw. ignorieren Sie sie.
 */

declare global {
    var quizHint: [number, any, string];
}

function stringify(arg: any): string {
    if (arg===undefined) return "";
    if (arg===null) return "null";
    if (Object.is(arg, NaN)) return "NaN";
    if (arg===Infinity) return "Infinity";
    if (typeof arg === "function") return "function() {}";
    return JSON.stringify(arg);
}


expect.extend({
    answer(received: any, expected: any) {
        if (expected === '?') {
            return { pass: false, message: () => `Noch nicht beantwortet` };
        } else if (expected === 'hilfe') {
            const [op, arg, hint] = globalThis.quizHint ?? [];
            const hilfeText = hint
                ? `${hint}. Siehe Dir Funktion op${op} an. Was ist das Ergebnis, wenn man op${op}(${stringify(arg)}) aufruft?`
                : "Leider kein Hinweis verfügbar. Bitte frage in der Übung nach!";
            return { pass: false, message: () => hilfeText };
        } else if (Object.is(expected, received)) {
            return { pass: true, message: () => `${typeof received == "string" ? '"' + received + '"' : received} ist richtig.` };
        }
        return { pass: false, message: () => `${typeof expected == "string" ? '"' + expected + '"' : expected} ist falsch. Gebe "hilfe" ein, um einen Hinweis zu erhalten.` };
    }
});

declare global {
    namespace jest {
        interface Matchers<R> {
            answer(expected: any): CustomMatcherResult;
        }
    }
}

export { }