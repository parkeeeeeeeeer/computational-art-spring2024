
let slider;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Created slider
  slider = createSlider(0,100);
  slider.position(width/2, 10);
  slider.size(200);
  angleMode(DEGREES);
}

function draw() {
    background(255);
    translate(width/2,height/2);
    
    let size = random(500);

    noFill()
  
  
    for (var i = 0; i < 50; i++) {
  
      rotate(frameCount / slider.value());
  
      beginShape()
      for (var j = 0; j < 360; j += size) {
        var rad = i * 3;
        var x = rad * cos(j);
        var y = rad * sin(j);
        var z = sin(frameCount * 2 + i * 5) * 50;
  
        vertex(x, y);
      }
      endShape(CLOSE)
    }


}

function shape(length,num){
  noFill();
  beginShape();
  for(let i =0;i<359;i+=360/num){
   var x = length* cos(i);
   var y = length* sin(i);
   vertex(x,y); 
  }
  endShape(CLOSE);
}
function curvedShape(length,num){
  noFill();
  beginShape();
  for(let i =0;i<359;i+=360/num){
   var x = length* cos(i);
   var y = length* sin(i);
   curveVertex(x,y); 
  }
  endShape(CLOSE);
}

// Extra
// rotate(frameCount/random(200,5000)); 
// triangle(0,0,0,startSize*n,startSize*n, startSize*n);



