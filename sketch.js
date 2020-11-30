//Create variables here
var dog
var happyDog
var database
var foods
var foodStock
function preload()
{
  //load images here
  dog_img=loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250)
  dog.addImage("dog1",dog_img)
  dog.scale=0.2

  database = firebase.database();
 
}


function draw() {  

background(46,139,87)




  drawSprites();
  //add styles here

}



