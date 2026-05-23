import { leetSpeakSingleLetter } from "../src/leetSpeak";

test("test leetSpeakSingleLetter thorws error for strings longer than 1", ()=>{
    expect(()=> leetSpeakSingleLetter("hi")).toThrow("this function recieves only one character!");
})