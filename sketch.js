var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball= Bodies.circle(50, 70, 40, ball_options)
    World.add(world,ball);
	
	groundObj=new Ground(width/2,670,width,20);
	 leftSide = new Ground(1100,600,20,120);
	  rightSide = new Ground(1350,600,20,120);

	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode=== UP_ARROW){
		Body.applyForce(ball, {x:0, y:0}, {x:190, y:-190})
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display()
  leftSide.display()
  rightSide.display()

  ellipse(ball.position.x, ball.position.y, 80,80)
  
  drawSprites();
 
}



