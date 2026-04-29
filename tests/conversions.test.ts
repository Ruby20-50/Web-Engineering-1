import {Conversions} from "../src/conversions"

test("TestToNumber",() =>{
expect(() =>Conversions.toNumber(null)).toThrow();
})
test("testToBoolean", () => {
    expect(() => Conversions.toBoolean(null)).toThrow();
})
test("testToString", () => {
    expect(() => Conversions.toString(null)).toThrow();
})
test("1 string toNumber output = 1 number", () => {
    expect(Conversions.toNumber("1")).toEqual(1);
})
test("NaN is NaN", () =>{
    expect(Object.is(NaN, NaN)).toEqual(true)
})
test("Object.is with toNumber", () => {
    expect(Object.is(Conversions.toNumber("0"),0)).toBeTruthy();
})
test("Object.is from float toNumber ", () => {
    expect(Object.is(Conversions.toNumber("3.2"),3.2)).toBeTruthy();
})
test("false and 0 in toNumber with Object.is", () =>{
    expect(Object.is(Conversions.toNumber(false), 0)).toBeTruthy()
})
test("[] toNumber is 0", ()=>{
    expect(Object.is(Conversions.toNumber([]),0)).toBeTruthy()
})
test("['a'] toNumber is Nan", ()=>{
    expect(Object.is(Conversions.toNumber(['b']),NaN)).toBeTruthy()
})
test("{} toNumber is not 0", ()=>{
    expect(Object.is(Conversions.toNumber({}),0)).toBeFalsy()
})
test("one in String toNumber is NaN", ()=>{
    expect(Object.is(Conversions.toNumber("one"),NaN)).toBeTruthy()
})
test("undefined toNumber is 0", ()=>{
    expect(Conversions.toNumber(undefined)).not.toEqual(0)
})

