import { Waage } from "../src/Waage"

test("Konstruktor", () => {
    const testee = new Waage();
    expect(testee).toBeDefined();
})

test("getLetztesGewicht direkt nach Konstruktion", () => {
    const testee = new Waage();
    expect(() => testee.getLetztesGewicht()).toThrow();
});
test("getLetztesGewicht nach regestierung", ()=>{
    const scale = new Waage();
    scale.registriere(60);
    expect(scale.getLetztesGewicht()).toBe(60);
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
test("getTrend zunehmend",()=>{
    const scale = new Waage();
    scale.registriere(50);
    scale.registriere(55);
    expect( scale.getTrend()).toBe(1);
} );
test("getTrend abnehmend", ()=>{
    const scale = new Waage();
    scale.registriere(55);
    scale.registriere(50);
    expect(scale.getTrend()).toBe(-1);
});
test("getTrend gleichbleibend", ()=>{
    const scale = new Waage();
    scale.registriere(55);
    scale.registriere(55);
    expect(scale.getTrend()).toBe(0);
});
test("getTrend", ()=>{
    const scale = new Waage();
    expect(()=>scale.getTrend()).toThrow();

});
test("getMin test", ()=>{
    const scale = new Waage();
    scale.registriere(60);
    scale.registriere(50);
    scale.registriere(55);
    expect(scale.getMin()).toBe(50);
});
test("getMin throws an error when letzteGewicht is not assigned yet", ()=>{
const scale = new Waage();
 expect(()=> scale.getMin()).toThrow();
});
test("getMax test", ()=>{
    const scale = new Waage();
    scale.registriere(70);
    scale.registriere(50);
    scale.registriere(60);
    expect(scale.getMax()).toBe(60);
});
test("getMax throws an error when letzteGewicht is not assigned yet", ()=>{
const scale = new Waage();
 expect(()=> scale.getMax()).toThrow();
});
test("getAnzahl test", ()=>{
    const scale = new Waage();
    scale.registriere(80);
    expect(scale.getAnzahl()).toBe(1);});

    test("getDurchschnitt test", ()=>{
        const scale = new Waage();
        scale.registriere(54);
        scale.registriere(60);
        scale.registriere(57);
        scale.registriere(56);
        expect(scale.getDurchschnitt()).toBeCloseTo(56.75);
    });
    test("getDurchschnitt throws an Error", ()=>{
        const scale = new Waage();
        expect(()=> scale.getDurchschnitt()).toThrow();
    });

