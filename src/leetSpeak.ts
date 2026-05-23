

/**
 * 
 * @param letter must have only one character
 */
export function leetSpeakSingleLetter(letter : String) : String{
    if(letter.length > 1 )
        throw new Error("this function recieves only one character! ")
    return letter;
}