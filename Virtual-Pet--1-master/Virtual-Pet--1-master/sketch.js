//Create variables here
var dog, happyDog;
var database;

var foodS, foodStock;
var dogImage, dogImage1;

function preload()
{
  //load images here
  dogImage=loadImage("doglmg.png");
  dogImage1=loadImage("doglmg1.png");
}

function setup() {
	createCanvas(500, 500);
   dog = createSprite(20, 10, 20, 30);
   database = firebase.database();
   dog.addImage(dogImage);
   foodStock = database.ref('food');
   foodStock.on("value", readStock);
}


function draw() { 
  background(46, 139,87);
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  //add styles here
  text(foodStock, 10, 100);
  textSize(20);
  fill("red");
  stroke();
  
 


}


function writeStock(x){
  if(x<0){
    x = 0
  }
    else {
      x = x-1
       }
       database.ref('/').update({
         Food:x
       })
      }
    
 



function readStock(data){
foodS = data.val();
}


