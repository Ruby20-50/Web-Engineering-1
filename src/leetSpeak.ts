

/**
 * 
 * @param letter must have only one character
 */
export function leetSpeakSingleLetter(letter : string) : string{
    if(letter.length > 1 )
        throw new Error("this function receives only one character! ")
    if(letter === 'a' || letter === 'A')
        return '4';
    if(letter === 'e' || letter === 'E')
        return '3';
    if(letter === 'i' || letter === 'I')
        return '1';
    if(letter === 'b' || letter === 'B')
        return '8';
    if(letter === 'g' || letter === 'G')
        return '6';
    if(letter === 'S' || letter === 's')
        return '5';
    if(letter === 'z' || letter === 'Z')
        return '2';
    else
        return letter;
}

export function leetSpeakIter(input : string) : string{
    //throw new Error();
    if(input === " " || input ==="")
        return input;
    let leet : string="";
    for(let i = 0; i < input.length; i++){
        leet = leet.concat(leetSpeakSingleLetter(input[i]));
        console.log(leet);
    }
    return leet;
    
} 
export function leetSpeakRek(text : string): string{
    let i = 0;
    if(i == text.length)
        return text;
    let converted = "";
     converted + leetSpeakSingleLetter(text[i]);
    return converted + text.slice(i);

//  what are we going to do here?
//  we are going to input a text as a prameter 
// and every take the first character and filter it through leetSpeakSingleLetter
// until
}
