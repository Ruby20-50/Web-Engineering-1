import { FriendA } from "./friends/FriendA";
import { FriendC } from "./friends/FriendC";
import { FriendP } from "./friends/FriendP";
import { FriendS } from "./friends/FriendS";

/**
 * Schickt die Freundin Pizza holen.
 * Diese Funktion verwendet die synchrone Variante {@link FriendS},
 * sprich, sie bleiben quasi mit der Freundin permanent verbunden.
 * Sie ist schon fertig implementiert (Sie müssen hier also nichts mehr machen) und
 * dient im Wesentlichen dem Verständnis des Ablaufs (der Pizzabestellung).
 * @param friend Freund in der synchronen Variante.
 * @returns Die überbrachte Pizza.
 */
export function orderSync(friend: FriendS): string {
    friend.driveToPizzeria();
    const pizzas = friend.readMenu();
    const gewaehlt = pizzas[0];
    friend.selectPizza(gewaehlt);
    const pizza = friend.bringPizza();
    return pizza;
}

/**
 * Schickt die Freundin Pizza holen.
 * Diese Funktion verwendet die asynchrone Variante mit Callbacks {@link FriendC}.
 * Dabei 'ruft' die Freundin 'zurück', wenn ein bestimmter Vorgang abgeschlossen ist.
 * Damit zurückgerufen werden kann, muss jeweils eine Funktion (als Funktionsreferenz)
 * als Argument übergeben werden -- hier bieten sich Lambdas mit der Array-Notation an.
 * Wenn die Pizza zu Hause angekommen ist, muss die übergebene Funktion {@link eatPizza} aufgerufen werden. 
 * @param friend Freund in der Variante mit Callbacks
 * @param eatPizza  Callback, der aufgerufen wird, wenn die Pizza endlich da ist
 */
export function orderCallback(friend: FriendC, eatPizza: (pizza: string) => void) {
   friend.driveToPizzeria(()=> {
    friend.readMenu((pizzas : string[])=>{
       const gewaehlt = pizzas[0]
       friend.selectPizza(gewaehlt,()=>{
        friend.bringPizza((pizza)=>{
            eatPizza(pizza)
        });
       } )
    })
   });
}

/**
 * 
 * Schickt die Freundin Pizza holen.
 * Diese Funktion verwendet die asynchrone Variante mit Promises {@link FriendP}.
 * Dabei *verspricht* die Freundin, einen bestimmten Vorgang durchzuführen.
 * Sie müssen angeben, was *dann* (engl. 'then') passieren soll, wenn das Versprechen erfüllt ist.
 * Auch dafür bieten sich wieder Lambdas mit der Arrow-Notation an.
 * Am Ende muss hier ebenfalls ein Versprechen abgegeben werden, nämlich, dass man am Ende eine
 * Pizza hat!
 * 
 * Bei der Implementierung können Sie entweder geschachtelte Promises verwenden oder aber
 * eine Promise-Kette.
 * @param friend Freund in der Variante mit Promises
 * @returns Versprechen, das es eine Pizza gibt!
 */
export function orderPromise(friend: FriendP): Promise<string> {
    const arrive = friend.driveToPizzeria()
    
    const read = arrive.then(()=> {
        return friend.readMenu();
    })

    const packed = read.then((pizzas: string[] )=>{
     const pizza = pizzas[0];
     return friend.selectPizza(pizza) 
    });     
    //return packed.then(friend.bringPizza);
    return packed.then(()=>{
        return friend.bringPizza()
    })  
}

/**
 * 
 * Schickt die Freundin Pizza holen.
 * Diese Funktion verwendet die asynchrone Variante mit async/await {@link FriendA}.
 * Dabei werden wieder Versprechen abgegeben, wobei diesmal die Erfüllung
 * der Versprechen *abgewartet* wird.
 * Am Ende muss hier ebenfalls ein Versprechen abgegeben werden, nämlich, dass man am Ende eine
 * Pizza hat! Allerdings sind wir diesmal in einer asynchronen Funktion!
 * @param friend Freund in der Variante mit async/await
 * @returns Versprechen, das es eine Pizza gibt!
 */
export async function orderAsyncAwait(friend: FriendA): Promise<string> {
    
    const arrive = await friend.driveToPizzeria()
    const readMenu = await friend.readMenu()
    const packed = await friend.selectPizza(readMenu[0])
    const deliver = await friend.bringPizza()
    return deliver;
}
export async function orderAsyncAwaitWithPromise(friend: FriendP): Promise<string> {
    
    const arrive = await friend.driveToPizzeria()
    const readMenu = await friend.readMenu()
    const packed = await friend.selectPizza(readMenu[0])
    const deliver = await friend.bringPizza()
    return deliver;
}
//What differences to orderAsyncAwait do you notice? Why is that?
//await deals with promises regardless of how it was made
