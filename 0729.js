
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



