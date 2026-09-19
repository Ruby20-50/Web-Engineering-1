//@ts-nocheck
import { access } from "fs/promises";
import { constants } from 'fs';

test.each([
    "src/leetSpeak.ts",
    "tests/leetSpeakSingleLetter.test.ts",
    "tests/leetSpeakIter.test.ts",
    "tests/leetSpeakRek.test.ts"
])('File "%s" is present', async(filename) => {
    await access(filename, constants.R_OK)
});

test("Declarations Leet Speak", async() => {
    const module = require(`../src/leetSpeak`);
    expect(module["leetSpeakSingleLetter"]).toBeInstanceOf(Function);
    expect(module["leetSpeakIter"]).toBeInstanceOf(Function);
    expect(module["leetSpeakRek"]).toBeInstanceOf(Function);
});
