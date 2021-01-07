const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var myEngine, myWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();    //myEngine.world
  myWorld = myEngine.world;

  
  var options ={
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,400,20, options);
  World.add(myWorld, ground);

  var ballOptions ={
    restitution:1.0
  }

  ball = Bodies.circle(200,50,20,ballOptions);
  World.add(myWorld,ball);

}

function draw() {
  background(0);
  Engine.update(myEngine);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);
  drawSprites();
}