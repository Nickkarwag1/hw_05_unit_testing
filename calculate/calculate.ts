export class Calculate {
    constructor(public num1: number, public num2: number, public operation: string, public expectedResult: number) {
    }

    getResult() {
        let result = 0;
        switch (this.operation) {
            case "+":
                result = this.num1 + this.num2;
                break;
            case "-":
                result = this.num1 - this.num2;
                break;
            case "*":
                result = this.num1 * this.num2;
                break;
            case "/":
                result = this.num1 / this.num2;
                break;
            default:
                throw Error("Options available: +, -, *, /.");
                break;
        }
        return result;
    }
}