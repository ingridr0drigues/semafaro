let verde="(0,255,0);"
let verdeApagado=" rgb( 0, 255, 0.4 )";
let amarelo =rgb ( 255,255,0);
let amareloApagado="rgba(255,255,0,04)"; 
let vermelho= "rgb( 255,0,0)";
let vermelhoapagado=rgba(255,0,0,4)";

let tempo= 0;
function setup()
  createCanvas( 600, 600);
)

function draw() {
  background( 255 );
  caixaSemaforo();
  switch ( true) {
    case tempo < 100:
       faseAberto();
       tempo++;
       break;
       case tempo <150:
      faseAtencão();
      tempo++;
      break;
      case tempo < 250:
      faseFechado();
      tempo++;
      break;
      default;
      tempo= 0;
  }
}

function faseFechado() {
   criaSemafaro( verdeApagado, 325,280);
   criaSemafaro( amareloApagado325,230);
   criaSemafaro( )
