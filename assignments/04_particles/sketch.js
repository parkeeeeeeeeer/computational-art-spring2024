// Objective drop ball and where it lands is where the ball stops and makes a ripple pattern
let rippleSystem=[];

rippleX=0;
rippleY=0;
rippleD=10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0;i<10;i++){
    rippleSystem.push(new RippleSystem(random(width),0));
  }
  
}

function draw() {
  background(250);
 
  fill(14,94,130);
  noStroke();
  rect(0,height/4,width,height-height/4);


  noFill();
  for(let i=0; i< rippleSystem.length;i++){
    rippleSystem[i].update();
  }


}
// function mousePressed(){
//   rippleSystem.push(new RippleSystem(mouseX,mouseY));
// }
