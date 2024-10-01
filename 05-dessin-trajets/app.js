//  Récupere le canvas dans le DOM
const canvas = document.getElementById('canvas');

//  Récupere le contexte du canvas
let ctx = canvas.getContext('2d');


//  dessin libre
ctx.beginPath();

// taille de bordure
ctx.lineWidth = "8";

//  couleurs bordures & couleurs
ctx.strokeStyle = "green";
ctx.filleStyle = 'red';

//  appliquer la form rectangle
ctx.rect(50,50,50,50);

//  appliquer bordure
ctx.stroke();


// remplissage
ctx.fill()