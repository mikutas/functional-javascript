function duckCount() {
  let argsArray = [].slice.call(arguments);
  let filtered = argsArray.filter((arg) => {
    // 問題文 ## Arguments より
    // 引数は任意のプロパティを持ちうる⇒hasOwnPropertyを持たない可能性もある
    // しかし今はhasOwnPropertyはどうでもよくてquackプロパティがあるかどうかだけが知りたい
    return Object.prototype.hasOwnProperty.call(arg, 'quack');
  })
  return filtered.length;
}

module.exports = duckCount;
