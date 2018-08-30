function curryN(fn, n) {
  // curryN呼び出し時にnは与えなかった場合など、nがfalsyならfn.lengthを代入
  n = n || fn.length;
  // curryNはcurriedNを返す
  return function curriedN(arg) {
    // curriedNが実行されたときnが1以下ならcurriedNと同じ引数を持つfnの戻り値を返す
    if (n <= 1) return fn(arg);
    // curriedNが実行されたときnが1より大きいならcurryNの戻り値を返す=curriedNを返す
    // curryN実行時の引数は
    // curriedNの引数が予約されたfn
    // thisが誰かわからん→グローバルオブジェクト
    // つまりthisの方にあまり意味はなく、fnの引数を予約したいだけ
    // そしてnは1減らす
    //console.log(`this: ${this}`);
    return curryN(fn.bind(this, arg), n - 1);
  };
}

module.exports = curryN;