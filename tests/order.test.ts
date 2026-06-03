import { FriendA } from "../src/friends/FriendA";
import { FriendC } from "../src/friends/FriendC";
import { FriendP } from "../src/friends/FriendP";
import { FriendS } from "../src/friends/FriendS";

import { orderAsyncAwait, orderAsyncAwaitWithPromise, orderCallback, orderPromise, orderSync } from "../src/order";

/**
 * Test für die synchrone Variante.
 */
test("Freund synchron", () => {
    const friend = new FriendS();

    const actualPizza = orderSync(friend);
    expect(actualPizza).toBe(friend.selectedPizza);
    expect(friend.state).toBe("zu Hause bin");
});

/**
 * Test für die Variante mit Callbacks.
 * Der Parameter {@link done} wird von Jest hereingereicht: 
 * Es ist eine Funktion, die man aufruft, um Jest anzuzeigen, dass der Test 
 * (erfolgreich) beendet wurde.
 */
test("Freund mit Callbacks", done => {
    const friend = new FriendC();
    
    orderCallback(friend, (actualPizza) => {
        expect(actualPizza).toBe(friend.selectedPizza);
        expect(friend.state).toBe("zu Hause bin");
        done();
    });
});

/**
 * Test für die Variante mit Promises.
 * Der Test gibt selbst ein Promise zurück, damit Jest weiß, dass der Test asynchron ist.
 */
test("Freund mit Promise", () => {
    const friend = new FriendP();

    return orderPromise(friend).then((actualPizza) => {
        expect(actualPizza).toBe(friend.selectedPizza);
        expect(friend.state).toBe("zu Hause bin");
    });
});

/**
 * Test für die Variante mit async/await.
 * Die Lambda des Tests ist selbst als async markiert um Jest zu informieren, dass der Test asynchron ist.
 */
test("Freund mit async/await", async () => {
    const friend = new FriendA();

    const actualPizza = await orderAsyncAwait(friend);
    expect(actualPizza).toBe(friend.selectedPizza);
    expect(friend.state).toBe("zu Hause bin");
});
/**
 * test for 
 */
test("order Async await with promise ", async () => {
    const friend = new FriendP();
    const actualPizza = await orderAsyncAwaitWithPromise(friend);
    expect(actualPizza).toBe(friend.selectedPizza);
    expect(friend.state).toBe("zu Hause bin");
});
