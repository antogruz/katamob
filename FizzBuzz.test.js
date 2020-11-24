function fizzbuzz(input) {
    return input === 3 ? "Fizz":input+"";
};

describe("fizzbuzz", function () {
  it("should return 1", function () {
    // call fizz buzz
    const expected = fizzbuzz(1);
    expect(expected).toBe("1");
  });

  it("should return 2", function () {
    // call fizz buzz
    const expected = fizzbuzz(2);
    expect(expected).toBe("2");
  });

  it("should return Fizz when number is a multiple of 3", function(){
    const expected = fizzbuzz(3);
    expect(expected).toBe("Fizz");
  });

});
