# Web Engineering 1 – Exercise Sheets

Solutions to the exercise sheets (*Blätter*) for the **Web Engineering 1** 

Each `we1.blattXX` folder is a self-contained, independent project with its own
`package.json`, tests, and configuration — matching the template provided by
the course for each fork.

## Overview of the sheets

| Sheet | Topic | Focus |
|---|---|---|
| [`we1.blatt01`](we1.blatt01) | `Waage` class | TypeScript class fundamentals: fields, constructor, methods |
| [`we1.blatt02`](we1.blatt02) | `conversions.ts`, `quiz.ts` | Type conversions, plus expressions/operators in JavaScript/TypeScript |
| [`we1.blatt03`](we1.blatt03) | `leetSpeak.ts`, `simpleCSV.ts` | String processing: iterative and recursive letter substitution (leetspeak), plus parsing CSV text into a 2D array |
| [`we1.blatt05`](we1.blatt05) | `VierGewinnt` | Implementing the game logic for Connect Four (board, moves, types) |
| [`we1.blatt06`](we1.blatt06) | `order.ts`, `wikipediaPageViews.ts`, `friends/` | Synchronous vs. asynchronous programming, Promises, accessing the Wikipedia pageviews API |
| [`we1.blatt08`](we1.blatt08) | `responsiveItems.html`, `gridVsTable.html`, `appwindow.html` | Pure HTML/CSS: grid vs. table layout and responsive design (no JS/TS) |

## Technologies

- **TypeScript** (compiled with `tsc`)
- **Jest** / **ts-jest** for unit tests
- **npm** as package manager
- Plain **HTML/CSS** in Sheet 08

## Usage

Each sheet is worked on independently. Change into the relevant folder and run:

```bash
cd we1.blattXX
npm install
npm test      # run the tests (not applicable to Sheet 08)
npm run build # compile to dist/ (TypeScript sheets)
```

## License

These files may only be used in the context of the course mentioned above and
are intended for personal use only.