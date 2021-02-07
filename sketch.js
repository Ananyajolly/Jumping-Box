var canvas;
var music;
var block,block1,block2,block3,ball
var edges
 
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
   block=createSprite(0,580,300,30)
   block.shapeColor="green"
   block1=createSprite(295,580,300,30)
   block1.shapeColor="blue"
   block2=createSprite(515,580,300,30)
   block2.shapeColor="purple"
   block3=createSprite(740,580,300,30)
   block3.shapeColor="pink"
    //create box sprite and give velocity
ball=createSprite(random(20,750),100,40,40)
 ball.shapeColor="red"
 ball.velocityX=4
 ball.velocityY=9
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  edges=createEdgeSprites()
 ball.bounceOff(edges)

    //add condition to check if box touching surface and make it box
    if(block.isTouching(ball))
    {
        ball.shapeColor="green"
    }
    if(block1.isTouching(ball))
    {
        ball.shapeColor="blue"
    }  
    if(block2.isTouching(ball))
    {
        ball.shapeColor="purple"
    }
    if(block3.isTouching(ball))
    {
        ball.shapeColor="pink"
    }
    drawSprites()
}
