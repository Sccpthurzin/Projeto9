var bola;
function setup() {

  createCanvas(400,400);
  bola = createSprite (100,100,50,50);
}

function draw() 
{
  background(30);
  if (keyIsDown(UP_ARROW)){
    bola.y = bola.y-5;


  }
  if (keyIsDown(DOWN_ARROW)){
    bola.y = bola.y+5;

  }
  if (keyIsDown(LEFT_ARROW)){
    bola.x = bola.x-5;

  }
  if (keyIsDown(RIGHT_ARROW)){
    bola.x = bola.x+5;

  }
drawSprites ();
}




