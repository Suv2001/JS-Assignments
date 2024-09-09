var num = Number(0);
function count(x){
    if(x === '+'){
        num++;   
    }
    if(x === '-'){
        if(num>0)
        num--;
    }
    if(x === '0'){
        num = 0;
    }  
    document.getElementById('output').innerText = num;
}
