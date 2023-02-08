function GetNum(num){
    var inputValue = document.getElementById('input')
    inputValue.value += num;
}
function getResult(){
    var inputValue = document.getElementById('input')
    input.value = eval(input.value);
}
function getClear(){
    var inputValue = document.getElementById('input')
    input.value = "";
}
function getRoot(){
    var inputValue = document.getElementById('input')
    input.value = Math.sqrt(input.value);
}
function sin(){
    var inputValue = document.getElementById('input')
    input.value=Math.sin(input.value);
}
function cos(){
    var inputValue = document.getElementById('input')
    input.value=Math.cos(input.value);
}
function tan(){
    var inputValue = document.getElementById('input')
    input.value=Math.tan(input.value);
}
function pow(){
    var inputValue = document.getElementById('input')
    input.value=Math.pow(input.value,2);
}