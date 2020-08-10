console.log('[DevSoutinho] Flappy Bird');

let frames = 0;
const som_HIT = new Audio();
som_HIT.src = './efeitos/hit.wav';

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
};

// [Chão]
function criaChao() {
  const chao = {
    spriteX: 0,
    spriteY: 610,
    largura: 224,
    altura: 112,
    x: 0,
    y: canvas.height - 112,
    atualiza() {
      const movimentoDoChao = 1;
      const repeteEm = chao.largura / 2;
      const movimentacao = chao.x - movimentoDoChao;

      // console.log('[chao.x]', chao.x);
      // console.log('[repeteEm]', repeteEm);
      // console.log('[movimentacao]', movimentacao % repeteEm);

      chao.x = movimentacao % repeteEm;
    },
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
  return chao;
}

function fazColisao(flappyBird, chao) {
  const flappyBirdY = flappyBird.y + flappyBird.altura;
  const chaoY = chao.y;

  if(flappyBirdY >= chaoY) {
    return true;
  } 

  return false;
};

// [Passarinho]
function criaFlappyBird() {
  const flappyBird = { //Objeto
    spriteX: 0,
    spriteY: 0,
    largura: 33,
    altura: 24,
    x: 10,
    y: 50,
    pulo: 4.6,
    pula() {
      console.log('Devo pular');
      console.log('[antes]', flappyBird.valocidade);
      flappyBird.valocidade = - flappyBird.pulo;
      console.log('[depois]', flappyBird.valocidade);
    },
    gravidade: 0.25,
    valocidade: 0,
    atualiza(){
      if(fazColisao(flappyBird, globais.chao)) {
        console.log('Fez colisão');
        som_HIT.play();

        setTimeout(() => {
          mudaParaTela(Telas.INICIO);

        }, 500);
        return;
      }
  
      flappyBird.valocidade = flappyBird.valocidade + flappyBird.gravidade;
      flappyBird.y = flappyBird.y + flappyBird.valocidade;
    },
    movimentos: [
      { spriteX:0, spriteY: 0, }, //asa pra cima
      { spriteX:0, spriteY: 26, }, //asa no meio
      { spriteX:0, spriteY: 52, }, //asa pra baixo
      { spriteX:0, spriteY: 26, }, //asa no meio
    ],
    frameAtual: 0,
    atualizaOFrameAtual() {
      const intervaloDeFrames = 10;
      const passouOIntervalo = frames % intervaloDeFrames === 0;
      console.log('[passouOIntervalo]', passouOIntervalo);
      if(passouOIntervalo) {
        const baseDoIncremento = 1;
        const incremento = baseDoIncremento + flappyBird.frameAtual;
        const baseRepeticao = flappyBird.movimentos.length;
        flappyBird.frameAtual = incremento % baseRepeticao
      }
      // console.log('[incremento]', incremento);
      // console.log('[baseRepeticao]', baseRepeticao);
      // console.log('[frame]', incremento % baseRepeticao);
    },
    desenha() {
      flappyBird.atualizaOFrameAtual();
      const { spriteX, spriteY } = flappyBird.movimentos[flappyBird.frameAtual];

      contexto.drawImage(
        sprites, //image,
        spriteX, spriteY, //Sprite x, Sprite y, (Photoshop)
        flappyBird.largura, flappyBird.altura, // Tamanho do recorte do Sprite (Width e Height que está no arq(Photoshop))
        flappyBird.x, flappyBird.y, //dx, dy (Dentro do canvas)
        flappyBird.largura, flappyBird.altura, //dWidyh, dheight (Dentro do canvas)
      );
    }
  }
  return flappyBird;
};

//[MensagemGetReady]
const mensagemGetReady = {
  spriteX: 134,
  spriteY: 0,
  largura: 174,
  altura: 152,
  x: (canvas.width / 2) -174 / 2,
  y: 50,
  desenha() {
    contexto.drawImage(
      sprites,
      mensagemGetReady.spriteX, mensagemGetReady.spriteY,
      mensagemGetReady. largura, mensagemGetReady.altura,
      mensagemGetReady.x, mensagemGetReady.y,
      mensagemGetReady.largura, mensagemGetReady.altura,
    );
  }
};

//
// [Telas]
//
const globais = {};
let telaAtiva = {};
function mudaParaTela(novaTela) {
  telaAtiva = novaTela;

  if(telaAtiva.inicializa) {
    telaAtiva.inicializa();
  }
};

const Telas = {
  INICIO: {
    inicializa() {
      globais.flappyBird = criaFlappyBird();
      globais.chao = criaChao();
    },
    desenha() {
      planoDeFundo.desenha();
      globais.chao.desenha();
      globais.flappyBird.desenha();
      mensagemGetReady.desenha();
    },
    click() {
      mudaParaTela(Telas.JOGO);
    },
    atualiza() {
      globais.chao.atualiza();
    }
  }
};

Telas.JOGO = {
  desenha() {
    planoDeFundo.desenha();
    globais.chao.desenha();
    globais.flappyBird.desenha();
  },
  click() {
    globais.flappyBird.pula();
  },
  atualiza() {
    globais.flappyBird.atualiza();
  }
};

function loop() {

  telaAtiva.desenha();
  telaAtiva.atualiza();

  frames = frames + 1;
  requestAnimationFrame(loop);
}

window.addEventListener('click', function() {
  if(telaAtiva.click) {
    telaAtiva.click();
  }
});

mudaParaTela(Telas.INICIO);
loop();