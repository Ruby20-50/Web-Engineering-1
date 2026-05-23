
export function parseCSV(txt : string) : string[][] {
    const arrays = txt.split("\n").map(x => x.split(","))
    return arrays;


    //what are we going to do
    // the user is going to input something like "a,b\nc,d"
    // and the programm is going to send back something like [ ["a", "b"], ["c", "d"] ] 
    // a \n seperate two arrays
    // a , seperate two array-elements --> split(",")
    
}