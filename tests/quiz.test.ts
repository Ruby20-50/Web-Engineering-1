import "./QuizMatcher"
import * as quiz from "../src/quiz"

test("q0_1", () => {
    expect(quiz.q0_1()).answer("Hello Earth");
})
test("q0_2", () => {
    expect(quiz.q0_2()).answer("Hello Berlin");
})

// Beantworten Sie die folgenden Fragen, in dem Sie das Argument von answer
// korrekt angeben. 
//
// Definieren Sie bitte keine eigenen Variablen für die Antworten,
// damit die automatische Korrektur Ihre Antworten erkennen kann.
//
// Schauen Sie unbedingt in der Datei "quiz.ts" nach und lesen sie die dort
// angegebene Literatur, falls Sie nicht weiterkommen.
//
// Wenn Sie die Jest-Extension installiert haben, können Sie über die 
// fehlgeschlagenen Tests 'hovern' und erhalten dann Hinweise.


test("q1_1", () => {
    expect(quiz.q1_1()).answer(99);
})
test("q1_2", () => {
    expect(quiz.q1_2()).answer(19);
})
test("q1_3", () => {
    expect(quiz.q1_3()).answer(-2);
})

test("q2_1", () => {
    expect(quiz.q2_1()).answer('Hey!');
})
test("q2_2", () => {
    expect(quiz.q2_2()).answer('');
})
test("q2_3", () => {
    expect(quiz.q2_3()).answer('default');
})

test("q3_1", () => {
    expect(quiz.q3_1()).answer('Hey!');
})
test("q3_2", () => {
    expect(quiz.q3_2()).answer("default");
})
test("q3_3", () => {
    expect(quiz.q3_3()).answer('default');
})



test("q4_1", () => {
    expect(quiz.q4_1()).answer('pferde');
})
test("q4_2", () => {
    expect(quiz.q4_2()).answer('nix');
})



test("q5_1", () => {
    expect(quiz.q5_1()).answer('pferde');
})
test("q5_2", () => {
    expect(quiz.q5_2()).answer(undefined);
})


test("q6_1", () => {
    expect(quiz.q6_1()).answer('number');
})
test("q6_2", () => {
    expect(quiz.q6_2()).answer('string');
})
test("q6_3", () => {
    expect(quiz.q6_3()).answer('object');
})
test("q6_4", () => {
    expect(quiz.q6_4()).answer('object');
})
test("q6_5", () => {
    expect(quiz.q6_5()).answer('number');
})
test("q6_6", () => {
    expect(quiz.q6_6()).answer('function');
})
test("q6_7", () => {
    expect(quiz.q6_7()).answer('object');
})



test("q7_1", () => {
    expect(quiz.q7_1()).answer(0);//returns 127 & 0 => 1 & 0 => 0
})
test("q7_2", () => {
    expect(quiz.q7_2()).answer(74);
})
test("q7_3", () => {
    expect(quiz.q7_3()).answer('74');//why? because the it returns the first false value
})
test("q7_4", () => {
    expect(quiz.q7_4()).answer('');
})



test("q8_1", () => {
    expect(quiz.q8_1()).answer(0);
})
test("q8_2", () => {
    expect(quiz.q8_2()).answer(74);// 127 nutural number
})
test("q8_3", () => {
    expect(quiz.q8_3()).answer(74);
})
test("q8_4", () => {
    expect(quiz.q8_4()).answer(0);// "" => 0
})



test("q9_1", () => {
    expect(quiz.q9_1()).answer(true);
})
test("q9_2", () => {
    expect(quiz.q9_2()).answer(true);
})
test("q9_3", () => {
    expect(quiz.q9_3()).answer(true);
})
test("q9_4", () => {
    expect(quiz.q9_4()).answer(false);
})