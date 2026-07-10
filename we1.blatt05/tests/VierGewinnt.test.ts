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
test("test set throw bound error", ()=>{
    const game = new VierGewinnt();
    expect(()=>game.set(8,"X")).toThrow("x is outside the game field");
})
test("test set to throw stone error", ()=>{
const game = new VierGewinnt();
game.set(3,"X");
expect(()=> game.set(3,"X")).toThrow("a Player cannot play two times in row or enter MT value!!")
})
test("test findtheFreeRow returns LEER value", ()=>{
// now what do we need to do here?
//  we call findTheFreeRow and make sure that it has the LEER value
// but we don't have getboard function! but we can use get ;)
const game = new VierGewinnt();
expect(game.get(3,game.findTheFreeRow(3))).toBe(" "); 
})
test("test get to throw bound error on y axes", ()=>{
    const game = new VierGewinnt();
    expect(()=>game.get(3,9)).toThrow("outside the game field")
})
test("test get throws a bound error on x axes", ()=>{
    const game = new VierGewinnt();
    expect(()=>game.get(-1,4)).toThrow("outside the game field");
})
test("test get returns X as stone value", ()=>{
    const game = new VierGewinnt();
    game.set(4,"X");
    expect(game.get(4,0)).toBe("X");
})
test("test get returns O as stone value", ()=>{
    const game = new VierGewinnt();
    game.set(4,"O");
    expect(game.get(4,0)).toBe("O");
})
test("test get returns the LEER stone value", ()=>{
    const game = new VierGewinnt();
    expect(game.get(4,0)).toBe(" ");
})
test("test set places the stone in the right position", ()=>{
    const game = new VierGewinnt();
    game.set(2,"O");
    expect(game.get(2,0)).toBe("O");
})
test("test that lastInput take the value of the last turn", ()=>{
    const game = new VierGewinnt();
    game.set(6,"O");
    game.set(2,"X");
    game.set(3,"O");
    expect(game._lastInput).toBe("O");
})
test("test rowWinner", ()=>{
    const game = new VierGewinnt();
    game.set(0,"X");
    game.set(0,"O");
    game.set(1,"X");
    game.set(1,"O");
    game.set(2,"X");
    game.set(2,"O");
    game.set(3,"X");
    expect(game.rowWinner()).toBe("X");

})
test("test cowWinner", ()=>{
    const game = new VierGewinnt();
    game.set(0,"X"); game.set(1,"O");
    game.set(0,"X"); game.set(1,"O");
    game.set(0,"X"); game.set(1,"O");
    game.set(0,"X");
    expect(game.colWinner()).toBe("X");

})
test("test rdiagonalWinner", ()=>{
    const game = new VierGewinnt();
    game.set(0,"X"); game.set(1,"O");
    game.set(1,"X"); game.set(2,"O");
    game.set(2,"X"); game.set(3,"O");
    game.set(2,"X"); game.set(3,"O");
    game.set(3,"X"); game.set(4,"O");
    game.set(3,"X");
    expect(game.rDiagonalWinner()).toBe("X");

})
test("test ldiagonalWinner", ()=>{
    const game = new VierGewinnt();
    game.set(3,"X"); game.set(2,"O");
    game.set(2,"X"); game.set(1,"O");
    game.set(0,"X"); game.set(1,"O");
    game.set(1,"X"); game.set(0,"O");
    game.set(0,"X"); game.set(4,"O");
    game.set(0,"X");
    expect(game.lDiagonalWinner()).toBe("X");

})