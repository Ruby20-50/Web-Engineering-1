import { leetSpeakIter, leetSpeakSingleLetter } from "../src/leetSpeak";

test("test leetSpeakSingleLetter throws error for strings longer than 1", ()=>{
    expect(()=> leetSpeakSingleLetter("hi")).toThrow("this function receives only one character!");
})

test("test leetSpeakSingleLetter returns the same letter", ()=>{
    expect(leetSpeakSingleLetter("l")).toBe("l")
})

test("leetSpeakIter", ()=>{
    expect(leetSpeakIter("Hi")).toBe("H1");
})