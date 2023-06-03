

document.getElementById('ftoc').addEventListener('click', ()=>{
    const f = document.getElementById('f').value;
    const FtoC = (fDegree) => {
        return (fDegree - 32) / 1.8;
    }
    const c = FtoC(Number(f));
    result = '華氏' + f + '度は摂氏' + c + '度です。'
    document.getElementById("ftoc-result").textContent = result;
})



