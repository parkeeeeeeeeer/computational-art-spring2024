
let r = 100;

let dots=[];
let numDots=100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let t = 0;
  for (let i=0;i<numDots;i++){
    let n = noise(t);
    let x = map(i,0,numDots,0,width);
    let y = height/2;
    dots.push(new Dot(x*n,y*n,r*n));
    t+=0.005
  }
}

function draw() {
  background(255);
  for (let dot of dots){
      dot.update();
      dot.draw();
  }
  
}
class Dot{
  constructor(x,y,r){
    this.radius=r;
    this.position = createVector(x,y);
    this.velocity = createVector(random(-20,20),random(-20,20));
    
  }
  draw(){
    push();
    noFill();
    stroke(100,100,200);
    translate(this.position.x,this.position.y);
    rect(0,0,this.radius,this.radius,2);
    pop();
  }
  update(){
    this.position.add(this.velocity);
    // This code is from 1/22/2024 class.
    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x *= -1;
    }
  
    if (this.position.y > height || this.position.y < 0) {
      this.velocity.y *= -1;
    }
  }
}
