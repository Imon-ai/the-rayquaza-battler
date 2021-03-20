var rayquaza,rayquazaImg;
var area,areaImg;
var startBackground,startBackgroundImg;
var playButton,playButtonImg;
var gameOverImg,gameOver;
var pauseButton,pauseButtonImg;
var invisibleSprite;
var palkiaImg,dialgaImg,kyogreImg,deoxysImg,hoopaImg,giratinaImg,groudonImg,kyuremImg,zygardeImg,genesectImg, yveltalImg,energyBallImg,redLaserImg,blueLaserImg,yellowLaserImg;
var blueLaserGroup,redLaserGroup,yellowLaserGroup,energyBallGroup;
var restartButton,restartButtonImg;
var attackButton,attackButtonImg;
var rayquazaDragonAscent,rayquazaDragonAscentImg;
var coinGroup;
var yveltalAnime
var burst,burstAnime;

var palkiaGroup,dialgaGroup,giratinaGroup;
var deoxysGroup,hoopaGroup,groudonGroup,yveltalGroup;
var kyogreGroup,kyuremGroup,zygardeGroup;  
var burstImg;
var gameSound,rayquazaRoarSound;

var PLAY = 1;
var END = 0;
var gameState =PLAY;

var score = 0;
var points = 0;

function preload(){
  rayquazaImg = loadAnimation("Mega Rayquaza.gif");
  areaImg = loadImage("battle_field_genshin_impact_hd_games-1920x1080.jpg");
  playButtonImg = loadImage("play-151523_960_720.webp");
  startBackgroundImg = loadImage("rayquaza wallpaper.jpg");
  gameOverImg = loadImage("gameOver.png");
  pauseButtonImg = loadImage("Pause-Button-PNG-Image.png");
  palkiaImg = loadImage("250px-484Palkia.png");
  dialgaImg = loadImage("Dialga.png");
  kyogreImg = loadImage("Primal_Kyogre.png");
  deoxysImg = loadImage("deoxys.png");
  giratinaImg = loadImage("Giratina.png");
  hoopaImg = loadImage("hoopa-dechaine.png");
  groudonImg = loadImage("primal groudon.png");
  kyuremImg = loadImage("Kyurem_(anime_NB).png");
  zygardeImg = loadImage("zygarde_complete_forme_by_maniraptavia-d9ur5qo.png");
  genesectImg = loadImage("genesect-burn.png");

  burstAnime = loadAnimation("burst.gif");
  redLaserImg = loadImage("937-9377237_red-vermelho-laser-effect-efeito-lucianoballack-red-laser.png");
  energyBallImg = loadImage("purple beam.png");
  restartButtonImg = loadImage("restart img.png");
 
  coinImg = loadImage("coin.png");
  attackButtonImg = loadImage("attack button.png");
  
  yveltalAnime = loadAnimation("yveltal-1.gif");
  
  gameSound = loadSound("101 - opening.mp3");
  rayquazaRoarSound = loadSound("Rayquaza Roar.mp3");
}

function setup() {
 createCanvas(500,300);
  
  gameSound.loop();  
  
  area = createSprite(250,200,20,20);
  area.addImage(areaImg);
  area.scale = 1;
  area.velocityX = 0;
  
  rayquaza = createSprite(60,200,20,20);
  rayquaza.addAnimation("rayquaza",rayquazaImg);
  rayquaza.scale = 0.5;
  
  invisibleSprite = createSprite(100,25,220,50);
  
  //rayquaza.debug = true;
  rayquaza.setCollider("rectangle",20,30,220,150);
  
  pauseButton = createSprite(50,50,20,20);
  pauseButton.addImage(pauseButtonImg);
  pauseButton.scale = 0.08;
  
  blueLaserGroup = new Group();
  redLaserGroup = new Group();
  yellowLaserGroup = new Group();
  energyBallGroup = new Group();
  coinGroup = new Group();
  palkiaGroup = new Group();
  dialgaGroup = new Group();
  giratinaGroup = new Group();
  deoxysGroup = new Group();
  hoopaGroup = new Group();
  groudonGroup = new Group();
  kyogreGroup = new Group();
  kyuremGroup = new Group();
  zygardeGroup = new Group();
  yveltalGroup = new Group();
  genesectGroup = new Group();
  

  
  gameOver = createSprite(250,150,20,20);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.6;
  
  startBackground = createSprite(250,150,20,20);
  startBackground.addImage(startBackgroundImg);
  startBackground.scale = 1.8;
  
  playButton = createSprite(240,230,20,20);
  playButton.addImage(playButtonImg);
  playButton.scale = 0.06;
  
  bottomEdge = createEdgeSprites();
  topEdge = createEdgeSprites();
  
  attackButton = createSprite(430,240,20,20);
  attackButton.addImage("attack",attackButtonImg);
  attackButton.scale = 0.4;
  
}

