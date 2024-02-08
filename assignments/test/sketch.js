
let slider;
function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(500,10000);
  slider.position(width/2, 10);
  slider.size(80);
}

function draw() {
    background(255);
    translate(width/2,height/2);
  
    // background(g);

    let startSize = 200;
    let t=0;

    r = random(255); // r is a random number between 0 - 255
    g = random(100,200); // g is a random number betwen 100 - 200
    b = random(100); // b is a random number between 0 - 100
    a = random(200,255); // a is a random number between 200 - 255

    for(let i =0;i<360;i+=1){
      let n = noise(t);
      noFill();
      stroke(31, 40, 45);
      // triangle(0,0,0,startSize*n,startSize*n, startSize*n);
      triangle(0,0,0,startSize*n,startSize*n, startSize*t);
      // rotate(frameCount/random(200,5000)); 

      rotate(frameCount/slider.value()); 
      t+=.005
    }

}


