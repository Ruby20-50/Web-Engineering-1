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
// test object.is
test("NaN is NaN", () =>{
    expect(Object.is(NaN, NaN)).toEqual(true)
})
// toNumber tests
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
// to boolean tests
test("undefined toEqual false", ()=>{
    expect(Conversions.toBoolean(undefined)).toEqual(false);
})

test("undefined with toBoolean toStrictEqual false", ()=>{
    expect(Conversions.toBoolean(undefined)).toStrictEqual(false);
})
test("empty string with toboolean toEqual false", ()=>{
    expect(Conversions.toBoolean("")).toEqual(false);
})
test("empty string with toboolean toStrictEqual false", ()=>{
    expect(Conversions.toBoolean("")).toStrictEqual(false);
})
test(" numberic string with toboolean toStrictEqual true", ()=>{
    expect(Conversions.toBoolean("43.2")).toStrictEqual(true);
})
test(" numberic string with toboolean toEqual true", ()=>{
    expect(Conversions.toBoolean("43.2")).toEqual(true);
})
test(" numberic wordly string with toboolean toEqual true", ()=>{
    expect(Conversions.toBoolean("fourty three point two")).toEqual(true);
})
test(" numberic wordly string with toboolean toStrictEqual true", ()=>{
    expect(Conversions.toBoolean("fourty three point two")).toStrictEqual(true);
})
test(" NaN with toboolean toEqual false", ()=>{
    expect(Conversions.toBoolean(NaN)).toEqual(false);
})
test("[] with toBoolean toBeTruthy", ()=>{
    expect(Conversions.toBoolean([])).toBeTruthy()
})
test("an object with toBoolean toBeTruthy", ()=>{
     expect(Conversions.toBoolean({})).toBeTruthy()
})
