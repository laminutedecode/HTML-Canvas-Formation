//  Récupere le canvas dans le DOM
const canvas = document.getElementById('canvas');

//  Récupere le contexte du canvas
let ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    
  canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   init();

}) 

function init(){
ctx.beginPath();
ctx.arc(150,150,1,0,2 * Math.PI);
ctx.stroke();
ctx.translate(150,150);
ctx.rotate(180 * Math.PI / 180);
ctx.fillRect(50,50,100,50);
}


init()