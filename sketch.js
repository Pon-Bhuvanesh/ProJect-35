var balloon,balloonImage1,balloonImage2;

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  createCanvas(1400,700);

  balloon=createSprite(450,150,250,250);
  balloon.addAnimation("hotAirBalloon2",balloonImage1);
  balloon.scale=1.0;
  balloon=createSprite(1000,250,150,150);
  balloon.addAnimation("hotAirBalloon2",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
      
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    
  }


  drawSprites();

  fill("Pink");
  stroke("white");
  textSize(35);
  text("Use arrow keys to move Hot Air Balloon👈 👇 👆 👉",100,100);
  fill("LightGreen");
  stroke("drakgreen");
  textSize(40);
  text("Like👍Share🤘comment for me 👨‍💻",650,600);
}
