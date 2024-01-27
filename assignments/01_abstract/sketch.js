let things = [];
let numThings = 5000;

let x=0;
let y=0;


// p5 calls this function right away when the webpage is loaded
function setup() {
  createCanvas(windowWidth, windowHeight);

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
//   x+=1;
//   y+=1;
//   sinX=sin(x);
//   sinY=sin(y);
//   rect(sinX+200,sinY+200,50,50);
}

class Line{
  constructor(x,y,count){
    this.count=count;
    this.position = createVector(x,y);
    this.velocity = createVector(random(-20,20),random(-20,20));
  }

  update(){
    this.position.add(this.velocity);

    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x *= -1;
    }
  
    if (this.position.y > height || this.position.y < 0) {
      this.velocity.y *= -1;
    }

    rotate(sin(frameCount+this.count))
    ellipse(windowWidth,windowHeight,600-this.position.x*3,600-this.position.y*3,200-this.count);
    stroke(random(50),0,random(122,255));
  }
}


/**
 * function draw() {
  background(255);
  noFill();
  // translate(width/2,height/2);
  for(let i =0; i< numSquares;i++){
    
    rotate(sin(frameCount+i)*100)
    rect(0,0,600-i*3,600-i*3,200-i);
    stroke(random(255));
    
  }
//   x+=1;
//   y+=1;
//   sinX=sin(x);
//   sinY=sin(y);
//   rect(sinX+200,sinY+200,50,50);
}
 */