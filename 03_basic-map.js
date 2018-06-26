function doubleAll(numbers) {
  let result = [];
  numbers.map((x) => {
    result.push(x * 2);
  });
  return result;
}

module.exports = doubleAll;
