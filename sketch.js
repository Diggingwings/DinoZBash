var dino1Img,dino1 
var dino2Img,dino2
var platform, platformImg
var explosion1Img,explosion1I
var background, desertl
var medkit,rocket
var medkitImg,rocketImg,rocketImg1
var score=100
var score1=100
var gameState='play'
var medkit2,rocket2
var explosion2,explosion3,explosion4
var wall,wall1,wall2,wall3


function preload(){
    dino1Img=loadImage("dino1I.png")
    dino2Img=loadImage("dino2I.png")
explosion1Img=loadImage("explosion1I.png")
desert1=loadImage("desertI.png")
platformImg=loadImage("platformI.png")
medkitImg=loadImage("medkit.png")
rocketImg=loadImage("rocket launcher.png")
rocketImg1=loadImage("rocket-launcher-_2_.png")
}   
    

function setup(){ 
createCanvas(1500,700);
ground=createSprite(700,700,7000,20)
    dino1=createSprite(200,600,70,70)
    dino1.addImage(dino1Img)
    
    dino2=createSprite(1300,600,70,70)
    dino2.addImage(dino2Img)
   medkit2=createSprite(111111,100,50,50)
   explosion2=createSprite(11111,100,50,50)
   explosion2.addImage(explosion1Img)
   explosion2.debug="t"
   explosion4=createSprite(11111,200,50,50)
   explosion4.addImage(explosion1Img)
    rocket2=createSprite(11111,300,50,50)
  
    wall=createSprite(0,0,10,10000)
    wall1=createSprite(1505,0,20,10000)
    
    wall2=createSprite(0,0,10000,10)
    
}

function draw(){
    background(desert1)
    textSize(35)
    fill("white")
   text("Health  " + score1, 1300, 50)

    textSize(35)
    fill("white")
    text("Health  " + score, 20, 50)

    textSize(20)
    fill("#ADD8E6")
    text("Use Space to reset, Use WASD  to move Dino1 and E to bite, Use IJKL to move Dino2 and O to bite   ",300, 50)

    

    if(score===100){
      gameState==='play'
    }
    if( gameState==='play'){
      textSize(35)
    fill("blue")
    text("Dino1  ", dino1.x-50, dino1.y-120)

    textSize(35)
    fill("blue")
    text("Dino2  ", dino2.x-50, dino2.y-120)

 if(keyDown("W")){
dino1.y=dino1.y-24
 }
if(keyDown("I")){
dino2.y=dino2.y-24
 }
 if(keyDown("A")){
    dino1.x=dino1.x-7
    dino1.addImage(dino2Img)
    rocket2.addImage(rocketImg)
    rocket2.scale=0.4
    
     }
     if(keyDown("D")){
        dino1.x=dino1.x+7
        dino1.addImage(dino1Img)
        rocket2.addImage(rocketImg1)
        rocket2.scale=0.4
         }
         if(keyDown("J")){
            (dino2.x=dino2.x-9) 
            dino2.addImage(dino2Img) 
            rocket2.addImage(rocketImg)
        rocket2.scale=0.4
             }
             if(keyDown("L")){
                dino2.x=dino2.x+7
                dino2.addImage(dino1Img)
                rocket2.addImage(rocketImg1)
        rocket2.scale=0.4
                 }if(keyDown("K")){
                    dino1.y.velocityY=7
                     }if(keyDown("S")){
                        dino2.velocityY=7 
                         }
                         
                         if(keyDown("E")&&(dino1.collide(dino2))){
                            score1=score1-1  
                            
                             }
                             if((keyDown)("O")&&(dino2.collide(dino1 ))){
                                score=score-1
                                 }
 

                        
dino2.velocityY=dino2.velocityY+0.9
  dino1.velocityY=dino1.velocityY+0.9
  if(dino1.isTouching(dino2)){
dino2.x=dino2.x+5
  }
  if(dino2.isTouching(dino1)){
    dino1.x=dino1.x-5
      }


      
      if(score1===0){
          gameState="end"
        
     
      }

      if(score===0){
          gameState="end"
     
      }

     
     
  //dino1.collide(dino2)
  //dino2.collide(dino1)
 dino1.collide(ground)
 dino2.collide(ground)
 dino1.collide(wall1)
 dino2.collide(wall1)
 dino1.collide(wall)
 dino2.collide(wall)
 dino1.collide(wall2)
 dino2.collide(wall2)  
 fps()
 if(rocket2.isTouching(ground)){
  rocket2.x=rocket.x
  rocket2.y=rocket.y
}


 
 

 if(medkit2.isTouching(dino1)){
  score=score+1
 }
 if(medkit2.isTouching(dino2)){
score1=score1+1
 }
 if(rocket2.isTouching(dino2)){
  rocket2.x=dino2.x
  rocket2.y=dino2.y
  if(keyDown("O")){
   // explosion3=createSprite(1200,500,200,200)
    //explosion3.addImage(explosion1Img)
    explosion2.velocityX=-5
    explosion2.scale=0.3
    explosion2.x=dino2.x
    explosion2.y=dino2.y
    explosion2.velocityX=-5
  }
  
}
if(rocket2.isTouching(dino1)){
  rocket2.x=dino1.x
  rocket2.y=dino1.y
  if(keyDown("E")){
    //explosion1I=createSprite(300,500,200,200)
    //explosion1I.addImage(explosion1Img)
   explosion4.velocityX=5
    explosion4.scale=0.3
     explosion4.x=dino1.x
    explosion4.y=dino1.y
    explosion4.velocityX=5
    
  }
 

}
 if(explosion2.isTouching(dino1)){
  score=score-1
    }
    if(explosion4.isTouching(dino2)){
      score1=score1-1
        }

 drawSprites()
 
    }
    
    if(gameState==="end"){
      textSize(250)
      fill("#ADD8E6")
      text("You Win GG  ", 30, 450)

    }
    if(keyDown("Space")){
      gameState="play"
      score=100
      score1=100
      dino1.x=200
      dino1.y=700
      dino2.x=1300
      dino2.y=700
    }
}  
        function fps(){
          if(frameCount % 100 === 0) {


            medkit=createSprite(0,0,20,20)
            medkit.addImage(medkitImg)
            medkit.scale=0.3
            medkit.x = random(400,1200)
            medkit.velocityY=5
            medkit2.x=medkit.x
            medkit2.y=medkit.y
            medkit2.velocityY=5
            if(medkit2.isTouching(ground)){
              medkit2.x=medkit.x
              medkit2.y=medkit.y
            }
            if(frameCount % 200 === 0) {
              rocket=createSprite(0,0,20,20)
            rocket.addImage(rocketImg)
            rocket.scale=0.5
            rocket.x = random(400,1200)
            rocket.velocityY=5
            rocket2.x=rocket.x
            rocket2.y=rocket.y
            rocket2.velocityY=5
            
             }

            }
            
   
    if(score===101){
            score=100
          }
         
          if(score1===101){
            score1=100
          }

          
         
          }
         
        
        
       // if(medkit.isTouching(dino1)){
          //score=score+50
        //}
        //if(medkit.isTouching(dino2)){
        //score1=score1+50
        //}
         





        