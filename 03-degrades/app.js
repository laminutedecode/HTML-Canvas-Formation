//  Récupere le canvas dans le DOM
const canvas = document.getElementById('canvas');

//  Récupere le contexte du canvas
let ctx = canvas.getContext('2d');


//  dégradé linear
const gradient = ctx.createLinearGradient(50,50,150,150);
gradient.addColorStop(0,'red');
gradient.addColorStop(1,'blue');

ctx.fillStyle = gradient;

ctx.fillRect(50,50,100,100);



//  dégradé radial
const gradientRadial = ctx.createRadialGradient(100,100,20,100,100,100);
gradientRadial.addColorStop(0,'red');
gradientRadial.addColorStop(1,'blue');

ctx.fillStyle = gradientRadial;

ctx.fillRect(50,50,100,100);



// 2émé méthode
//  avec une boucle for

for(let  i = 0; i < 6; i++){
    for(j=0; j < 6; j++){
        ctx.fillStyle = `rgb(${255 - 42.5 * i}), ${255 - 42.5 * j}, ${42.5*i}`

        ctx.fillRect(j*25,i*25,25,25)
    }
}