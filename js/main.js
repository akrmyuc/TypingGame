"use strict";

{
  function setWord() {
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0]; // 単語を配列から削除しながらランダムに表示
    target.textContent = word; // textContent：テキストの内容を表示
    loc = 0;
  }

  const words = ["dog", "cat", "rabbit", "elephant"];

  let word;
  let loc = 0; // location(位置)　0文字目から打っていくので0で初期化
  let startTime;
  let isPlaying = false; // ゲームが始まっているか
  const target = document.getElementById("target"); // HTMLのtargetの内容を取得して、jsの変数targetに代入

  document.addEventListener("click", () => {
    if (isPlaying === true) {
      return;
    }

    isPlaying = true;
    startTime = Date.now();
    setWord(); // クリックされたらsetWordを呼び出す
  });

  // 入力されたときの処理
  document.addEventListener("keydown", (e) => {
    if (e.key !== word[loc]) {
      return;
    }

    loc++;
    // 一致していれば次の文字へ
    // 1: _og
    // 2: __g
    // 3: ___
    target.textContent = "_".repeat(loc) + word.substring(loc);

    if (loc === word.length) {
      // 用意した単語がすべて入力されたときの処理
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById("result");
        result.textContent = `finished! ${elapsedTime} seconds!`;
        return;
      }

      // そうでなければ次の単語をセット
      setWord();
    }
  });
}
