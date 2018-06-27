function reduce(arr, fn, initial) {
  return (function reduceOne(prev, i){

    if (i === arr.length) return prev;
    prev = fn(prev, arr[i], i, arr);
    return reduceOne(prev, ++i);

  })(initial, 0);
}

module.exports = reduce;
