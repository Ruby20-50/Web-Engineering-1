/**
 * In den hier definierten Tests wird geprüft, ob alle Dateien und Deklarationen
 * (Klassen, Methoden, Funktionen) gefunden werden.
 * 
 * Achtung: In dieser Datei wird ziemlich in die JavaScript- und Jest-Trickkiste
 * gegriffen. Schauen Sie sich am besten nur die Ergebnisse an.
 */
import { access } from "fs/promises";
import { constants } from 'fs';

describe.each([
    {
        fileName: "src/Waage.ts",
        classes: [{
            name: "Waage",
            methods: [
                "getLetztesGewicht",
                "registriere",
                "getTrend",
                "getMin",
                "getMax",
                "getAnzahl",
                "getDurchschnitt"
            ]
        }],
        functions: []
    },
    {
        fileName: "tests/Waage.test.ts",
        classes: [],
        functions: []
    }
])("Datei $fileName existiert mit korrekten Deklarationen", ({ fileName, classes, functions }) => {


    test("Datei existiert", async () => {
        await access(fileName, constants.R_OK);
    });

    (classes.length > 0 || functions.length > 0) && describe(`Deklarationen in ${fileName}`, () => {
        let module: any
        beforeAll(async () => {
            module = require(`../${fileName}`);
        });

        classes.length > 0 && describe.each(classes)("Klasse $name", ({ name, methods }) => {

            test(`Klassen ${name} ist definiert und wird exportiert`, () => {
                const fct = module[name];
                // Note: classes are also functions
                expect(fct).toBeInstanceOf(Function); // falls hier Fehler, dass wurde die Klasse nicht gefunden 
            })

            methods.length > 0 &&
                test.each(methods)("Methode %s gefunden", (methodName) => {
                    const instanceProto = module[name].prototype;
                    const method = instanceProto[methodName]
                    expect(method).toBeInstanceOf(Function); // falls hier Fehler, dann wurde die Methode nicht gefunden
                })
        });

        functions.length > 0 && test.each(functions)("Funktion %s ist definiert und wird exportiert", (name) => {
            const fct = module[name];
            // Note: classes are also functions
            expect(fct).toBeInstanceOf(Function); // falls hier Fehler, dann wurde die Funktion nicht gefunden
        })

    });

});
