function fizzbuzz(input) {
    return "1";
};


describe("fizzbuzz", function () {
  it("should return 1", function () {
    // call fizz buzz
    const expected = fizzbuzz(1);
    expect(expected).toBe("1");
  });
});
