
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var box1,box2,box3;
var ground;


function setup() {
	createCanvas(1500, 700);
	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	paper = new Paper(50,20,30);
	ground=new Ground(750,670,1500,20);
	boxSprite1=createSprite(1100,610,20,100);
	boxSprite1.shapeColor=color("red");

	boxSprite2=createSprite(1300,610,20,100);
	boxSprite2.shapeColor=color("red");

	boxSprite3=createSprite(1200,650,200,20);
	boxSprite3.shapeColor=color("red");

	box1= Bodies.rectangle(1100,610,20,100,{isStatic:true});
	World.add(world,box1);

	box2= Bodies.rectangle(1300,610,20,100,{isStatic:true});
	World.add(world,box2);

	box3= Bodies.rectangle(1200,650,200,20,{isStatic:true});
	World.add(world,box3);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  paper.display();
ground.display();
//   box1.display();
//   box2.display();
//   box3.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode===UP_ARROW) {
	Matter.Body.applyForce(PaperObject.body,PaperObject.body.position,{x:85,y:-85});
}

}



