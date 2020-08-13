//Create variables here

var  hungrdog,happydog;
var food,foodstock;

function preload(){
dogimg =loadImage("images/dogImg.png");
dogImg1 = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(400, 400);
 database = firebase.database();
  rectMode(CENTER);
 hungrydog = createSprite(200,200,10,20);
 hungrydog.scale = 0.10;
 foodstock = database.ref('food');
 foodstock.on("value",readstock);
   
}

function draw() {  
 background(45,137,86);
  rectMode(CENTER);
 hungrydog.addImage(dogimg,200,200,10,20);
if(keyWentDown(UP_ARROW)){
 hungrydog.addImage(dogImg1,);
 database.set({
food = -1 
 })
}

 drawSprites();

}
function readstock(data){
  food = data.val();
}

function writestock(){
  database.ref('/').update;
  
}






