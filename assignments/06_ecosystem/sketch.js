let things = [];
let numThings = 1000;
let target;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);

  noStroke();
  fill(100, 10, 0);
  
  target = createVector(width/4, height/2);
  for(let i = 0; i < numThings; i++) {
    things.push(new Thing(random(width), random(height), target));
  }
}

function draw() {
  background(0, 0, 100 , 0.001);

  target.x = mouseX; 
  target.y = mouseY;

  ellipse(target.x, target.y, 50, 50);

  for (let thing of things) {
    thing.update();
    thing.show();
  }
}