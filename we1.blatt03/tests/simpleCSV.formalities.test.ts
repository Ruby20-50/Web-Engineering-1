//@ts-nocheck
import { access } from "fs/promises";
import { constants } from 'fs';

test.each([
    "src/simpleCSV.ts",
])('File "%s" is present', async(filename) => {
    await access(filename, constants.R_OK)
});

test("Declaration SimpleCSV", async() => {
    const module = require(`../src/simpleCSV`);
    expect(module["parseCSV"]).toBeInstanceOf(Function);
});
