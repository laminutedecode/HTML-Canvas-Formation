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
    ctx.font = '40px serif';
    ctx.fillStyle = 'red';
    ctx.fillText('hello', 40, 80);
}


init()