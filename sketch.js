//Declare variables for game objects and behaviour indicators(FLAGS)

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let vsEngine;
let vsWorld;

var ball;
var groundObj;
var rock;
var leftWallObj, rightWallObj;

//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program

function setup() {
  createCanvas(800, 500);
  
  //creating the simulation
  vsEngine = Engine.create();
  vsWorld = vsEngine.world;

  // creating the body of ground
  //modifying the properties of the body and saving it as object
  // var ground_options = {
  //   isStatic: true,
  // };
  // ground = Bodies.rectangle(400, 450, 800, 20, ground_options);
  // World.add(vsWorld, ground);
  // console.log(ground);

  //creating an object of class ground
  groundObj = new Ground(400, 450, 800, 20, "black");
  console.log(groundObj);

  //creating the body of wall
  //wall = Bodies.rectangle(50, 390, 20, 100, {isStatic: true});
  //World.add(vsWorld, wall);
  leftWallObj = new Ground(350, 409, 20, 70, "yellow");
  console.log(leftWallObj);

  rightWallObj = new Ground(450, 409, 20, 70, "yellow");
  console.log(rightWallObj);

  // creating the body of rock
  rock = Bodies.circle(500,430,20);
  World.add(vsWorld, rock);
  console.log(rock);

  //creating the body of the ball
  var ball_options = {
    restitution: 1,
    density: 1.2

  };
  ball = Bodies.circle(100, 200, 10, ball_options);
  World.add(vsWorld, ball);
  console.log(ball);

  
  //World.add(world,rock);
}

//All modifications, changes, conditions, manipulations, actions during the course of the program are written inside function draw.
//All commands to be executed and checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.

function draw() {
  background(51);
  //activating the simulation
  Engine.update(vsEngine);


  // display ground object 
  groundObj.display();

  // displaying left wall object
  leftWallObj.display();

  //displaying right wall object 
  rightWallObj.display();

  //displaying the body of wall
  // stroke("blue");
  // strokeWeight(3);
  // fill("yellow");
  // rect(wall.position.x, wall.position.y, 20, 100);

  //displaying the body of ball
  stroke("orange");
  strokeWeight(3);
  fill("pink");
  ellipse(ball.position.x, ball.position.y, 20, 20);

  //displaying body of rock
  stroke("grey");
  strokeWeight(3);
  fill("black");
  ellipse(rock.position.x,rock.position.y,20);


  
}

function keyPressed(){
  if(keyCode == UP_ARROW){
  //Matter.Body.applyForce(body, body.position, amount of force in x and y direction)
  Body.applyForce(ball, ball.position,{x: 10, y: -5});
  
  }
}