function draw() {
  background(0);
  drawSprites();
  
  invisibleSprite.visible = false;
  invisibleSprite.x = rayquaza.x;
  
  
 if(mousePressedOver(playButton)) {
   gameState = PLAY; 
   startBackground.visible = false;
   playButton.visible = false;
   
   area.velocityX = -3;
   coinGroup.setVelocityXEach(-3); 
   
 } 
  
 if(gameState === PLAY) {
   
   
   coinGroup.setVelocityXEach(-3);
    palkiaGroup.setVelocityXEach(-1);
    dialgaGroup.setVelocityXEach(-1);
    giratinaGroup.setVelocityXEach(-1);
    deoxysGroup.setVelocityXEach(-1);
    hoopaGroup.setVelocityXEach(-1);
    yveltalGroup.setVelocityXEach(-1);
    zygardeGroup.setVelocityXEach(-1);
    genesectGroup.setVelocityXEach(-1);
    groudonGroup.setVelocityXEach(-1);
    kyogreGroup.setVelocityXEach(-1);
    kyuremGroup.setVelocityXEach(-1);
  
   
   
  rayquaza.visible = true; 

  gameOver.visible = false; 
   
 if(mouseX < 150) {  
  rayquaza.y = World.mouseY ;
 }
   pokemonSelection();
   spawnCoin(); 
   
  if(mousePressedOver(attackButton)) {
    rayquazaRoarSound.play();
    rayquazaAttack();
  }
 
   if(rayquaza.isTouching(coinGroup)) {
   coinGroup.destroyEach();
   points = points + 1;  
  } 
  
  if(redLaserGroup.isTouching(palkiaGroup)) {
  
  
    redLaserGroup.destroyEach();
    palkiaGroup.destroyEach();   
    
  }  
   
    if(redLaserGroup.isTouching(dialgaGroup)) {
    redLaserGroup.destroyEach();
    dialgaGroup.destroyEach();     
  }  
    
    if(redLaserGroup.isTouching(giratinaGroup)) {
    redLaserGroup.destroyEach();
    giratinaGroup.destroyEach();  
  }  
    
    if(redLaserGroup.isTouching(deoxysGroup)) {
    
    redLaserGroup.destroyEach();
    deoxysGroup.destroyEach();
  
  }  
    
    if(redLaserGroup.isTouching(hoopaGroup)) {
    
    redLaserGroup.destroyEach();
    hoopaGroup.destroyEach();
         
  }  
    
    if(redLaserGroup.isTouching(groudonGroup)) {
    redLaserGroup.destroyEach();
    groudonGroup.destroyEach();
  
  }  
    
    if(redLaserGroup.isTouching(kyogreGroup)) {
  
    redLaserGroup.destroyEach();
    kyogreGroup.destroyEach();
       
  }  
    
    if(redLaserGroup.isTouching(kyuremGroup)) {
  
    redLaserGroup.destroyEach();
    kyuremGroup.destroyEach();
       
  }  
    
    if(redLaserGroup.isTouching(zygardeGroup)) {
  
      redLaserGroup.destroyEach();
    zygardeGroup.destroyEach();
       
  }  
    
    if(redLaserGroup.isTouching(yveltalGroup)) {
    
      redLaserGroup.destroyEach();
    yveltalGroup.destroyEach(); 
  
    }    
     if(redLaserGroup.isTouching(genesectGroup)) {
    redLaserGroup.destroyEach();
    genesectGroup.destroyEach();
        
}
  
  if(rayquaza.isTouching(invisibleSprite)) {
    rayquaza.y = 100;
  } 
  if(area.velocityX < 0) {
     score = score + Math.round(getFrameRate()/60);
  }
  
  
  if(mousePressedOver(pauseButton)) {
    pause();
    
  }
   
  if(rayquaza.isTouching(palkiaGroup)||
     rayquaza.isTouching(dialgaGroup)||
     rayquaza.isTouching(giratinaGroup)||
     rayquaza.isTouching(deoxysGroup)||
    rayquaza.isTouching(hoopaGroup)||
    rayquaza.isTouching(groudonGroup)||
    rayquaza.isTouching(kyogreGroup)||
    rayquaza.isTouching(kyuremGroup)||
    rayquaza.isTouching(zygardeGroup)||
    rayquaza.isTouching(yveltalGroup)||
    rayquaza.isTouching(genesectGroup)) {
    gameState = END;
  }
 } 
  
 if(gameState === END) {
   
   gameOver.visible = true; 
   rayquaza.visible = false;
   playButton.visible = true;
  
   
   
   area.velocityX = 0;
   coinGroup.setVelocityXEach(0);
   dialgaGroup.setVelocityXEach(0);
   palkiaGroup.setVelocityXEach(0);
   giratinaGroup.setVelocityXEach(0);
   hoopaGroup.setVelocityXEach(0);
   deoxysGroup.setVelocityXEach(0);
   groudonGroup.setVelocityXEach(0);
   kyogreGroup.setVelocityXEach(0);
   kyuremGroup.setVelocityXEach(0);
   yveltalGroup.setVelocityXEach(0);
   zygardeGroup.setVelocityXEach(0);
   genesectGroup.setVelocityXEach(0);
   
   area.velocityX = 0;
   coinGroup.setLifetimeEach(-2);
   dialgaGroup.setLifetimeEach(-2);
   palkiaGroup.setLifetimeEach(-2);
   giratinaGroup.setLifetimeEach(-2);
   hoopaGroup.setLifetimeEach(-2);
   deoxysGroup.setLifetimeEach(-2);
   groudonGroup.setVelocityXEach(-2);
   kyogreGroup.setVelocityXEach(-2);
   kyuremGroup.setVelocityXEach(-2);
   yveltalGroup.setVelocityXEach(-2);
   zygardeGroup.setVelocityXEach(-2);
   genesectGroup.setVelocityXEach(-2);
   
  if(mousePressedOver(playButton)) {
    gameState = PLAY;
    score = 0;
   points = 0;
    coinGroup.destroyEach();
    palkiaGroup.destroyEach();
    dialgaGroup.destroyEach();
    giratinaGroup.destroyEach();
    deoxysGroup.destroyEach();
    hoopaGroup.destroyEach();
    yveltalGroup.destroyEach();
    zygardeGroup.destroyEach();
    genesectGroup.destroyEach();
   
  } 
 }
  
   
  
 if(area.x < 70) {
  area.x = area.width/2;
   
}
  
  
  rayquaza.collide(invisibleSprite);
  rayquaza.collide(topEdge);
  
  coinGroup.depth = startBackground.depth;
  startBackground.depth += 1;
  coinGroup.depth = playButton.depth;
  playButton.depth += 1;
   
  fill("white");
  text("score:" + score ,410,50);
  text("points:" + points ,410,30); 
}

