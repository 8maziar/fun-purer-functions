const updateTasks = (person, ...newTasks) => {
  const newPerson = {
    name: person.name,
    tasks: [...person.tasks, ...newTasks],
  };

  return newPerson;
};

module.exports = updateTasks;
