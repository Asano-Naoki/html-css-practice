
const totalButton = document.getElementById('total-btn');
const removeChoiceButton = document.getElementById('remove-choice-btn')
const total = document.getElementById('total');
const selects = document.getElementsByTagName('select');
const trs = document.getElementsByTagName('tr');

removeChoiceButton.addEventListener('click', () => {
  for (let i = 1; i < trs.length; i++) {
    let theNumberOfOptions = 4; 
    for (let j = 6; j > 2; j--) {
      let target = trs[i].children[j].textContent;
      for (let k = 0; k < theNumberOfOptions; k++) {
        let option = selects[i-1].children[k].textContent;
        if (target != '' && target == option) {
          selects[i-1].children[k].remove();
          theNumberOfOptions--;
        }
      }
    }
  }
});

totalButton.addEventListener('click', () => {
  //空白、○、△、×をそれぞれ初期化
  let a = 0;
  let b = 0
  let c = 0;
  let d = 0;

  //selectタグの値をループで取得して、その値をカウント
  for (let i = 0; i < selects.length; i++) {
    switch (selects[i].value) {
      case 'a':
        a++;
        break;
      case 'b':
        b++;
        break;
      case 'c':
        c++;
        break;
      case 'd':
        d++;
        break;
    }
  }

  total.textContent = '2023年の検査は、検査なしが' + a + '件、○が' + b + '件、△が' + c + '件、×が' + d + '件です。';
});


