const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
function preload(){
    
}

function setup(){
   engine=Engine.create()
   world=engine.world
   player1= new Player(100,100,50,50);
}

function draw(){
   Engine.update(engine);
   background("white");
    player1.Display();
}   

