
//確認ボタン
const confirmButton = document.getElementById('confirm-btn');
confirmButton.addEventListener('click', () => {
  //必要な変数の宣言
  let inspectItem = ''
  let certificateItem = ''

  //性別の判定
  switch (document.forms.myForm.gender.value) {
    case 'male':
      inspectItem = '男性用検査あいうえお';
      certificateItem = '男性証書ABC';
      break;
    case 'female':
      inspectItem = '女性用検査かきくけこ';
      certificateItem = '女性証書DEF';
      break;
    case 'others':
      inspectItem = 'その他用検査さしすせそ';
      certificateItem = 'その他証書GHI';
      break;
    }

  //必要な検査項目
  const inspectList = document.createElement('li');
  inspectList.textContent = inspectItem;
  document.getElementById('inspect').appendChild(inspectList);

  //発行される証書
  const certificateList = document.createElement('li');
  certificateList.textContent = certificateItem;
  document.getElementById('certificate').appendChild(certificateList);

});


