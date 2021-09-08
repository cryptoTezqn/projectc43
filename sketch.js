var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;
var redBubbleGroup, redBubbleGroup, bulletGroup;

var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  heading=createElement("h1");
  scoreboard=createElement("h1");
}

function draw() {
  background("#BDA297");

  //display Score and number of lifes
  scoreboard.html("Score: "+score)
  scoreboard.style('color:red');
  scoreboard.position(width-200,20)
  if(gameState===1){
    gun.y=mouseY  

    
    drawSprites();
  }
     
}

function handleBubbleCollision(bubbleGroup){
  if (life > 0){
    score=score+1;
    bulletGroup.destroyEach()
    bubbleGroup.destroyEach()
  }
}
swal({
  title: 'Game Over',
  text: "Oops you lost the game....!!!",
  text: "Your Score is " + score,
  imageUrl:
  "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png"
  imageSize: "100x100",
  cofirmButtonText: "Thanks For Playing"
})