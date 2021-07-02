const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg, bgImg;
var snow;

function preload(){
  bgImg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  bg = createSprite(400, 150, 50, 50);
  bg.addImage(bgImg);
  
  snow = new Snowflake(100, 400);
}

function draw() {
  background("blue");  
  snow.display;
  drawSprites();
}