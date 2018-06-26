function countWords(inputWords) {
  return inputWords.reduce((result, currentValue) => {
    result[currentValue] = ++result[currentValue] || 1;
    return result;
  }, {});
}

module.exports = countWords;