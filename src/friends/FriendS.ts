/**
 * Diese Datei ist vorgegeben und darf nicht verändert werden.
 * Es lohnt sich aber trotzdem, den Code zu lesen.
 * @author Jens von Pilgrim
 */

import { DURATION_PER_ACTION, Friend } from "./Friend";


/**
 * Der einfache synchrone Fall. Dieser dient im Wesentlichen dem Verständnis.
 */
export class FriendS extends Friend {

    /**
     * Die Freundin (Synke) fährt mit dem Fahrrad zur Pizzeria... das kann etwas dauern.
     */
    driveToPizzeria() {
        this.checkState("warte");

        this.state = "zur Pizzeria fahre";
        synchronousWait(); // die Fahrt dauert etwas
        this.state = "bei der Pizzeria angekommen bin";
    }

    /**
     * Liest die Namen der Pizzas vor, die angeboten werden. Die Schrift ist klein und 
     * nicht sehr leserlich, das kann also etwas dauern.
     * @returns Die Liste der Pizzasorten.
     */
    readMenu(): string[] {
        this.checkState("bei der Pizzeria angekommen bin");
        this.state = "Karte lese";
        synchronousWait(); // erstmal Brille rausholen und so
        this.state = "Pizzanamen aufgezählt habe";
        return this.names;
    }

    /**
     * Sie wählen eine Pizza aus und die Freundin packt diese ein.
     * Da die Pizza frisch zubereitet wird, kann das etwas dauern.
     * @param pizza Die gewählte Pizza
     */
    selectPizza(pizza: string) {
        this.checkState("Pizzanamen aufgezählt habe");
        const names = this.names;
        /* istanbul ignore next */
        if (names.indexOf(pizza) < 0) {
            throw new Error("Pizza " + pizza + " ist heute nicht im Angebot");
        }
        this.selectedPizza = pizza;
        this.state = "Pizza bestellt habe";
        synchronousWait(); // Pizza wird frisch zubereitet!
        this.state = "Pizza eingepackt habe";
    }

    /**
     * Die Fahrt zurück kann etwas dauern. Zu Hause angekommen überreicht die die Freundin
     * die Pizza!
     * @returns Die ersehnte Pizza!
     */
    bringPizza(): string {
        this.checkState("Pizza eingepackt habe");

        this.state = "nach Hause fahre";
        synchronousWait(); // // mit dem Fahrrad durch Berlin dauert etwas
        this.state = "zu Hause bin";
        return this.selectedPizza;
    }


}


/**
 * Nur zu Demozwecken... eine richtig fiese Schleife, um zu warten.
 */
 function synchronousWait() {
    const start = Date.now();
    let now: number;
    do {
        now = Date.now();
    } while (now - start < DURATION_PER_ACTION);
}
