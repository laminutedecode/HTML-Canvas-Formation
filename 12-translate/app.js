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
//  Save(); sauvegarde les propriétées de la forme 
// Restor(); donne a la forme qui suit les proprietées du save 
function init(){
ctx.translate(50,50);
// tous les éléments seont en translate à partir d'ici
ctx.fillRect(0,0,100,150);
ctx.fillRect(100,100,100,150);

// renisialise les parametre de translate
ctx.setTransform(1,0,0,1,0,0);
ctx.fillRect(0,0,100,150)
}


init()