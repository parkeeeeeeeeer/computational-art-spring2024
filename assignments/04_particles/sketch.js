let rippleSystem=[];

rippleX=0;
rippleY=0;
rippleD=10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  
}

function draw() {
  background(255);
  
  noFill();

  for(let i=0; i< rippleSystem.length;i++){
    rippleSystem[i].update();
  }


}
function mousePressed(){
  rippleSystem.push(new RippleSystem(mouseX,mouseY));
  console.log(rippleSystem.length);
}


