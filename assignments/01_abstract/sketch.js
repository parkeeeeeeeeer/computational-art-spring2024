// Global Variables 
let things = [];
let numThings = 5000;

let x=0;
let y=0;


// p5 calls this function right away when the webpage is loaded
function setup() {
  createCanvas(windowWidth, windowHeight);
  // make numThings amounts of lines by constructing a new object and setting it
 // to i element in the array of things
  for(let i =0; i< numThings;i++){
    things[i]= new Line(x,y,i);
  }

}

// The draw function is called over and over again really fast by p5
function draw() {
  background(51,69,90);
  noFill();
  
  for(let i =0; i< things.length;i+=1){
    things[i].update();
  }
}
// This class uses the ellipse shape with only the outline. 
class Line{
  constructor(x,y,count){
    this.count=count;
    this.position = createVector(x,y);
    this.velocity = createVector(random(-20,20),random(-20,20));
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
    // rotating the ellipse by i.
    rotate(sin(frameCount+this.count))
    // Using the position of x and y to vary the shape and place of the ellipse.
    ellipse(windowWidth,windowHeight,600-this.position.x*3,600-this.position.y*3,200-this.count);
    // This makes the range of color mostly blue and black
    stroke(random(50),0,random(122,255));
  }
}