function pause() {
  
  playButton.visible = true;
  playButton.changeImage(restartButtonImg);
  playButton.scale = 0.25;
  startBackground.visible = true;
  area.velocityX = 0;
  coinGroup.setVelocityXEach(0);
  
  
  if(playButton.addImage(restartButtonImg) && mousePressedOver(playButton)) {
    
    gameState = PLAY;
    playButton.changeImage(playButtonImg);
    playButton.scale = 0.06;
    playButton.visible = false;
    
  }
}

function spawnCoin() {
  
 if(World.frameCount % 370 === 0){
   var coin = createSprite(550,Math.round(random(120,250)),20,20);
   coin.addImage(coinImg);
   coin.scale = 0.3;
   coin.lifetime = 600;
   coinGroup.add(coin);     
   
   if(mousePressedOver(pauseButton)|| gameState === END) {
   coin.lifetime = -5;
   coin.velocityX = 0;  
   }  
     
 else{
   if( mousePressedOver(playButton)) {
   coin.lifetime = 1200;  
   coin.velocityX = -1;
   }
 
   }
   
 }
  
 }
  
 


function pokemonSelection() {
if (World.frameCount % 400 === 0) {    
  var rand = Math.round(random(1,11));
  
 switch(rand) { 
   
   case 1: palkia();
   break;  
   case 2: dialga();
   break;  
   case 3: giratina();
   break;  
   case 4: deoxys();
   break;  
   case 5: hoopa();
   break;  
   case 6: groudon();
   break;  
   case 7: kyogre();
   break;
   case 8: kyurem();
   break;  
   case 9: zygarde();
   break;  
   case 10: yveltal();
   break;  
   case 11: genesect();
   break;
   default: break;
 }
  
  
 }    
}

