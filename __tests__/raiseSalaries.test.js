const raiseSalaries = require("../raiseSalaries");

describe("should return a new array of employees with their salary now increased by the given percentage increase", () => {
  test("return modified arrayed that is not mutated", () => {
    const actual = [
      { name: "Alice", salary: 3000 },
      { name: "Bob", salary: 2000 },
      { name: "Vel", salary: 4500 },
    ];
    const expected = [
      { name: "Alice", salary: 3300 },
      { name: "Bob", salary: 2200 },
      { name: "Vel", salary: 4950 },
    ];

    expect(raiseSalaries(actual, 10)).toEqual(expected);
  });
});
