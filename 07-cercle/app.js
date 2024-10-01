//  Récupere le canvas dans le DOM
const canvas = document.getElementById('canvas');

//  Récupere le contexte du canvas
let ctx = canvas.getContext('2d');


//  dessin libre
ctx.beginPath();

ctx.arc(75,95,50,0,1* Math.PI);
ctx.fillStyle = "red";
ctx.fill()