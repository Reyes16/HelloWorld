//scene 2
// variables de l'escena 2 per obtenir l'element
var bscene2 = document.getElementById('botoplay2');
var redknightplay = document.getElementById('redknight1');
var pinknightplay = document.getElementById('pinkknight');
var bnextanimation2 = document.getElementById('next2');
// event on click per realitzar l'acció mitjançant canvis en la propietat .style.animationName 
bscene2.onclick = function () {
    bscene2.style.visibility = "hidden";
    redknightplay.style.animationName = "combatred";
    pinknightplay.style.animationName = "combatpink";
    bnextanimation2.style.visibility = "visible";
}
