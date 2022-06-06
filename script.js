p5.disableFriendlyErrors = true;

/*let img;
function preload() {
  img = loadImage('Rocket.png');
}
function setup() {
  background(50);
  // Top-left corner of the img is at (10, 10)
  // Width and height are 50 x 50
  image(img, 10, 10, 50, 50);
}*/
var fps = 60;

let obstacles;
let randint;
let score;
let lost;
let next;

function setup() {
  createCanvas(1000, 450);
  textSize(24);
  resetSketch();
  frameRate(fps);
}



function keyPressed() {
  if (key == ' ') {
    player.swap();
    if (lost) {
      resetSketch();
    }
  }
}



function resetSketch() {
  console.log("Restarting game");
  score = 0;
  lost = false;
  obstacles = [];
  next = 0;
  player = new Player();
  new Obstacle();
  randint = int(random(50, 150));
  loop();
}

function draw() {
  background(0);
  fill(219, 219, 219);
  text(score, 5, 24);
  fill(184, 197, 212);
  next += 1;
  // if(score >= 5){
  //   this.x -= 2005;
  // }
  if (next == randint) {
    obstacles.push(new Obstacle());
    score += 1;
    next = 0;
    randint = int(random(50, width/15));
  }
  for (let o of obstacles) {
    if (o.x < 0) {
      if (obstacles.length > 3) {
        obstacles.shift();
      }
    }
    o.move();
    o.show();
    if (player.hits(o)) {
      console.log("Game Over!");
      lost = true;
      noLoop();
    }
  }

  player.show();
  player.move();
}