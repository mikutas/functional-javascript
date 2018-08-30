// bindされたcall関数が戻り値
module.exports = Function.call.bind(Array.prototype.slice);

/*
sliceはレシーバーであるArrayをthisとして、その部分配列を作るもの（引数なければコピーを作る）。
Array.prototype.slice.call(arguments)が何をしているかというと、
callを使ってsliceのthisをargumentsにしてやることでsliceの処理対象はargumentsになり、これを配列にコピーする。
callはレシーバーの関数のthisを第一引数に変えてやりながらレシーバーを実行するもの。
bindはcallと似ているがレシーバーを実行はしない。
bindにより、callを実行（＝exportした関数を実行）するときのthisがsliceに決まった。
ということは、このexportした関数を実行するとslice.callしたのと同じことになる。
exportした関数の引数はcallの第一引数であるから、sliceのthisとなり、sliceの処理対象となる。
*/
