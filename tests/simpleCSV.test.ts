import { parseCSV } from "../src/simpleCSV";

test("splits on ,", ()=>{
    expect(parseCSV("a,b,c")).toEqual([["a","b","c"]]);
})

test("splits on \n", ()=>{
    expect(parseCSV("a\nc")).toEqual([["a",],["c",]]);
})

test("splits on , and \n", ()=>{
    expect(parseCSV("a,b,c\ne,f,g")).toEqual([["a","b","c"],["e","f","g"]]);
})