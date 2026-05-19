import { VierGewinnt } from "../src/VierGewinnt";

test("test sizeX", ()=>{
    const testee = new VierGewinnt();
    expect(testee.sizeX).toBe(7);
})
test("test sizeY", ()=>{
    const testee = new VierGewinnt();
    expect(testee.sizeY).toBe(6);
})
test("test sizeX", ()=>{
    const testee = new VierGewinnt(10,12);
    expect(testee.sizeX).toBe(10);
})
test("test sizeY", ()=>{
    const testee = new VierGewinnt(10,12);
    expect(testee.sizeY).toBe(12);
})
