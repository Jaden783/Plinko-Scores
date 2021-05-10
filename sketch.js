var gameState = "play"

var ball
var count = 0;


var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text('500',15,520) 
 text('500',100,520) 
 text('500',185,520) 
 
 text('100',265,520) 
 text('100',345,520) 
 text('100',425,520) 
 text('100',500,520) 

 text('200',580,520) 
 text('200',660,520) 
 text('200',735,520) 
 
 Engine.update(engine);
 if(ball != null){
  ball.display()
if(ball.body.position.x<200 && ball.body.position.y>= 520){
score = score +500
ball = null
if(count>4){
  gameState = 'end'
}
} 
else if(ball.body.position.x>=200 && ball.body.position.x<=530 && ball.body.position.y>= 520){
  score = score +100
  ball = null
  if(count>4){
    gameState = 'end'
  }
} 
  else if(ball.body.position.x>530 && ball.body.position.y>= 520){
    score = score +200
    ball = null
    if(count>4){
      gameState = 'end'
    } 
  } 
}
 

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  /* if(frameCount%60===0){
     particles.push(new Particle(random(100,700), 10,10));
    }
    */



  /*for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   
   
   
   
    }
  }
function mousePressed(){

if(gameState === 'play'){

ball = new Particle(mouseX,10,10)
count= count+1
}


}