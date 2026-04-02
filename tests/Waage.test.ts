import { Waage } from "../src/Waage"

test("Konstruktor", () => {
    const testee = new Waage();
    expect(testee).toBeDefined();
})

test("getLetztesGewicht direkt nach Konstruktion", () => {
    const testee = new Waage();
    expect(() => testee.getLetztesGewicht()).toThrow();
})

test("registriere, erfolgreich", () => {
    const testee = new Waage();
    testee.registriere(1); // soll so funktionieren, also keinen Fehler werfen
})

test("registriere, Waagezahl darf nicht kleiner 0 sein", () => {
    const testee = new Waage();
    expect(() => testee.registriere(-1)).toThrow();
})

test("registriere, Waagezahl darf nicht größer als 999 sein", () => {
    const testee = new Waage();
    expect(() => testee.registriere(1000)).toThrow();
})

test("registriere und getLetztesGewicht sind konsistent", () => {
    const testee = new Waage();
    testee.registriere(1); // soll so funktionieren, also keinen Fehler werfen
    expect(testee.getLetztesGewicht()).toBe(1);
    testee.registriere(2); // soll so funktionieren, also keinen Fehler werfen  
    expect(testee.getLetztesGewicht()).toBe(2);
})

/* 
Template für eigene Tests

test("name", ()=>{

})
*/