
let slider;

let pensStart=[];
let pensMid=[];
let pensEnd=[];
let numPen =45;
let stringLen=numPen/2;
let size=25;
let t=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Creating different groups of stars at different locals
  for(let i=0;i<numPen;i++){
    pensStart[i] = new Pen(-(windowWidth/4),0,stringLen*i,size);
  }
  for(let i=0;i<numPen;i++){
    pensMid[i] = new Pen(0,0,stringLen*i,size);
  }
  for(let i=0;i<numPen;i++){
    pensEnd[i] = new Pen(windowWidth/4,0,stringLen*i,size);
  }
  
  
}

function draw() {
    background(0);
    // Translating the it to the cender of the screen
    translate(width/2,height/2);
    // Make all sets of stars
    for(let pen of pensStart){
      pen.update(noise);
      pen.make();
    }
    for(let pen of pensMid){
      pen.update(noise);
      pen.make();
    }
    for(let pen of pensEnd){
      pen.update(noise);
      pen.make();
    }
    
    
}
// Code inspired from the Nature of Code https://editor.p5js.org/natureofcode/sketches/MQZWruTlD
class Pen{

  constructor(x,y,r,size){
    this.origin = createVector(x,y);
    this.pos = createVector();
    this.r = r;
    this.angle=PI/4;
    this.angleA=0.0;
    this.angleV=0.0;
    this.dampen=1;
    this.ballSize=size;
    this.dragging =false;
   
    
    
  }

  make(){
    // Changed from sin,cos to tan, tan to get a spring effect.
    this.pos.set(this.r * tan(this.angle), this.r * tan(this.angle), 0); 
    this.pos.add(this.origin);
    
    stroke(255)
    line(this.origin.x,this.origin.y,this.pos.x,this.pos.y);
    stroke(255);
    // fill(225);
    star(this.pos.x,this.pos.y,this.ballSize,this.ballSize/4,5);
  }
  update(){
    let gravity =.4;
    this.angleA=((-1*gravity)/this.r) *(sin(this.angle));
    this.angleV+= this.angleA;
    this.angle+=this.angleV;
    this.angleV*=this.dampen;
    let rotateSpeed = 1000;
    rotate(frameCount/rotateSpeed);
    rotateSpeed +=gravity;
  
  }
}
// https://editor.p5js.org/p5/sketches/Form:_Star 
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  noFill();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

