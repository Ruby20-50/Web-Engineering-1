import { getWikipediaPageViews, getWikipediaPageViewsPromises } from "../src/wikipediaPageViews";

test('async/await Future_(Programmierung) 2024', async () => {
    const views = await getWikipediaPageViews("Future_(Programmierung)", 2024);
    expect(views).toBe(2179);
});

test('async/await Article does not exist', async () => {
    const views = await getWikipediaPageViews("Nonexistent_Article", 2024);
    expect(views).toBe(-1);
});


test('Promise Future_(Programmierung) 2024', async () => {
    const views = await getWikipediaPageViewsPromises("Future_(Programmierung)", 2024);
    expect(views).toBe(2179);
});

test('Promise Article does not exist', async () => {
    const views = await getWikipediaPageViewsPromises("Nonexistent_Article", 2024);
    expect(views).toBe(-1);
});
