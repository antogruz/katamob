function fizzbuzz(input) {
    if (input % 3 === 0) {
        return "Fizz";
    }
    if (input % 5 === 0) {
        return "Buzz";
    }
    return input + "";
}

describe("fizzbuzz", function () {
    describe("Without matching any rule, returns input", function () {

        it("should return 1", function () {
            expect(fizzbuzz(1)).toBe("1");
        });

        it("should return 2", function () {
            expect(fizzbuzz(2)).toBe("2");
        });
    });

    describe("should return Fizz when number is a multiple of 3", function () {
        it("with 3", function () {
            expect(fizzbuzz(3)).toBe("Fizz");
        });

        it("with 12", function () {
            expect(fizzbuzz(12)).toBe("Fizz");
        });
    });

    describe("should return Buzz when number is a multiple of 5", function () {
        it("with 5", function () {
            expect(fizzbuzz(5)).toBe("Buzz");
        });
    });
});
