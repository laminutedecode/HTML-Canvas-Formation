//  Récupere le canvas dans le DOM
const canvas = document.getElementById('canvas');

//  Récupere le contexte du canvas
let ctx = canvas.getContext('2d');





// font
ctx.font = '40px serif'


// contour texte
ctx.strokeText('hello', 40, 80)

// remplissage
ctx.fillStyle = 'crimson';
ctx.fillText('hello', 40, 80)