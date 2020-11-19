//Create variables here
var dog,happyDog;
var database ;
var food;

function preload()
{
  //load images here
dogImage=loadImage("images/dogImg.png");
dogImage2=loadImage("images/happydog.png");
}

function setup() {
 var database=firebase.database();
 var foodstock=database.ref('food');
 foodstock.on("value",readStock);
  createCanvas(500, 500);
  dog=createSprite(250,250,20,20)
dog.addImage("dog",dogImage);
dog.scale=0.3;
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(food);
dog.addImage("dog",dogImage2);

}
text("Note:Press UP_ARROW KEY TO FEED MILK",50,50,textSize(20),fill("pink"));


  drawSprites();
  //add styles here

}
function readStock(data){
foodS=data.val();

}
function writeStock(){
  database.ref('/').update({
    food:x
  }
  )
}


