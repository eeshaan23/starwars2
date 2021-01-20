var player;
var enemy, score =0;
var friend, life, bullet;
var satellite;
var PLAY=1, END=0, gameState;
var restart;


function preload(){
 friend =loadImage ("satellite.png");

}

function setup() {
  createCanvas(800, 500);
 

// object of player
player = new Player();
 life = 3;
 bullet = new Bullet();
 enemy = new Enemy();
satellite = new Satellite();
gameState = PLAY;
restart = createSprite(300, 200);
restart.visible = false;
}

function draw() {
  background("black"); 
 if(gameState === PLAY){
  if(keyWentDown("space")){
    bullet.releaseBullet();
  }
  satellite.spawnSatellite();
  // destroying the ufo by bullet
  enemy.spawnEnemy();
  for(var i =0; i<enemy.ufoGroup.length;i++){
    if(enemy.ufoGroup.get(i).isTouching(bullet.body)  ){
      enemy.ufoGroup.get(i).destroy(); 
    score =  score +50   ;
    console.log("executionm");
    }
  }
  
  // destroying the ufo by player
  for(var i =0; i<enemy.ufoGroup.length;i++){
    //group.isTouching(sprite)
    if(enemy.ufoGroup.get(i).isTouching(player.body)){
      life = life-1;
      enemy.ufoGroup.get(i).destroy();
    }
  }

   //satellite gets destroyed by bullet and life decreases.
 
for(var i = 0; i<satellite.satelliteGroup.length; i++){
  if(satellite.satelliteGroup.get(i).isTouching(bullet.body) ){
    satellite.satelliteGroup.get(i).destroy();
    life = life-1;
  }
}


//powerup life increment on score>0 if player has already lost life
if(score === 500 && life<3){
  life = life+1;
  }

if(score === 1000 || life === 0){
  gameState = END;
}

 }
 else if (gameState === END){
   if(score === 1000){
    textSize(60);
    text("gameover you win", 400, 100);
   }
   else if(life === 0){
    textSize(60);
    fill("red");
    text("Gameover You Lose", 170, 400);
   }

   restart.visible = true;

 }
 if(mousePressedOver(restart)){
   reset();
 }

  drawSprites();
  textSize(30);
  fill("white")
  text("Lives: "+ life, 50,50);
  text("Score: "+ score, 50,100);
}

function reset(){
 satellite.satelliteGroup.setVelocityYEach(0);
 enemy.ufoGroup.setVelocityYEach(0);
}
//lives dont decrease at any cost after the score of 500
//bullet should destroy itself after touching ufo or satellite
//navigation
//background pics and player pics 
//if spam bullet it is not affected. single bullet works
//game sounds 