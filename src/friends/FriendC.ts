/**
 * Diese Datei ist vorgegeben und darf nicht verändert werden.
 * Es lohnt sich aber trotzdem, den Code zu lesen.
 * @author Jens von Pilgrim
 */

import { setTimeout } from "timers";
import { setTimeout as setTimeoutPromise } from "timers/promises";
import { DURATION_PER_ACTION, Friend } from "./Friend";
import { FriendS } from "./FriendS";

/**
 * Asynchrone Variante, die mit Callbacks arbeitet.
 * Dokumentiert sind hier nur die Callbacks, alles weitere bitte der synchronen Klasse {@link FriendS} entnehmen.
 */
export class FriendC extends Friend {

    /**
     * @param whenArrived Callback, der aufgerufen wird, wenn die Freundin
     *      an der Pizzeria angekommen ist.
     */
    driveToPizzeria(whenArrived: () => void) {
        this.checkState("warte");
        this.state = "zur Pizzeria fahre";

        setTimeout(() => {
            this.state = "bei der Pizzeria angekommen bin";
            whenArrived()
        }, DURATION_PER_ACTION); // die Fahrt dauert etwas
    }

    /**
     * @param whenNamesRead Callback, der aufgerufen wird, wenn die Freundin
     *      die Karte entziffern konnte und Ihnen die Namen vorliest.
     */
    readMenu(whenNamesRead: (pizzas: string[]) => void) {
        this.checkState("bei der Pizzeria angekommen bin");
        this.state = "Karte lese"
        setTimeout(() => {
            this.state = "Pizzanamen aufgezählt habe";
            whenNamesRead(this.names);
        }, DURATION_PER_ACTION); // erst mal Brille rausholen und so
    }

    /**
     * 
     * @param pizza Die von Ihnen ausgewählte Pizza.
     * @param whenPizzaReady Callback, der aufgerufen wird, wenn die Freundin
     *      die Pizza entgegen genommen und eingepackt hat.
     */
    selectPizza(pizza: string, whenPizzaReady: () => void) {
        this.checkState("Pizzanamen aufgezählt habe");
        this.selectedPizza = pizza;
        this.state = "Pizza bestellt habe";
        setTimeout(() => {
            this.state = "Pizza eingepackt habe";
            whenPizzaReady();
        }, DURATION_PER_ACTION); // Pizza wird frisch zubereitet!
    }

    /**
     * @param whenAtHome Callback, der aufgerufen wird, wenn die Freundin
     *      zu Hause angekommen ist und Ihnen die Pizza überreicht.
     */
    bringPizza(whenAtHome: (pizza: string) => void) {
        this.checkState("Pizza eingepackt habe");
        this.state = "nach Hause fahre";
        setTimeout(() => {
            this.state = "zu Hause bin";
            whenAtHome(this.selectedPizza);
        }, DURATION_PER_ACTION); // mit dem Fahrrad durch Berlin dauert etwas
    }

}

