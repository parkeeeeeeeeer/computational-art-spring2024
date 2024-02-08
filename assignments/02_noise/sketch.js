let t = 0;
let r =.005;

let hearts = [];
let numhearts = 6000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB,100);
  
}

function draw() {
  let t = 0;
  let rez=0.5;
  let size = 5;
  background(255);
  for(let y =0; y< height;y+=size){
    for(let x=0; x<width;x+=size){
      let n = noise(t);
      let hue =map(n, 0, 1, 0, 100);

      noFill(); 
      stroke(hue,100,100);
      heart(x,y,size);
      rotate(frameCount/n*100);
    }
    t =0.005;
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