
function setup() {
    createCanvas(600,600);
    angleMode(DEGREES);
    frameRate(6);

}

function draw() {
    background(255);
    let size =20;
    stroke(0);
    translate(width/2,height/2);
    
    branch(size);
}

// https://editor.p5js.org/YuanHau/sketches/ByvYWs9yM
function branch(len) {
    rotate(90);
    let size=random(len);
    ellipse(0,0,size,size);
//   translate(0, -len);

  if (len > 10) {
    push();
    translate(random(-len,-len/2),random(-len,-len/2));
    branch(len * 0.75)
    pop();
    push();
    translate(random(-len,-len/2),random(-len,-len/2));
    branch(len * 0.75)
    pop();  
  }
}
