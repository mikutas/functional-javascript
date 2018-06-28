function logger(namespace) {
  return function () {
    let args = Array.prototype.slice.call(arguments);
    // A.apply(B, [argsArray])
    // A関数をBオブジェクトに"適用"してね 引数は[argsArray]ね
    console.log.apply(null, [namespace].concat(args));
  };
}

module.exports = logger;
