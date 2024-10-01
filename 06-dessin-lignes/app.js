//  Récupere le canvas dans le DOM
const canvas = document.getElementById('canvas');

//  Récupere le contexte du canvas
let ctx = canvas.getContext('2d');


//  dessin libre
ctx.beginPath();

//  démarre de
ctx.moveTo(75,50);

// jusqu'a
ctx.lineTo(100,75);
ctx.lineTo(100,25);
ctx.lineTo(75,50);


//  contour
ctx.stroke();


//  remplissage
ctx.fill();