/**
 * Diese Datei ist vorgegeben und darf nicht verändert werden.
 * Es lohnt sich aber trotzdem, den Code zu lesen.
 * @author Jens von Pilgrim
 */

import { setTimeout as setTimeoutPromise } from "timers/promises";
import { DURATION_PER_ACTION, Friend } from "./Friend";
import { FriendS } from "./FriendS";

/**
 * Asynchrone Variante, die mit Promises arbeitet.
 * Dokumentiert sind hier nur die Promises, alles weitere bitte der synchronen Klasse {@link FriendS} entnehmen.
 */
export class FriendP extends Friend {

    /**
     * @returns Promise das erfüllt wird, wenn die Freundin
     *      bei der Pizzeria angekommen ist.
     */
    driveToPizzeria(): Promise<void> {
        this.checkState("warte");
        this.state = "zur Pizzeria fahre";
        
        const promise = setTimeoutPromise(DURATION_PER_ACTION); // die Fahrt dauert etwas
        return promise.then(() => {
            this.state = "bei der Pizzeria angekommen bin";
        })
        
    }
    
    /**
     * @returns Promise das erfüllt wird, wenn die Freundin
     *      die Namen der Pizzas aufgezählt hat.
     */
    readMenu(): Promise<string[]> {
        this.checkState("bei der Pizzeria angekommen bin");
        this.state = "Karte lese";

        const promise = setTimeoutPromise(DURATION_PER_ACTION); // erst mal Brille rausholen und so
        return promise.then(() => {
            this.state = "Pizzanamen aufgezählt habe";
            return this.names;
        })
    }
    
    /**
     * @param pizza Die von Ihnen (aus dem Angebot der Pizzeria) ausgewählte Pizza.
     * @returns Promise das erfüllt wird, wenn die Freundin 
     *      die von Ihnen gewählte Pizza eingepackt hat.
     */
    selectPizza(pizza: string): Promise<void> {
        this.checkState("Pizzanamen aufgezählt habe");
        this.selectedPizza = pizza;
        this.state = "Pizza bestellt habe";

        const promise = setTimeoutPromise(DURATION_PER_ACTION); // Pizza wird frisch zubereitet!
        return promise.then(() => {
            this.state = "Pizza eingepackt habe";
        })

    }

    /**
     * @returns Promise das erfüllt wird, wenn die Freundin 
     *      zu Hause mit der Pizza angekommen ist.
     */
    bringPizza(): Promise<string> {
        this.checkState("Pizza eingepackt habe");

        this.state = "nach Hause fahre";
        const promise = setTimeoutPromise(DURATION_PER_ACTION); // mit dem Fahrrad durch Berlin dauert etwas

        return promise.then(() => {
            this.state = "zu Hause bin";
            return this.selectedPizza;
        });
    }
}
