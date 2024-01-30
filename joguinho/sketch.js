var xminbotao=150
var largurabotao=200
var xmaxbotao = xminbotao + largurabotao
var yminbotao = 200
var alturabotao = 60
var ymaxbotao = yminbotao + alturabotao

var yminbotao1 =280
var ymaxbotao1 = yminbotao1+ alturabotao

var yminbotao2=120
var ymaxbotao2= yminbotao2+alturabotao

var imagemEu
var fonte

var tela = 0

function preload(){
imagemEu = loadImage('talvezz.png')
fonte = loadFont('Anton-Regular.ttf')  
imagemFase = loadImage('fase.png')
fundo = loadImage('fundo.png')
fundo1 = loadImage('fundo1.png')
fundo2 = loadImage('fundo2.png')
}

function keyPressed() {
   if(key=="Escape") {
       tela=0
  }
}

function menu(){
  fill(0)
  background(500)
  image(fundo,0,0)
  textSize(50)
  fill(127,255,212)
  textFont(fonte)
  text('TESTE COMUNICATIVO',60,70)
  
  
                   //instruçao
  
  
  
  if(mouseX>xminbotao && mouseX<xmaxbotao && mouseY > yminbotao && mouseY < ymaxbotao ){
    fill(212, 255, 127)
    if(mouseIsPressed){
      tela = 2
    }
  } 
  else{
    noFill()
  }
  
  rect(xminbotao,yminbotao, largurabotao, alturabotao,10)
  textSize(25)
  fill(0)
  text('instrução',xminbotao + 50,yminbotao +35)
  
  
                        //creditos
  
  if(mouseX>xminbotao && mouseX<xmaxbotao && mouseY > yminbotao1&& mouseY < ymaxbotao1){
    fill(127, 212, 255)
    if(mouseIsPressed){
      tela = 1
    }
  } 
  else{
    noFill()
  }
  
  rect(xminbotao,yminbotao1,largurabotao, alturabotao,10)
  textSize(25)
  fill(0)
  text('créditos',xminbotao + 50,yminbotao1+35)
  
  
                     //jogar
  
  
    if(mouseX>xminbotao && mouseX<xmaxbotao && mouseY > yminbotao2&& mouseY < ymaxbotao2){
    fill(212, 127, 255)
    if(mouseIsPressed){
      tela = 3
    }
  } 
  else{
    noFill()
  }
  
  rect(xminbotao,yminbotao2,largurabotao, alturabotao,10)
  textSize(25)
  fill(0)
  text('jogar',xminbotao + 70,yminbotao2+35)
  
  
}

function instrucoes(){
  background(500);
  image(fundo2,0,0)
  textSize(60)
  textFont(fonte)
  fill(212, 255, 127)
  text('INSTRUÇÕES',120,80)
  textSize(22);
  fill(0)
  text('• Utilize sua seta para cima para permitir um fluente passar e para baixo para recusar a sua entrada',50,150,400)
  textSize(22);
  text('• Aperte esc para voltar ao menu inicial',50,240,400)
  textSize(22);
  text('• O objetivo é deixar a maior quantidade pessoas qualificadas entrarem em 60 segundos',50,280,400)
  textSize(22)
  text('• Se você deixar mais que 3 desqualificados entrarem na sala voce perde o jogo',50,350,400)
  
}

function creditos(){
  background(500);
  image(fundo1,0,0)
  textFont(fonte)
  textSize(60)
  fill(127, 212, 255)
  text('CRÉDITOS',145,80)
  textSize(25)
  fill(0)
  text('IGOR MATIAS',40,170)
  textSize(20)
  text('• Programador',20,200)
  textSize(20)
  text('• Estudante de ciencia e tecnologia da universidade Federal do Rio Grande do Norte',20, 230,160)
  image(imagemEu,220,120)
}

function game(){
  background(500)
  textSize(36)
  text('primeira fase',30,90)
  image(imagemFase,0,0)
  textFont(fonte)
  textSize(45)
  text('ABRASSO',180,105)
  
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  
  if(tela==0){
     menu()
  }
  if(tela==1){
    creditos()
  }
  if(tela==2){
    instrucoes()
  }
  if(tela==3){
    game()
  }
}