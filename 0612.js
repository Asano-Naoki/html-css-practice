//宿題１

// 関数の定義
const checkTon = (totalTon) => {
  console.log('総トン数：'+totalTon);
  if (totalTon < 300) {
      console.log('法律Aが適用されます');
  }
  else if (totalTon < 500) {
      console.log('法律Bが適用されます');
  }
  else (totalTon >= 500){
      console.log('法律Cが適用されます');
  }
}

// 関数の適用
checkTon(300);
checkTon(500);
checkTon(600);
checkTon(1000);
checkTon(Math.random() * 600);



//宿題２
// add-btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('add-btn');
// parent-listというidを持つHTML要素を取得し、定数に代入する
const parentList = document.getElementById('parent-list');

// HTML要素がクリックされたときにイベント処理を実行する
addBtn.addEventListener('click', () => {
  // li要素を新しく作成する
  const childList = document.createElement('li');

  // 作成したli要素に「これはリスト要素です」というテキストを追加する
  childList.textContent = 'この船に必要な検査は○△×です';

  // 作成したli要素をul要素の子要素として末尾に追加する
  parentList.appendChild(childList);
});




