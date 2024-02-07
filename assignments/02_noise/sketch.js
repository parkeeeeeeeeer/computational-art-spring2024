
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}



function draw() {
  background(255);
  
  
  fillscreen();
}

function fillscreen(){
  let t = 0;
  let r =.005;
  for (let y = 0; y < height; y += 5) {
    for (let x = 0; x < width; x += 5) {
      noFill();
      let n = noise(x*r,y*r,t);
      stroke(random(255));
      heart(x*n+y, y*n+x, 5*n*(y+x));
    }
    t+=.0003
  }
}

// from https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg
function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}


