const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
    
}

function setup() {
    createCanvas(800, 700);


    engine = Engine.create();
    world = engine.world;
    

    bob1=new Bob(300,350,50);
    bob2=new Bob(350,350,50);
    bob3=new Bob(400,350,50);
    bob4=new Bob(450,350,50);
    bob5=new Bob(500,350,50);
    roof= new Roof(400,100,300,40);

    sling1= new Suspender(bob1.body,roof.body,-50*2,0);
    sling2= new Suspender(bob2.body,roof.body,-25*2,0);
    sling3= new Suspender(bob3.body,roof.body,-0*2,0);
    sling4= new Suspender(bob4.body,roof.body,25*2,0);
    sling5= new Suspender(bob5.body,roof.body,50*2,0);
    
    


    //Create the Bodies Here.


    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites();
  keyPressed();
 
}

function keyPressed() { 
   //When using make sure to press the down arrow right away after the up arrow
	if (keyCode === UP_ARROW) 
    { Matter.Body.applyForce(bob5.body,bob5.body.position,{x:100,y:100}); } 
} 




