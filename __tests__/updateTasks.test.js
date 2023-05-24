const updateTasks = require("../updateTasks");

describe("should return a new person object with a new tasks property. The tasks property from the input object should not be mutated.", () => {
  const person = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] };
  test("should add multiple tasks to obj", () => {
    const expected = {
      name: "Anat",
      tasks: ["feed Schnitzel", "Go to pottery", "read books", "tidy room"],
    };

    expect(updateTasks(person, "read books", "tidy room")).toEqual(expected);
  });
  test("should check if object is mutated", () => {
    const tasks = ["feed Schnitzel", "Go to pottery"];
    updateTasks(person, "read books", "tidy room");
    expect(person.tasks).toEqual(tasks);
  });
});
