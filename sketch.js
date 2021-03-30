var ground, groundImg;
var cat, mouse;
var catImg1, mouseImg1;
var catImg2, mouseImg2;
var catImg3, mouseImg3;

function preload() {
    //load the images here
    groundImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    ground = createSprite(500,400,1000,800);
    ground.addImage(groundImg);
    
    //create tom and jerry sprites here
    cat = createSprite(800, 650, 30, 100);
    cat.addAnimation("catSitting", catImg1);
    cat.scale = 0.15;
    mouse = createSprite(200,650,20,20);
    mouse.addAnimation("mouseStanding", mouseImg1);
    mouse.scale = 0.1;
}

function draw() {

    background(255);
    cat.debug = false
    mouse.debug = false
    
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    {
        cat.velocityX = 0;
        cat.x = 270;
        cat.addAnimation("catHappy", catImg3);
        cat.changeAnimation("catHappy");

        mouse.addAnimation("mouseHappy", mouseImg3);
        mouse.changeAnimation("mouseHappy");
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
     if(keyDown(LEFT_ARROW))
     {
         cat.velocityX = -3;
         cat.addAnimation("catWalking", catImg2);
         cat.changeAnimation("catWalking");
        
         mouse.addAnimation("mouseTeasing", mouseImg2);
         mouse.changeAnimation("mouseTeasing");
         mouse.frameDelay = 25;
         

     }

}
