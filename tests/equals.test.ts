test("== mit String 42 und Zahl 42", () => {
    //ts-ignore
    expect( "42" == 42).toBeTruthy();
})
test("-0 und 0 vergleichen", () =>{
    expect(-0 == 0).toBeTruthy();
})
test(" == with false and 0", () =>{
     //ts-ignore
    expect(false == 0).toBeTruthy();
})
test("== with {} and []", () =>{
    //ts-ignore
   expect({} === []).not.toBeTruthy()
})
test("toEqual with {} and []", () => {
    expect({}).not.toEqual([]);
})
test(" toEqual with 1 String and true ", () =>{
    expect("1").not.toStrictEqual(true)
})
test(" toEqual with 1 String and true ", () =>{
    expect("1").not.toEqual(true)
})
test("== with 0 string and false", ()=>{
     //ts-ignore
    expect(0 == false).toBeTruthy();
})
test("notToBe", () => {
    expect("to be or ").not.toBe("that is the question :P");
} )
test("test NaN with toEqual", () =>{
    expect(NaN).toEqual(NaN);
})
test("test NaN with toStrictEqual", () =>{
    expect(NaN).toStrictEqual(NaN);// i dont know why it is right I tried first not.toStrictEqual()
})
test("string toStrictEqual string", ()=>{
    expect("Halo").toStrictEqual("Halo")// it had to be false :D
})
test("=== 0 with false",() =>{
     //ts-ignore
   expect(0 === false).toBeFalsy()
})
