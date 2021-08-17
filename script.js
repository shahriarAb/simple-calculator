function conversion1(){
    let previousValue = parseFloat(document.getElementById('screen').innerText);
    return previousValue;
}
function conversion2(){

}
document.getElementById('clear').addEventListener('click',function(){
    document.getElementById('screen').innerText = '';
});
document.getElementById('one').addEventListener('click',function(){
    document.getElementById('screen').innerText = document.getElementById('screen').innerText + '1';
});
document.getElementById('two').addEventListener('click',function(){
    document.getElementById('screen').innerText = document.getElementById('screen').innerText + '2';
});
document.getElementById('three').addEventListener('click',function(){
    document.getElementById('screen').innerText = document.getElementById('screen').innerText + '3';
});
document.getElementById('four').addEventListener('click',function(){
    document.getElementById('screen').innerText = document.getElementById('screen').innerText + '4';
});
document.getElementById('five').addEventListener('click',function(){
    document.getElementById('screen').innerText = document.getElementById('screen').innerText + '5';
});
document.getElementById('six').addEventListener('click',function(){
    document.getElementById('screen').innerText = document.getElementById('screen').innerText + '6';
});
document.getElementById('seven').addEventListener('click',function(){
    document.getElementById('screen').innerText = document.getElementById('screen').innerText + '7';
});
document.getElementById('eight').addEventListener('click',function(){
    document.getElementById('screen').innerText = document.getElementById('screen').innerText + '8';
});
document.getElementById('nine').addEventListener('click',function(){
    document.getElementById('screen').innerText = document.getElementById('screen').innerText + '9';
});
document.getElementById('zero').addEventListener('click',function(){
    document.getElementById('screen').innerText = document.getElementById('screen').innerText + '0';
});
document.getElementById('point').addEventListener('click',function(){
    document.getElementById('screen').innerText = document.getElementById('screen').innerText + '.';
});
document.getElementById('plus').addEventListener('click',function(){
    const value1 = conversion1();
});
document.getElementById('minus').addEventListener('click',function(){
    
});
document.getElementById('mul').addEventListener('click',function(){
    
});
document.getElementById('div').addEventListener('click',function(){

});
document.getElementById('equal').addEventListener('click',function(){

})