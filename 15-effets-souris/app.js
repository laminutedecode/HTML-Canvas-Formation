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

var x = 200;
var y = 200;

function init(){
 requestAnimationFrame(init);
ctx.clearRect(0,0,innerWidth, innerHeight);

ctx.beginPath();
ctx.arc(x,y,60,0, Math.PI * 2);
ctx.strokeStyle = 'red';
ctx.stroke();
 

canvas.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
}) 

}
init()