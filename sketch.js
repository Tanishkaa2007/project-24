const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane,rubber1;
var stone1,iron1
var marble1,marble2,marble3,marble4;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(500,100,50 );
    stone1 = new Stone(400,200,60,60);
    iron1 = new Iron(900,150,110,110);
    marble1 = new Marble(700,200,10);
    marble2 = new Marble(650,200,10);
    marble3 = new Marble(750,200,10);
    marble4 = new Marble(800,200,10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    stone1.display();
    iron1.display();
    marble1.display();
    marble2.display();
    marble3.display();
    marble4.display();
}