/// <reference path="../Calculator.js" />

describe("Calculator", function () {

    describe("Sum", function () {
        it("Sum two numbers equals", function () {
            //Arrange - Act
            var result = Calculator.sum(2, 2);

            //Assert
            expect(result).toBe(2 + 2);
        });

        it("Sum two differents numbers where first number is bigger than second", function () {

            //Arrange - Act
            var result = Calculator.sum(2, 1);

            //Assert
            expect(result).toBe(2 + 1);
        });

        it("Sum two differents numbers where first number is smaller than second", function () {

            //Arrange - Act
            var result = Calculator.sum(3, 5);

            //Assert
            expect(result).toBe(3 + 5);
        });
    });

    describe("Divide", function () {
        it("Divide two differents numbers where the divisor is different than zero", function () {
            //Arrange - Act
            var result = Calculator.divide(4, 2);

            //Assert
            expect(result).toBe(2);
        });

        it("Divide two equals numbers where the divisor is different than zero", function () {
            //Arrange - Act
            var result = Calculator.divide(3, 3);

            //Assert
            expect(result).toBe(1);
        });

        it("Divide two numbers where the divisor is equal than zero", function () {
            //Arrange - Act
            var result = Calculator.divide(5, 0);

            //Assert
            expect(result).toBe(0);
        });
    });

    describe("Multiply", function () {
        it("Multiply two equals numbers", function () {
            //Arrange - Act
            var result = Calculator.multiply(2, 2);

            //Assert
            expect(result).toBe(4);
        });

        it("Multiply two differents numbers", function () {
            //Arrange - Act
            var result = Calculator.multiply(5, 2);

            //Assert
            expect(result).toBe(10);
        });

        it("Multiply two differents numbers where one is zero", function () {
            //Arrange - Act
            var result = Calculator.multiply(5, 0);

            //Assert
            expect(result).toBe(0);
        });
    });

    describe("Subtract", function () {
        it("Subtract two equals numbers", function () {
            //Arrange - Act
            var result = Calculator.subtract(2, 2);

            //Assert
            expect(result).toBe(0);
        });

        it("Subtract two differents numbers", function () {
            //Arrange - Act
            var result = Calculator.subtract(5, 2);

            //Assert
            expect(result).toBe(3);
        });

        it("Subtract two differents numbers where one is zero", function () {
            //Arrange - Act
            var result = Calculator.subtract(5, 0);

            //Assert
            expect(result).toBe(5);
        });

        it("Subtract two differents numbers where second number is bigger than first", function () {
            //Arrange - Act
            var result = Calculator.subtract(5, 10);

            //Assert
            expect(result).toBe(-5);
        });
    });

});