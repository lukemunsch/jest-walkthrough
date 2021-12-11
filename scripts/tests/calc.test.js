const {
    TestWatcher
} = require("jest");

const addition = require("../calc");

describe("Calculator", () => {
    describe("addition test", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 41 + 32", () => {
            expect(addition(41, 32)).toBe(73);
        });
    });
    describe("subtract test", () => {

    });
    describe("multiply test", () => {

    });
    describe("divide test", () => {

    });
});