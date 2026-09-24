import sax from "sax";

/**
 * Zählt die Elemente im übergebenen XML-Dokument.
 * 
 * @param xmlAsString XML-Dokument
 * @param elementName optional, falls angegeben, werden nur Elemente dieses Namens gezählt
 * @returns die Anzahl der Elemente
 */
export function countElements(xmlAsString: string, elementName?: string) {
    const parser = sax.parser(true);
    let count = 0;
    parser.ontext = (t) => { }
    parser.onopentag = (tag) => {
    if(!elementName || tag.name == elementName)
        count++;
    }
    parser.onattribute = (attr) => { }
   
    
    

    parser.write(xmlAsString).close();
    return count;
}

/**
 * Zählt die Attribute (aller Elemente) im übergebenen XML-Dokument.
 * 
 * @param xmlAsString XML-Dokument
 * @param elementName optional, falls angegeben, werden Attribute von Elementen dieses Namens gezählt
 * @returns die Anzahl der Attribute
 */
export function countAttributes(xmlAsString: string, elementName?: string) {
    const parser = sax.parser(true);
    let count = 0;

    parser.onopentag = (tag) => {
        if(!elementName || tag.name == elementName){
            count += Object.keys(tag.attributes).length;
        }
    }

    parser.write(xmlAsString).close();
    return count;
}

/**
 * Zählt die gesamte Textlänge (der Text-Bestandteile) im übergebenen XML-Dokument.
 * 
 * @param xmlAsString XML-Dokument
 * @param elementName optional, falls angegeben, wird nur Text innerhalb
 *          von Elementen dieses Namens sowie deren Kinderelementen gezählt
 * @returns die Textlänge
 */
export function countTextLength(xmlAsString: string, elementName?: string) {
    const parser = sax.parser(true);
    let length = 0;


   parser.ontext = (t)=>{
    if(!elementName)
        length += t.length;
   }

    parser.write(xmlAsString).close();
    return length;
}

