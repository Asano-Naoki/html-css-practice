
document.getElementById('calculate').addEventListener('click', ()=>{
    const left = document.getElementById('left').value;
    const right = document.getElementById('right').value;
    const quotient = Number(left) / Number(right);
    const remainder = Number(left) % Number(right);
    document.getElementById("quotient").textContent = Math.trunc(quotient);
    document.getElementById("remainder").textContent = remainder;
})

document.getElementById('list').addEventListener('click', ()=>{
    const li = document.createElement('li');
    li.textContent = '追加されました';
    li.style.color = 'blue';    
    document.querySelector('ul').appendChild(li);
})

document.getElementById('random').addEventListener('click', ()=>{
    const num = Math.floor( Math.random() * 6 ) + 1;
    let result = num + 'は';
    
    if ((num % 3 === 0 ) && (num % 2 === 0)) {
        result = result + "偶数でかつ3の倍数です";
    }
    else if (num % 3 === 0) {
        result = result + "3の倍数です";
    }
    else if (num % 2 === 0){
        result = result + "偶数です";
    }
    else {
        result = result + "その他です";
    }

    document.getElementById("random-result").textContent = result;
})

document.getElementById('ftoc').addEventListener('click', ()=>{
    const f = document.getElementById('f').value;
    const FtoC = (fDegree) => {
        return (fDegree - 32) / 1.8;
    }
    const c = FtoC(Number(f));
    result = '華氏' + f + '度は摂氏' + c + '度です。'
    document.getElementById("ftoc-result").textContent = result;
})


// back-btnというidを持つHTML要素を取得し、定数に代入する
const backBtn = document.getElementById('back-btn');

// 画面がスクロールされたときにイベント処理を実行する
window.addEventListener('scroll', () => {
    // 画面のスクロール量をpx（ピクセル）数で取得する
    const scrollValue = document.scrollingElement.scrollTop;
  
    // 画面のスクロール量が50px以上であれば、「TOPに戻る」ボタンを表示する
    if (scrollValue >= 50) {
      backBtn.style.display = 'inline';
    }
    // 画面のスクロール量がそれ以外（50px未満）であれば、「TOPに戻る」ボタンを非表示にする
    else {
      backBtn.style.display = 'none';
    }
  });

