var mario,mario_standing,mario_running;
var Ground,ground_extension;
var Invisible_wall_1,Invisible_wall_2;
var block1_a,block1_b,block1_c,block1_d,block1_e;

function preload () {

}

function setup () {

    createCanvas(1000,500) 
    //Mario code
    mario = createSprite(200,250,20,50);
    mario.scale = 0.5;

    //Block code
    block1_a = createSprite(500,250,35,50);
    block1_b = createSprite(535,250,35,120);
    block1_c = createSprite(570,250,35,180);
    block1_d = createSprite(605,250,35,230);
    block1_e = createSprite(640,250,35,280);

    //Ground code
    Ground = createSprite(200,260,10000,10);
    ground_extension = createSprite(200,380,10000,250);
    ground_extension.visible = false;

    //Invisible wall code
    Invisible_wall_1 = createSprite(0,100,250,1000);
    Invisible_wall_1.visible = false;
    Invisible_wall_2 = createSprite(1000,100,250,1000);
    Invisible_wall_2.visible = false;

    //Group Creation
    block1Group = new Group();

    //Group Addition

    block1Group.add(block1_a)
    block1Group.add(block1_b)
    block1Group.add(block1_c)
    block1Group.add(block1_d)
    block1Group.add(block1_e)

} 

function draw () {

    background("blue")

    console.log(mario.x);
    console.log(mario.y);

    //Mario,ground,and enemy(general)movement code

    if (keyDown("right_arrow")) {

       mario.x = mario.x + 5; 
       Ground.x = Ground.x - 5;
       block1Group.x = block1Group.x - 5;
       
    }

    if (keyDown("left_arrow")) {

        mario.x = mario.x - 5;
        Ground.x = Ground.x + 5;
        block1Group.x = block1Group.x + 5;

       }

    if (keyDown("space") && mario.y >= 90) {

        mario.velocityY = -10;

    }

        //Mario interaction code

        //Block collision
        mario.collide(block1Group);

        //Ground collision
        mario.collide(Ground);

        //Invisible walls collision
        mario.collide(Invisible_wall_1);
        mario.collide(Invisible_wall_2);

        //Adding blocks to respective groups
        block1Group.add(block1_a);
        block1Group.add(block1_b);
        block1Group.add(block1_c);
        block1Group.add(block1_d);
        block1Group.add(block1_e);
        
        //Block respawn
        
        //Gravity
        mario.velocityY = mario.velocityY + 0.8;

    drawSprites();

}

    




