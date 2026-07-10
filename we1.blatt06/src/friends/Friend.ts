/**
 * Diese Datei ist vorgegeben und darf nicht verändert werden.
 * Es lohnt sich aber trotzdem, den Code zu lesen.
 * 
 * @author Jens von Pilgrim
 */

/**
 * Die möglichen Zustände, in denen die Freundin (Nodira) im Rahmen der 'Pizzaorganisation' sein kann.
 */
export type State = "warte" | "zur Pizzeria fahre" | "bei der Pizzeria angekommen bin"
    | "Karte lese" | "Pizzanamen aufgezählt habe" | "Pizza bestellt habe" |
    "Pizza eingepackt habe" | "nach Hause fahre" | "zu Hause bin";



/**
 * Die Zeitdauer pro Aktion.
 */
export const DURATION_PER_ACTION = 1;


/**
 * Abstrakte Basisklasse die den State (Zustand) der Freundin (Nodira) verwaltet.
 * 
 * Die Pizza-Organisation bedeutet einige Schritte, die in der richtigen Reihenfolge ausgeführt
 * werden müssen. Damit diese Reihenfolge eingehalten wird, wird der aktuelle Schritt in Form
 * eines States gespeichert. Bei einer Aktion wird geprüft, ob dieser überhaupt möglich ist.
 *
 * Die States sind im Grunde hier nicht wichtig. Sie stellen aber sicher, dass die 
 * Schritte tatsächlich in der richtigen Reihenfolge gemacht werden und, noch wichtiger,
 * das ein Schritt erfolgreich durchgeführt wurde bevor der nächste Schritt getan wird.
 */
export abstract class Friend {
    private _state: State = "warte";
    private _selectedPuzza: string = "";
    private _names: string[]

    constructor() {
        this._names = this.randomPizzaNames();
    }

    protected checkState(expectedState: State) {
        /* istanbul ignore next */
        if (this._state != expectedState) {
            throw new Error(`Kann Aktion nicht ausführen, da ich nicht ${expectedState}, sondern ${this.state}.`);
        }
    }

    /**
     * Ist nur zu Testzwecken public.
     */
    get selectedPizza() { return this._selectedPuzza; }

    protected set selectedPizza(selectedPizza: string) {
        this._selectedPuzza = selectedPizza;
    }

    /**
     * Ist nur zu Testzwecken public.
     */
    get state() { return this._state; }

    protected set state(state: State) {
        this._state = state;
    }

    /**
     * Gibt die Namen der Pizzas zurück. Diese sind bei jedem Programmlauf anders,
     * um Mogeleien (wir bestellen immer Margherita) zu unterbinden.
     */
    protected get names() {
        return this._names;
    }

    /**
     * Gibt 4 zufällig Pizza-Namen zurück.
     */
    private randomPizzaNames() {
        const names = [...
            /* istanbul ignore next */
            (process.env.PIZZEN) ? process.env.PIZZEN.split(',') :
            ["Margherita", "Funghi", "Prosciutto", "Quattro Stagioni",
            "Diavola", "Salame", "Ruccola", "Hawaii", "Speciale", "Peperoni", "Gyros"]];


        const arr = [];
        for (let i=0; i<4; i++) {
            let randIndex = Math.floor(Math.random()*(names.length+1));
            arr.push( names.splice(randIndex, 1)[0]);
        }
        return arr;
    }
}