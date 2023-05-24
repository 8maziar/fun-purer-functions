const { removeLastNumber, raiseSalaries } = require("../pure");

describe.skip("should return a new array of numbers with the last one removed", () => {
  test("return empty array given empty array", () => {
    const actual = [];
    const expected = [];
    expect(removeLastNumber(actual)).toEqual(expected);
  });
  test("return last item removed given array of items", () => {
    const actual = [1, 2, 3, 4];
    const expected = [1, 2, 3];
    expect(removeLastNumber(actual)).toEqual(expected);
  });
});
