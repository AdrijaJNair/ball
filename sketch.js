
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;

function setup() {
	createCanvas(800, 300);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,270,width,20);
	dustbinObj=new dustbin(500,250);
paper=new Paper(100,100,9)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  if(keyDown(UP_ARROW)){
	  console.log(paper);
	 // Body.setVelocity(paper,{paper.body..x:10,y:-10})
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:2,y:-3})
  }
 

  groundObject.display();
  dustbinObj.display();
paper.display();
}

