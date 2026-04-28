import {Conversions} from "../src/conversions"

test("TestToNumber",() =>{
expect(() =>Conversions.toNumber("3")).toThrow();
})
test("testToBoolean", () => {
    expect(() => Conversions.toBoolean("true")).toThrow();
})
test("testToString", () => {
    expect(() => Conversions.toString(43)).toThrow();
})
