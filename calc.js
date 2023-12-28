var screen = document.getElementById('screen');
function btnclick(value){
    screen.value += value;
}
function clearScreen(){
    screen.value = "";
}

function result(){
    var res = eval(screen.value);
    screen.value = res;
}