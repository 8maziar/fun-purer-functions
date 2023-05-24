const raiseSalaries = (arr, percentage) => {
  return arr.map((x) => {
    let newObj = { ...x };
    newObj.salary += (newObj.salary * percentage) / 100;
    return newObj;
  });
};

module.exports = raiseSalaries;
