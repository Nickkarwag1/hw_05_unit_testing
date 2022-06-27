import { Calculate } from "../calculate/calculate";
import { expect, assert } from "chai";
import * as chai from "chai";

chai.should();
let result = 0;

describe("Calculate with mocha and chai", function () {
    beforeEach(function () {
        result = 0;
    });

    it("Check addition - positive", () => {
        const num1 = 2;
        const num2 = 2;
        const operation = "+";
        const expectedResult = 4;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        expect(result, `Actual result: ${result} should equal expected result: ${expectedResult}`).to.equal(
            expectedResult,
        );
    });

    it("Check addition - negative", () => {
        const num1 = 2;
        const num2 = 2;
        const operation = "+";
        const expectedResult = 5;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        expect(result, `Actual result: ${result} should not equal expected result: ${expectedResult}`).not.to.equal(
            expectedResult,
        );
    });

    it("Check subtraction - positive", () => {
        const num1 = 4;
        const num2 = 2;
        const operation = "-";
        const expectedResult = 2;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        assert.equal(
            result,
            expectedResult,
            `Actual result: ${result} should equal expected result: ${expectedResult}`,
        );
    });

    it("Check subtraction - negative", () => {
        const num1 = 4;
        const num2 = 2;
        const operation = "-";
        const expectedResult = 4;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        assert.notEqual(
            result,
            expectedResult,
            `Actual result: ${result} should not equal expected result: ${expectedResult}`,
        );
    });

    it("Check multiply - positive", () => {
        const num1 = 5;
        const num2 = 3;
        const operation = "*";
        const expectedResult = 15;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        result.should.to.equal(
            expectedResult,
            `Actual result: ${result} should equal expected result: ${expectedResult}`,
        );
    });

    it("Check multiply - negative", () => {
        const num1 = 5;
        const num2 = 3;
        const operation = "*";
        const expectedResult = 20;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        result.should.not.to.equal(
            expectedResult,
            `Actual result: ${result} should not equal expected result: ${expectedResult}`,
        );
    });

    it("Check division - positive", () => {
        const num1 = 20;
        const num2 = 5;
        const operation = "/";
        const expectedResult = 4;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        expect(result).to.equal(
            expectedResult,
            `Actual result: ${result} should equal expected result: ${expectedResult}`,
        );
    });

    it("Check division - negative", () => {
        const num1 = 20;
        const num2 = 5;
        const operation = "/";
        const expectedResult = 10;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        expect(result).not.to.equal(
            expectedResult,
            `Actual result: ${result} should not equal expected result: ${expectedResult}`,
        );
    });

    it("Check addition - positive", () => {
        const num1 = 50;
        const num2 = 30;
        const operation = "+";
        const expectedResult = 80;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        assert.equal(
            result,
            expectedResult,
            `Actual result: ${result} should equal expected result: ${expectedResult}`,
        );
    });

    it("Check multiply - negative", () => {
        const num1 = 240;
        const num2 = 2;
        const operation = "*";
        const expectedResult = 120;
        result = new Calculate(num1, num2, operation, expectedResult).getResult();
        result.should.to.not.equal(
            expectedResult,
            `Actual result: ${result} should not equal expected result: ${expectedResult}`,
        );
    });
});
