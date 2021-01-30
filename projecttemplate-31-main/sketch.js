const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var maxDrops = 100;

var man_walking
var man;
var rainDrop = []
var umbrella;
var bolt_1, bolt_2, bolt_3, bolt_4;
var thunderBolt;
var rand;
var thunderCreatedFrame = 0;

function preload() {
    bolt_1 = loadImage("thunderbolt/1.png")
    bolt_2 = loadImage("thunderbolt/2.png")
    bolt_3 = loadImage("thunderbolt/3.png")
    bolt_4 = loadImage("thunderbolt/4.png")
}

function setup() {
    createCanvas(400, 600);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200, 400, 65);


    for (var i = 0; i < maxDrops; i++) {
        rainDrop.push(new Drop(random(0, 400), random(0, 400), 3))
    }
    Engine.run(engine)

}

function draw() {
    background(0);
    Engine.update(engine)

    umbrella.display();
    spawnBolt();
    for (var j = 0; j < rainDrop.length; j++) {
        rainDrop[j].display();
        rainDrop[j].update();
    }




    drawSprites();
}

function spawnBolt() {

    rand = Math.round(random(1, 4));
    if (frameCount % 60 === 0) {
        thunderCreatedFrame = frameCount;
        thunderBolt = createSprite(random(10, 370), random(10, 30), 10, 10);

        switch (rand) {
            case 1: thunderBolt.addImage(bolt_1)
                thunderBolt.scale = 0.4
                break;

            case 2: thunderBolt.addImage(bolt_2)
                thunderBolt.scale = 0.4
                break;

            case 3: thunderBolt.addImage(bolt_3)
                thunderBolt.scale = 0.4
                break;

            case 4: thunderBolt.addImage(bolt_4)
                thunderBolt.scale = 0.4
                break;

            default: break;
        }
        thunderBolt.scale = random(0.3, 0.6);
    }
    if (thunderCreatedFrame + 10 === frameCount && thunderBolt) {
        thunderBolt.destroy();
    }



}
