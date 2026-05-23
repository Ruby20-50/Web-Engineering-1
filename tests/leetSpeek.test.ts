import { leetSpeakIter, leetSpeakRek, leetSpeakSingleLetter } from "../src/leetSpeak";

test("test leetSpeakSingleLetter throws error for strings longer than 1", ()=>{
    expect(()=> leetSpeakSingleLetter("hi")).toThrow("this function receives only one character!");
})

test("test leetSpeakSingleLetter returns the same letter", ()=>{
    expect(leetSpeakSingleLetter("l")).toBe("l")
})

test("leetSpeakIter", ()=>{
    expect(leetSpeakIter("Hi")).toBe("H1");
})
test("leetSpeakRek terminates", ()=>{
    expect(leetSpeakRek("")).toBe("");
});
test("leetSpeakRek convert to leet", ()=>{
    expect(leetSpeakRek("Hi")).toBe("H1");
});
test("leetSpeakRek convert more complex to leet", ()=>{
    expect(leetSpeakRek("Hello world")).toBe("H3llo world");
});
test("leetSpeakRek convert more complex to leet2", ()=>{
    expect(leetSpeakRek("BIGSIEZ")).toBe("8165132");

});
test("leetSpeakRek convert from numbers to leet2", ()=>{
    expect(leetSpeakRek("8165132")).toBe("8165132");

});