function rayquazaAttack() {
 if(World.frameCount % 1 === 0) {
   
     var hyperBeam = createSprite(150,10,10,10);
      hyperBeam.y = rayquaza.y;
      hyperBeam.addImage(redLaserImg);
      hyperBeam.scale = 0.06;
      hyperBeam.velocityX = 8;
      hyperBeam.lifetime = 700;
      redLaserGroup.add(hyperBeam);
   
  
 }
  
}

function palkia() {  


   var palkia = createSprite(550,Math.round(random(120,250)),20,20);
   palkia.addImage(palkiaImg);
   palkia.scale = 0.1;
   palkia.lifetime = 600;
   palkiaGroup.add(palkia); 
  
   if(mousePressedOver(pauseButton)|| gameState === END) {
   palkia.lifetime = -2;
   palkia.velocityX = 0;  
     
     
 }else{
   if(mousePressedOver(playButton)|| gameState === PLAY) {
   palkia.lifetime = 600;  
   palkia.velocityX = -1;
   }
  
 
 }   
  
 
}

function dialga() {
  

   var dialga = createSprite(550,Math.round(random(120,250)),20,20);
   dialga.addImage(dialgaImg);
   dialga.scale = 0.2;
   dialga.lifetime = 600;
   dialgaGroup.add(dialga); 
  
    
   
   if(mousePressedOver(pauseButton)|| gameState === END) {
   dialga.lifetime = -2;
   dialga.velocityX = 0;  
     
     
 }else{
   if( mousePressedOver(playButton)||gameState === PLAY) {
   dialga.lifetime = 600;  
   dialga.velocityX = -1;
   }
  
 }

}
  
function giratina() {

   var giratina = createSprite(550,Math.round(random(120,250)),20,20);
   giratina.addImage(giratinaImg);
   
   giratina.scale = 0.3;
   giratina.lifetime = 600;
   giratinaGroup.add(giratina);
   
   
   if(mousePressedOver(pauseButton)|| gameState === END) {
   giratina.lifetime = -2;
   giratina.velocityX = 0;  
     
     
 }else{
   if( mousePressedOver(playButton)|| gameState === PLAY) {
   giratina.lifetime = 600;  
   giratina.velocityX = -1;
   }
   
 }
   
}

function deoxys() {

   var deoxys = createSprite(550,Math.round(random(120,250)),20,20);
   deoxys.addImage(deoxysImg);
   
   deoxys.scale = 0.04;
   deoxys.lifetime = 600;
   deoxysGroup.add(deoxys);    
   
    
   
   if(mousePressedOver(pauseButton)|| gameState === END) {
   deoxys.lifetime = -2;
   deoxys.velocityX = 0;  
     
     
 }else{
   if( mousePressedOver(playButton)|| gameState === PLAY) {
   deoxys.lifetime = 600;
   deoxys.velocityX = -1;  
   
   }
   
 }
   

}

