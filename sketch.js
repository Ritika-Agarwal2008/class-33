var name = "Ritika"
console.log(name)

var num = 8
console.log(num)

var bool = true
console.log(bool)

var object
object = null
console.log(object)

var array1 = [1, 2, 3, 4, 5]
console.log(array1[2])

var array2 = ["ritika", 8, false]
console.log(array2)

var array3 = [[1, 2], [3, 4], [5, 6]]
console.log(array3[0][1])

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;
var backgroundImg, platform;
var gameState = "onsling"
var score=0

function preload() {
    getBG()
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
    clog = new Log(50, 50, 100, PI / 2);

    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 305, 300, 180);

    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI / 2);

    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig3 = new Pig(810, 220);

    log3 = new Log(810, 180, 300, PI / 2);

    box5 = new Box(810, 160, 70, 70);
    log4 = new Log(760, 120, 150, PI / 7);
    log5 = new Log(870, 120, 150, -PI / 7);

    bird = new Bird(200, 50);

    slingshot = new Slingshot(bird.body, { x: 200, y: 50 })
    // chain1=new Chain(pig1.body,pig3.body)



}

function draw() {
    if (backgroundImg)
        background(backgroundImg);
        else
        background(0)

        textSize(30)
        fill(255)
        text("Score: "+score,width-300,50)
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    clog.display();
    slingshot.display();
    //chain1.display();


}
function mouseDragged() {
    // if(gameState!=="launched")
    Matter.Body.setPosition(bird.body, { x: mouseX, y: mouseY })
}
function mouseReleased() {
    slingshot.fly()
    gameState = "launched"
}
function keyPressed() {
    if (keyCode === 32&& bird.body.speed<1||bird.body.position.x>width||bird.body.position.x<0) {
        Matter.Body.setPosition(bird.body, { x: 200, y: 50 })
        bird.trajectory = []
        slingshot.attach(bird.body)
    }
}
async function getBG() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/chicago")
    var responseJSON = await response.json()
    console.log(responseJSON.datetime.slice(11, 13))
    var hour = responseJSON.datetime.slice(11, 13)
    if (hour > 06 && hour < 18) {
        backgroundImg = loadImage("sprites/bg.png")
    }
    else {
        backgroundImg = loadImage("sprites/bg2.jpg")
    }



}