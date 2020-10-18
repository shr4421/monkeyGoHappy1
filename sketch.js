
var monkey , monkey_running;
var banana ,bananaImage,obstacle, obstacleImage;
var ground;
var FoodGroup, obstacleGroup;
var survivalTime=0;
var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  

}



function setup() {
createCanvas(600,400);
  
ground=createSprite(600,380,900,20);
ground.shapeColor="grey";
ground.velocityX=-6;
ground.x=ground.width/2;
console.log(ground.x);

  
monkey=createSprite(70,350,900,10 );
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;

  
  obstacleGroup= createGroup();
  foodGroup=createGroup();
}


function draw() {
background("lightgreen");
  
  if(gameState===PLAY){
     survivalTime=Math.ceil(frameCount/frameRate()); 
    
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
if(keyDown("space")){
  
  monkey.velocityY=-8;
  
}
    if (ground.x < 0){
     ground.x = ground.width/2;
       }
  
  if (obstacleGroup.isTouching(monkey)){
   gameState=END;
    foodGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    ground.velocityX=0;
  }
  spawnObstacle();
  
  spawnBanana();
  }
  
  monkey.collide(ground);
  
 stroke("white");
  textSize(20);
  fill("white");

  text("surival Time:"+survivalTime,300,50);
  
  
  
  
  drawSprites();
}

function spawnObstacle(){
  
  if (frameCount%300===0){
   var obstacle1; 
  obstacle1=createSprite(560,353,20,20);
  obstacle1.addImage(obstacleImage);
  obstacle1.scale=0.1;
  obstacle1.velocityX=-6; 
  obstacle1.lifetime=400;
     
    obstacleGroup.add(obstacle1);
    }

}

function spawnBanana(){
                                                          
  if(frameCount%80===0){
            
    var banana=createSprite(540,280,20,20);
    banana.addImage(bananaImage);        
    banana.scale=0.1;
    banana.velocityX=-6;
    banana.lifetime=400;
    banana.y=Math.round(290,200);
    
    foodGroup.add(banana);
  }
  
}




