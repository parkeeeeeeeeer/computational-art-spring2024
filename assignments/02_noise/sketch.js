let t = 0;
let r =.005;

let hearts = [];
let numhearts = 6000;

function setup() {
  createCanvas(windowWidth, windowHeight);

  
}

function draw() {
  let t = 0;
  let rez=0.5;
  let size = 5;
  background(255);
  for(let y =0; y< height;y+=size){
    for(let x=0; x<width;x+=size){
      let n = noise(x*rez,y*rez, t);
      let n1 = noise(x*rez, t, y*rez);
      let n2 = noise(t,x*rez,y*rez);
      let hue =map(n,0,1,0,255);
      let hue2=map(n1,0,1,0,255);
      let hue3=map(n1,0,1,0,255);

      noFill(); 
      stroke(hue,hue2,hue3);
      // rotate(tan(frameCount+n*y));
      heart(x,y,size);
    }
    t+=0.0003;
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