function hoopa() {

   var hoopa = createSprite(550,Math.round(random(120,250)),20,20);
   hoopa.addImage(hoopaImg);
   
   hoopa.scale = 0.15;
   hoopa.lifetime = 600;
   hoopaGroup.add(hoopa);    
   
    
   
   if(mousePressedOver(pauseButton)||gameState === END) {
    hoopa.velocityX = 0;
     hoopa.lifetime = -2;
     
     
     
 }else{
   if( mousePressedOver(playButton)|| gameState === PLAY) {
   hoopa.velocityX = -1;
     hoopa.lifetime = 600;  
   
   }
   
  
 }
   

}

function groudon() {

   var groudon = createSprite(550,Math.round(random(120,250)),20,20);
   groudon.addImage(groudonImg);
   
   groudon.scale = 0.18;
   groudon.lifetime = 600;
   groudonGroup.add(groudon);     
    
   if(mousePressedOver(pauseButton)|| gameState === END) {
    groudon.velocityX = 0;
     groudon.lifetime = -2;
   
     
     
 }else{
   if( mousePressedOver(playButton)|| gameState === PLAY) {
   groudon.velocityX = -1;
     groudon.lifetime = 600;  
   
   }
   
 }
   

}

function kyogre() {

   var kyogre = createSprite(550,Math.round(random(120,250)),20,20);
   kyogre.addImage(kyogreImg);
  
   kyogre.scale = 0.1;
   kyogre.lifetime = 600;
   kyogreGroup.add(kyogre);     
  
    
   if(mousePressedOver(pauseButton)|| gameState === END) {
   kyogre.velocityX = 0;  
     kyogre.lifetime = -2;
     
     
     
 }else{
   if( mousePressedOver(playButton)|| gameState === PLAY) {  
     kyogre.velocityX = -1;
   kyogre.lifetime = 600;  
     
   }
 
 
 }
   

}

function kyurem() {
 
   var kyurem = createSprite(550,Math.round(random(120,250)),20,20);
   kyurem.addImage(kyuremImg);
   kyurem.scale = 0.12;
   kyurem.lifetime = 600;
   kyuremGroup.add(kyurem);     

      
   if(mousePressedOver(pauseButton)|| gameState === END) {
     kyurem.velocityX = 0;
     kyurem.lifetime = -5;
  
     
     
 }else{
   if(mousePressedOver(playButton)|| gameState === PLAY ) {
   kyurem.velocityX = -1;
     kyurem.lifetime = 600;  
   
   }
   
 }
    
    
 
}

function zygarde() {
  
   var zygarde = createSprite(550,Math.round(random(120,250)),20,20);
   zygarde.addImage(zygardeImg);
   
   zygarde.scale = 0.1;
   zygarde.lifetime = 600;
   zygardeGroup.add(zygarde); 
    
  if(mousePressedOver(playButton)|| gameState === END)  {
    zygarde.lifetime = -2;
    zygarde.velocityX = 0; 
    
    
     
     
 }else{
   if(mousePressedOver(playButton)||gameState === PLAY) {
   zygarde.velocityX = -1;
     zygarde.lifetime = 600;  
  
   }
 
 }
 
 
}

function yveltal() {
 
   var yveltal = createSprite(550,Math.round(random(120,250)),20,20);
   yveltal.addAnimation("yveltal",yveltalAnime);
   
   yveltal.scale = 0.6;
   yveltal.lifetime = 600;
   yveltalGroup.add(yveltal);    

     
   if(mousePressedOver(pauseButton)|| gameState === END) {
      yveltal.velocityX = 0;  
     yveltal.lifetime = -2;
  
     
     
 }else{
   if( mousePressedOver(playButton)||gameState === PLAY) {
   yveltal.velocityX = -1;  
     yveltal.lifetime = 600; 
   
   
   }
  
 }
   
 }


function genesect() {

   var genesect = createSprite(550,Math.round(random(120,250)),20,20);
   genesect.addImage(genesectImg);
   genesect.scale = 0.14;
   genesect.lifetime = 600;
   genesectGroup.add(genesect);     
  
     
   if(mousePressedOver(pauseButton)|| gameState === END) {
     genesect.velocityX = 0;
     genesect.lifetime = -2;
   
     
     
 }else{
   if( mousePressedOver(playButton)|| gameState === PLAY) {
   genesect.velocityX = -1;
     genesect.lifetime = 600;  
   
   
  }
 }
   

}