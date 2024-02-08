
let slider;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Created slider
  slider = createSlider(500,10000);
  slider.position(width/2, 10);
  slider.size(200);
}

function draw() {
    background(255);
    translate(width/2,height/2);

    let startSize = 200;
    let t=0;

    for(let i =0;i<360;i+=1){
      let n = noise(t);
      let color = map(n,0,1,0,255);
      // making it just the lines
      noFill();
      // mapping noise to the stroke color
      stroke(31, 40, color);
      // Using noice and 4 to make a new triangle
      triangle(0,0,0,startSize*n,startSize*n, startSize*t);
      
      
      // speed based on slider val
      rotate(frameCount/slider.value()); 
      t+=.005;
    }

}


// Extra
// rotate(frameCount/random(200,5000)); 
// triangle(0,0,0,startSize*n,startSize*n, startSize*n);



