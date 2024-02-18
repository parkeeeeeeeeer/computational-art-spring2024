
let slider;

let pens=[];
let numPen =5;
let stringLen=200;
let size =50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0;i<numPen;i++){
    pens[i] = new Pen(i*size,0,stringLen,size);
  }
  
}

function draw() {
    background(255);
    translate(width/2.5,height/4);
    line(0,0,(size*(numPen-1)),0)
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
    if(!this.dragging){
      let gravity =0.4;
      this.angleA=((-1*gravity)/this.r) *sin(this.angle);
      this.angleV+= this.angleA;
      this.angle+=this.angleV;
      this.angleV*=this.dampen;
    }
  }

  clicked(mx, my) {
    let d = dist(mx, my, this.pos.x, this.pos.y);
    if (d < this.ballSize) {
      this.dragging = true;
    }
  }

  // This tells us we are not longer clicking on the ball
  stopDragging() {
    this.angleV = 0; // No velocity once you let go
    this.dragging = false;
  }

  drag() {
    // If we are draging the ball, we calculate the angle between the
    // pendulum origin and mouse position
    // we assign that angle to the pendulum
    if (this.dragging) {
      let diff = p5.Vector.sub(this.pivot, createVector(mouseX, mouseY)); // Difference between 2 points
      this.angle = atan2(-1 * diff.y, diff.x) - radians(90); // Angle relative to vertical axis
    }
  }
}
