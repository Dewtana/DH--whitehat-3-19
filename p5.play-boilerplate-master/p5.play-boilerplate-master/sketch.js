var rect1
var rect2
var rect3
var rect4
function setup() {
  createCanvas(800,400);
 rect1= createSprite(70,30,70,30);
 rect2=createSprite(140,60,70,30);
 rect3=createSprite(210,90,70,30);
 rect4=createSprite(280,120,70,30);
 rect1.shapeColor="red"
 rect2.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  rect1.x=mouseX
  rect1.y=mouseY
  isTouching(rect1,rect3)
  
  drawSprites();
}
