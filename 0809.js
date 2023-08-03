
// 宿題1
const removeChoiceButton1 = document.getElementById('remove-choice-btn1')
removeChoiceButton1.addEventListener('click', () => {
  console.log('絞り込みます');
});

// 宿題2
const removeChoiceButton2 = document.getElementById('remove-choice-btn2')
const trs = document.getElementsByTagName('tr');
removeChoiceButton2.addEventListener('click', () => {
  for (let i = 0; i < trs.length; i++) {
    console.log(trs[i]);
  }
});

// 宿題3
const removeChoiceButton3 = document.getElementById('remove-choice-btn3')
const trs2 = document.getElementsByTagName('tr');
removeChoiceButton3.addEventListener('click', () => {
  for (let i = 0; i < trs2.length; i++) {
    console.log(trs2[i].children[1].textContent);
  }
});

// 宿題4
const removeChoiceButton4 = document.getElementById('remove-choice-btn4')
const trs3 = document.getElementsByTagName('tr');
removeChoiceButton4.addEventListener('click', () => {
  for (let i = 1; i < trs3.length; i++) {
    for (let j = 3; j < 7; j++) {
      console.log(trs3[i].children[j].textContent);
    }
  }
});

// 宿題5
const removeChoiceButton5 = document.getElementById('remove-choice-btn5')
const trs4 = document.getElementsByTagName('tr');
removeChoiceButton5.addEventListener('click', () => {
  for (let i = 1; i < trs4.length; i++) {
    for (let j = 6; j > 2; j--) {
      console.log(trs4[i].children[j].textContent);
    }
  }
});

// 宿題6
const removeChoiceButton6 = document.getElementById('remove-choice-btn6')
const selects = document.querySelectorAll('select');
removeChoiceButton6.addEventListener('click', () => {
  for (let i = 0; i < selects.length; i++) {
    selects[i].children[1].remove();
  }
});

// 宿題7
const removeChoiceButton7 = document.getElementById('remove-choice-btn7')
const trs5 = document.getElementsByTagName('tr');
const selects2 = document.querySelectorAll('select');
removeChoiceButton7.addEventListener('click', () => {
  for (let i = 1; i < trs4.length; i++) {
    let theNumberOfOptions = 4;
    for (let j = 6; j > 2; j--) {
      let target = trs5[i].children[j].textContent;
      console.log(target);
      for (let k = 0; k < theNumberOfOptions; k++) {
        let option = selects2[i-1].children[k].textContent;
        if (target != '' && target == option) {
          selects[i-1].children[k].remove();
          theNumberOfOptions--;
        }
      }
    }
  }
});

// 宿題8
const removeChoiceButton8 = document.getElementById('remove-choice-btn8')
const trs6 = document.getElementsByTagName('tr');
const selects3 = document.querySelectorAll('select');
removeChoiceButton8.addEventListener('click', () => {
  for (let i = 1; i < trs6.length; i++) {
    let theNumberOfOptions = 4;
    let targetYears = trs[i].children[1].textContent % 5;
    for (let j = 6; j > 6 - targetYears; j--) {
      let target = trs6[i].children[j].textContent;
      console.log(target);
      for (let k = 0; k < theNumberOfOptions; k++) {
        let option = selects3[i-1].children[k].textContent;
        if (target != '' && target == option) {
          selects3[i-1].children[k].remove();
          theNumberOfOptions--;
        }
      }
    }
  }
});

// 宿題9
// ボタンの取得
const removeChoiceButton9 = document.getElementById('remove-choice-btn9')
// <tr>と<select>を全部取得（getElementsByTagNameとquerySelectorAllはほぼ同じなので、querySelectorAllに統一しました）
const trs7 = document.querySelectorAll('tr');
const selects4 = document.querySelectorAll('select');

// ボタンをクリックしたときの動作
removeChoiceButton9.addEventListener('click', () => {
  // 行方向にループ（iは0から始まる行数）
  for (let i = 1; i < trs6.length; i++) {
    // <select>の選択肢の数をここで定義する
    let theNumberOfOptions = 4;
    // 使用年数を5で割った余りから確認すべき過去の年数を計算し、targetYears変数に入れる
    let targetYears = trs[i].children[1].textContent % 5;
    // 列方向にループ（jは0から始まる列番号、2022年からyargetYears分を引いた列まで新しいほうから（右の列から）順番に取得）
    for (let j = 6; j > 6 - targetYears; j--) {
      // その年にした検査項目を取得し、target変数に入れる。
      let target = trs6[i].children[j].textContent;
      // target変数の内容をコンソールに出力（任意）
      console.log(target);
      // target変数の内容が空白の場合は次の列に
      if (target == '') {
        continue;
      }
      // <select>選択肢ごとにループ（初期状態で、kが、0は空白、1は○、2は△、3は×）
      for (let k = 0; k < theNumberOfOptions; k++) {
        // そのkに対応する選択肢の内容を取得して、option変数に入れる
        let option = selects3[i-1].children[k].textContent;
        // target変数の内容とoption変数の内容が同じなら（○・△・×の記号が一致すれば）
        if (target == option) {
          // その選択肢を削除
          selects3[i-1].children[k].remove();
          // 選択肢の数を1つ減らす（これがないと選択肢の数を超えてループすることになりエラーが発生する）
          theNumberOfOptions--;
        }
      }
    }
  }
});

