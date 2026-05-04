import { StringManipulator } from "../src/StringManipulator";

test('Hallo', () => {
    const testee = new StringManipulator();
    expect(testee.eval('"Hallo"')).toBe("Hallo");
});

test('uppercase("x")', ()=>{
    const testee = new StringManipulator();
    expect(testee.eval('uppercase("x")')).toBe("X");
});

test('replace(concat(uppercase("Hallo"), " ", trim(" Welt ")), "Welt", "Erde")', ()=>{
    const testee = new StringManipulator();
    expect(testee.eval('replace(concat(uppercase("Hallo"), " ", trim(" Welt ")), "Welt", "Erde")')).toBe("HALLO Erde");
});

//////////////////////////////////////////
// Ergänzen Sie hier Ihre eigenen Tests:
