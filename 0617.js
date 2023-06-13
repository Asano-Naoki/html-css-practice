// 宿題１
const consoleBtn = document.getElementById('console-btn');
consoleBtn.addEventListener('click', () => {
  console.log('ボタンをクリックしました');
});

// 宿題２
const countBtn = document.getElementById('count-btn');
const string = document.getElementById('string');
countBtn.addEventListener('click', () => {
  const countResult = document.createElement('p')
  console.log('「' + string.textContent + '」の文字数は' + string.textContent.length + '文字です');
});

// 宿題３
const tableBtn = document.getElementById('table-btn');
const table = document.getElementById('table');
tableBtn.addEventListener('click', () => {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');

  td1.textContent = '2023年6月17日';
  td2.textContent = 'DOMの発展';

  tr.appendChild(td1);
  tr.appendChild(td2);
  table.appendChild(tr);
});




