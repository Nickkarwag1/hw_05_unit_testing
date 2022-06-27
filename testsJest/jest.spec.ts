import { Calculate } from "../calculate/calculate";

let result = 0;

describe("Calculate with Jest", function () {
    beforeEach(function () {
        result = 0;
    });

    test("Check addition - positive", () => {
        const num1 = 5;
        const num2 = 5;
        const operation = "+";
        const expectedResult = 10;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        expect(result).toBe(expectedResult);
    });

    test("Check addition - negative", () => {
        const num1 = 5;
        const num2 = 5;
        const operation = "+";
        const expectedResult = 20;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        expect(result).not.toBe(expectedResult);
    });

    test("Check subtraction - positive", () => {
        const num1 = 15;
        const num2 = 5;
        const operation = "-";
        const expectedResult = 10;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        expect(result).toBe(expectedResult);
    });

    test("Check subtraction - negative", () => {
        const num1 = 15;
        const num2 = 5;
        const operation = "-";
        const expectedResult = 5;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        expect(result).not.toBe(expectedResult);
    });

    test("Check multiply - positive", () => {
        const num1 = 8;
        const num2 = 8;
        const operation = "*";
        const expectedResult = 64;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        expect(result).toBe(expectedResult);
    });

    test("Check multiply - negative", () => {
        const num1 = 8;
        const num2 = 8;
        const operation = "*";
        const expectedResult = 72;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        expect(result).not.toBe(expectedResult);
    });

    test("Check division - positive", () => {
        const num1 = 20;
        const num2 = 2;
        const operation = "/";
        const expectedResult = 10;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        expect(result).toEqual(expectedResult);
    });

    test("Check division - negative", () => {
        const num1 = 20;
        const num2 = 2;
        const operation = "/";
        const expectedResult = 15;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        expect(result).not.toEqual(expectedResult);
    });

    test("Check multiply - positive", () => {
        const num1 = 10;
        const num2 = 15;
        const operation = "*";
        const expectedResult = 150;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        expect(result).toEqual(expectedResult);
    });

    test("Check division - negative", () => {
        const num1 = 200;
        const num2 = 10;
        const operation = "/";
        const expectedResult = 15;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        expect(result).not.toEqual(expectedResult);
    });
});
