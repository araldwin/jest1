

const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 22 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 74 for 42.4 + 31.6", () => {
            expect(addition(42.4, 31.6)).toBe(74);
        });
    
    });
    describe("Subtraction function", () => {
    
    });
    describe("Multiply function", () => {
    
    });
    describe("Division function", () => {
    
    });
})