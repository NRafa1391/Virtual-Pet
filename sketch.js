var bg;
var Food
var dog;
var dogImg, happyDog;
var database;
var foodS, foodStock;

function preload()
{
dogImg = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");

bg = loadImage("images/backyyard img.jpg");
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();

  dog = createSprite(250, 400, 20, 60);
  dog.addImage(dogImg);
  dog.scale = 0.25;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

}


function draw() {

  background(bg);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();

  stroke("blue");
  fill("purple");
  textSize(22);
  text("Milk bottles left:" + foodStock, 15, 220);

  stroke("blue");
  fill("orange");
  textSize(18);
  text("To earn your dog's respect, feed it by hitting the up arrow key!", 2, 490)
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



