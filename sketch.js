var path
var runner_running
var path_2
var boy

function preload(){
  //pre-load images
runner_running = loadAnimation("Runner-1.png","Runner-2.png")

path = loadImage("path.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
path_2 = createSprite(200,200)
path_2.addImage(path)
path_2.velocityY=4
 
boy = createSprite(180,340)
boy.addAnimation("jackson" , runner_running)
boy.scale= 0.08

}




function draw() {
  background(0);
  if(path_2.y>400){
   path_2.y= height/2
  }

boy.x=World.mouseX




drawSprites()
}
