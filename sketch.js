const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   

    box1 = new Box(900,300,70,70);
    box2 = new Box(900,230,70,70);
   
    

    box3 = new Box(900,160,70,70);
    box4 = new Box(900,90,70,70);
    
     
   

    box5 = new Box(900,20,70,70);
    
    car=new Ground(450,320,120,70);
    w1=new Ball(440,330,12);
    w2=new Ball(480,330,12);
    ball = new Ball(700,300,20);

    line(480,280,700,50);
    sling = new Sling(ball.body,{x:700,y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
   box3.display();
   box4.display();
   box5.display();
   ball.display();
   car.display();
   w1.display();
   w2.display();
   line(480,280,700,50);
   
    
    sling.display();    
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}

