function generateNumber(max, min){
    return Math.floor(Math.random()*(max -min+1)+min);
}
document.getElementById("btn-generate").addEventListener("click",inBtn);
function inBtn(){
    var max=1;
    var min=10000;
    var randomNumber= generateNumber(max, min);
    document.getElementById("result").textContent=randomNumber;
}
/*just in function inBtn max and min is numbers that you used
in arguments of generateNumber function 
geneeratorNumber function parameters is max and min */