//scene 3
// variables de l'escena 3 per obtenir l'element
var redknightplaylast = document.getElementById('redknight3')
var orangeprincess = document.getElementById('orangeprincess')
var bnextanimation3 = document.getElementById('next3');
var bscene3 = document.getElementById('botoplay3');
// event on click per realitzar l'acció mitjançant canvis en la propietat .style.animationName 
bscene3.onclick = function () {
    bscene3.style.visibility = "hidden";
    redknightplaylast.style.animationName = "trolled";
    orangeprincess.style.animationName = "trollaso";
    bnextanimation3.style.visibility = "visible";
}