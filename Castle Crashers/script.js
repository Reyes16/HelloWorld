//scene 1
// variables de l'escena 1 per obtenir l'element
var ratacanoplay = document.getElementById('ratacano');
var bplayanimation = document.getElementById('botoplay');
var canoplay = document.getElementById('redknight');
var barbarplay = document.getElementById('barbar');
var bnextanimation = document.getElementById('next');
// event on click per realitzar l'acció mitjançant canvis en la propietat .style.animationName 
bplayanimation.onclick = function () {
    ratacanoplay.style.animationName = "ratacano";
    canoplay.style.animationName = "activarcano";
    barbarplay.style.animationName = "barbardead";
    bplayanimation.style.visibility = "hidden";
    bnextanimation.style.visibility = "visible";
}