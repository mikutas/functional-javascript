module.exports = function arrayMap(arr, fn) {
  return arr.reduce((prev, current, index) => {
    prev[index] = fn(current);
    return prev;
  }, arr.slice()); // arrを渡すとarr自身が変更される
}
