console.log('[DevSoutinho] Flappy Bird');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d'); //Jogo em 2D

// [Plano de Fundo]

const planoDeFundo = {
  spriteX: 390,
  spriteY: 0,
  largura: 275,
  altura: 204,
  x: 0,
  y: canvas.height - 204,
  desenha() {
    contexto.fillStyle = '#70c5ce';
    contexto.fillRect(0, 0, canvas.width, canvas.height);

    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      planoDeFundo.x, planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura,
    );

    contexto.drawImage(
      sprites,
      planoDeFundo.spriteX, planoDeFundo.spriteY,
      planoDeFundo.largura, planoDeFundo.altura,
      (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
      planoDeFundo.largura, planoDeFundo.altura,
    );
  }
}

// [Chão]
const chao = {
  spriteX: 0,
  spriteY: 610,
  largura: 224,
  altura: 112,
  x: 0,
  y: canvas.height - 112,
  desenha() {
    contexto.drawImage(
      sprites, //image,
      chao.spriteX, chao.spriteY, //Sprite x, Sprite y, (Photoshop)
      chao.largura, chao.altura, // Tamanho do recorte do Sprite (Width e Height que está no arq(Photoshop))
      chao.x, chao.y, //dx, dy (Dentro do canvas)
      chao.largura, chao.altura, //dWidyh, dheight (Dentro do canvas)
    );

    contexto.drawImage(
      sprites, //image,
      chao.spriteX, chao.spriteY, //Sprite x, Sprite y, (Photoshop)
      chao.largura, chao.altura, // Tamanho do recorte do Sprite (Width e Height que está no arq(Photoshop))
      (chao.x + chao.largura), chao.y, //dx, dy (Dentro do canvas)
      chao.largura, chao.altura, //dWidyh, dheight (Dentro do canvas)
    );  
  }
}

const flappyBird = { //Objeto
  spriteX: 0,
  spriteY: 0,
  largura: 33,
  altura: 24,
  x: 10,
  y: 50,
  desenha() {
    contexto.drawImage(
      sprites, //image,
      flappyBird.spriteX, flappyBird.spriteY, //Sprite x, Sprite y, (Photoshop)
      flappyBird.largura, flappyBird.altura, // Tamanho do recorte do Sprite (Width e Height que está no arq(Photoshop))
      flappyBird.x, flappyBird.y, //dx, dy (Dentro do canvas)
      flappyBird.largura, flappyBird.altura, //dWidyh, dheight (Dentro do canvas)
    );
  }
}

function loop() {
  planoDeFundo.desenha();
  chao.desenha();
  flappyBird.desenha();

  requestAnimationFrame(loop);
}

loop();




// // [Plano de Fundo]
// const planoDeFundo = {
//   spriteX: 390,
//   spriteY: 0,
//   largura: 275,
//   altura: 204,
//   x: 0,
//   y: canvas.height - 204,
//   desenha() {
//     contexto.fillStyle = '#70c5ce';
//     contexto.fillRect(0,0, canvas.width, canvas.height)

//     contexto.drawImage(
//       sprites,
//       planoDeFundo.spriteX, planoDeFundo.spriteY,
//       planoDeFundo.largura, planoDeFundo.altura,
//       planoDeFundo.x, planoDeFundo.y,
//       planoDeFundo.largura, planoDeFundo.altura,
//     );

//     contexto.drawImage(
//       sprites,
//       planoDeFundo.spriteX, planoDeFundo.spriteY,
//       planoDeFundo.largura, planoDeFundo.altura,
//       (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
//       planoDeFundo.largura, planoDeFundo.altura,
//     );
//   },
// };

// // [Chao]
// const chao = {
//   spriteX: 0,
//   spriteY: 610,
//   largura: 224,
//   altura: 112,
//   x: 0,
//   y: canvas.height - 112,
//   desenha() {
//     contexto.drawImage(
//       sprites,
//       chao.spriteX, chao.spriteY,
//       chao.largura, chao.altura,
//       chao.x, chao.y,
//       chao.largura, chao.altura,
//     );

//     contexto.drawImage(
//       sprites,
//       chao.spriteX, chao.spriteY,
//       chao.largura, chao.altura,
//       (chao.x + chao.largura), chao.y,
//       chao.largura, chao.altura,
//     );
//   },
// };

// const flappyBird = {
//   spriteX: 0,
//   spriteY: 0,
//   largura: 33,
//   altura: 24,
//   x: 10,
//   y: 50,
//   desenha() {
//     contexto.drawImage(
//       sprites,
//       flappyBird.spriteX, flappyBird.spriteY, // Sprite X, Sprite Y
//       flappyBird.largura, flappyBird.altura, // Tamanho do recorte na sprite
//       flappyBird.x, flappyBird.y,
//       flappyBird.largura, flappyBird.altura,
//     );
//   }
// }

// function loop() {
//   planoDeFundo.desenha();
//   chao.desenha();
//   flappyBird.desenha();

//   flappyBird.y = flappyBird.y + 1;

//   requestAnimationFrame(loop);
// }

// loop();