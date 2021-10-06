var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX
  createApples();
  createLeaves();
  drawSprites();
}

function createApples(){
  if(frameCount % 80 === 0){
   var apple = createSprite(200, 50, 50, 50);
   apple.x = Math.round(random(15,385));
   apple.addImage(appleImg);
   apple.scale = 0.08;
   apple.velocityY = 5;
   apple.lifetime  = 75;
  }
}

function createLeaves(){
  if(frameCount % 80 === 0){
   var leaves = createSprite(200, 50, 50, 50);
   leaves.x = Math.round(random(15,385));
   leaves.addImage(leavesImg);
   leaves.scale = 0.08;
   leaves.velocityY = 2;
   leaves.lifetime  = 200;
  }
}