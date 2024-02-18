
let slider;

let pens=[];
let numPen =50;
let stringLen=25;
let size=25;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i=0;i<numPen;i++){
    pens[i] = new Pen(0,0,stringLen*i,size);
  }
  
}

function draw() {
    background(255);
    translate(width/2,0);

    for(let pen of pens){
      pen.update();
      pen.make();
    }
    
    
}

function mousePressed(){
  for(let pen of pens){
    pen.clicked(mouseX,mouseY);
    
  }

}
// Code used from the Nature of Code https://editor.p5js.org/natureofcode/sketches/MQZWruTlD
class Pen{

  constructor(x,y,r,size){
    this.origin = createVector(x,y);
    this.pos = createVector();
    this.r = r;
    this.angle=PI/4;
    this.angleA=0.0;
    this.angleV=0.0;
    this.dampen=0.995;
    this.ballSize=size;
    this.dragging =false;
  }

  make(){
    this.pos.set(this.r * sin(this.angle), this.r * cos(this.angle), 0); 
    this.pos.add(this.origin);
    
    line(this.origin.x,this.origin.y,this.pos.x,this.pos.y);
    if (this.dragging) fill(200);
    circle(this.pos.x,this.pos.y,this.ballSize);
  }
  update(){
    let gravity =0.4;
    this.angleA=((-1*gravity)/this.r) *sin(this.angle);
    this.angleV+= this.angleA;
    this.angle+=this.angleV;
    this.angleV*=this.dampen;
  
  }
}
