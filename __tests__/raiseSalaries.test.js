const raiseSalaries = require("../raiseSalaries");

describe("should return a new array of employees with their salary now increased by the given percentage increase", () => {
  const actual = [
    { name: "Alice", salary: 3000 },
    { name: "Bob", salary: 2000 },
    { name: "Vel", salary: 4500 },
  ];
  test("return modified arrayed that is not mutated", () => {
    const expected = [
      { name: "Alice", salary: 3300 },
      { name: "Bob", salary: 2200 },
      { name: "Vel", salary: 4950 },
    ];

    expect(raiseSalaries(actual, 10)).toEqual(expected);
  });
  test("return modified arrayed that is not mutated", () => {
    const expected = [
      { name: "Alice", salary: 3300 },
      { name: "Bob", salary: 2200 },
      { name: "Vel", salary: 4950 },
    ];
    raiseSalaries(actual, 10);
    expect(actual[0].salary).toBe(3000);
  });
});
