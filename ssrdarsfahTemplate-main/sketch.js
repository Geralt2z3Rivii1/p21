var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "yellow";

    //create two more blocks i.e. block3 and block4 here
    block3= createSprite(510,580,200,30)
    block3.shapeColor = "green"

    block4= createSprite(720,580,200,30)
    block4.shapeColor = "red"

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY

    ball.velocityX= 5
    ball.velocityY= 5

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    
    if(ball.bounceOff(block2)){
        ball.shapeColor= "yellow"
        //music.play();
    }

    if(ball.bounceOff(block3)){
        ball.shapeColor= "green"
        //music.play();
    }

    if(ball.bounceOff(block2)){
        ball.shapeColor= "red"
        //music.play();
    }
    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        //music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0

        //write code to stop music
    }

    //write code to bounce off ball from the block3


    //write code to bounce off ball from the block4

    drawSprites();
}
