
const totalButton = document.getElementById('total-btn');
const total = document.getElementById('total');
const selects = document.getElementsByTagName("select");


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


