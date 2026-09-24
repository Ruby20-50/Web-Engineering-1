import { countElements, countTextLength } from '../src/XMLAnalyzer';

test('countElements', () => {
    expect(countElements(`
        <some>
            <sub>
                <hr/>
            </sub>
        </some>
    `)).toEqual(3);
});


test('countTestLength', () => {
    expect(countTextLength("<a><b>Hallo</b>Welt</a>")).toEqual(9);
});
