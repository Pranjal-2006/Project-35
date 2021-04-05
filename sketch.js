var dog, happyDog, database;
var foodS, foodStock;

function preload()
{
	dog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  DogImg = createSprite(350,150,40,25);
  DogImg.addImage(dog);
  
  foodStock=databasr.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(dogHappy);
}
  drawSprites();
  textSize(20);
 stroke(0);
  fill(0);
  text(10,450,"Print FoodStocks")

}



