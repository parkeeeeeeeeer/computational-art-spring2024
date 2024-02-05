
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

// Thursday play with map 
// Try to aply noise
s = 200;

function draw() {
  background(0,0,100);
  let hue= map(mouseY,0,height,0,360);
  let hueWidth=map(mouseX,0,width,0,360);
  fill(hue,hueWidth,100);
  heart(width/2,height/2,s);
}


function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}