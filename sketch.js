var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,50,50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY=-5;
  movingRect.velocityX=0;
}

function draw() {
  background(0,0,0);  

  collide(movingRect,fixedRect);

  

  drawSprites();
}



