//  Récupere le canvas dans le DOM
const canvas = document.getElementById('canvas');

//  Récupere le contexte du canvas
let ctx = canvas.getContext('2d');


// dessiner un rectangle
ctx.rect(50,50,100,100);

// appliquer une couleur de remplissage
ctx.fillStyle = 'red';

// appliquer un rectangle rempli
ctx.fillRect(50,50,100,100);

// couleurs bordures
ctx.strokeStyle = 'blue';

// dessiner un rectangle bordures
ctx.strokeRect(50,50,100,100);


// gomme
ctx.clearRect(50,50,50,50)


