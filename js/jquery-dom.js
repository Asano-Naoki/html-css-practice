
$('#calculate').on('click', ()=>{
    const left = $('#left').val();
    const right = $('#right').val();
    const quotient = Number(left) / Number(right);
    const remainder = Number(left) % Number(right);
    $("#quotient").text(Math.trunc(quotient));
    $("#remainder").text(remainder);
});

let num = 0;

$('#list').on('click', ()=>{
    num++;
    const li = $('<li></li>').text('appendで追加' + num);
    $('ul').append(li);
});

$('#random').on('click', ()=>{
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

    $("#random-result").text(result);
});

$('#ftoc').on('click', ()=>{
    const f = $('#f').val();
    const FtoC = (fDegree) => {
        return (fDegree - 32) / 1.8;
    }
    const c = FtoC(Number(f));
    result = '華氏' + f + '度は摂氏' + c + '度です。'
    $('#ftoc-result').text(result);
});

// back-btnというidを持つHTML要素を取得し、定数に代入する
const backBtn = $('#back-btn');

// 画面がスクロールされたときにイベント処理を実行する
$(window).on('scroll', () => {
    // 画面のスクロール量をpx（ピクセル）数で取得する
    const scrollValue = $(this).scrollTop();
  
    // 画面のスクロール量が50px以上であれば、「TOPに戻る」ボタンを表示する
    if (scrollValue >= 50) {
      backBtn.css('display', 'inline');
    }
    // 画面のスクロール量がそれ以外（50px未満）であれば、「TOPに戻る」ボタンを非表示にする
    else {
      backBtn.css('display', 'none');
    }
});

