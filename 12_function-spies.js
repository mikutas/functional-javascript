function Spy(target, method) {
  // 元の関数オブジェクトを取り出して保存しておく
  let funcObj = target[method];
  // 戻り値用オブジェクトを用意する
  // ## Example の動作より、戻り値はcountプロパティを持つ
  let retObj = {count: 0};
  // targetのmethodを別の関数にすり替える
  target[method] = function(){
    // すり替えられた関数が実行されるとカウントが増える
    retObj.count += 1;
    // すり替えられた関数が実行されたとき、元の関数もきちんと実行する
    return funcObj.apply(this, arguments);
  };
  return retObj;
}

module.exports = Spy;
