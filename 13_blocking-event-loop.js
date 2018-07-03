// 適当なタイミングで待ったをかければよい
// 待ったをかけないとタスクキューにぎゅう詰めで終わるまで一心不乱に繰り返す
// "100ミリ秒後にタイムアウトが発生し、テストの結果が出力され、プロセスが終了します。"
// ↑これはverifyの中で起きることの話で自分がこれを作るのではない
// 待ったなしのぎゅう詰め状態だと、
// すべて終わった後にやっと結果出力とプロセス終了がキューイングされる
// しかし回数が限界を超えているから、全部終わる前に例外出して死ぬ
// 待ったを定期的にかけることで、待っている隙に他の処理が「お先」と入りこめるようになる
function repeat(operation, num) {
  if (num <= 0) return;
  operation();
  if (num % 5000 === 0) {
    setTimeout(function() {
      repeat(operation, --num);
    })
  } else {
    repeat(operation, --num);
  }
}

module.exports = repeat;