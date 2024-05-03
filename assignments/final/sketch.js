let terrain;
let img;
let backImg;
let imgWidth;
let imgHeight;

let scl = 50;

let mic, fft;
let song;
let time = 0;
let obj;

let moonDiameter = 100; // Diameter of the moon
let moonX =-100;
let moonY = -100; // Position of the moon
let slider1;
let slider2;


function preload() {
  // Load your song here
  song = loadSound('wave.wav');
  img = loadImage('water.jpg');
  // backImg = loadImage('dusk.png')

}

function setup() {
  createCanvas(400,400, WEBGL);
  angleMode(DEGREES);
  noiseDetail(2);
      
  amp = new p5.Amplitude();
  amp.setInput(song);
  
  slider1 = createSlider(0,30)
  slider2 = createSlider(0,360)

  slider1.position(10,0)
  slider1.size(100)

  slider2.position(10,20)
  slider2.size(100)



}

function draw() {
  background(	11, 34, 51);

  noStroke();
  fill(230,230,180);
  ellipse(-100,-100,100,100);

  let scale = slider1.value();
  let rotation = slider2.value();

  // text('Wave Size', slider1.x * 2 + slider1.width, 35);
  // text('Grid Angle', slider2.x * 2 + slider2.width, 65);


  let xOff=0;
  let index = 0;
  let start = frameCount *.01;
  let level = amp.getLevel();
  
  noStroke();
  fill(255);
  translate(-100,160,-200);
  rotateX(80);
  rotateZ(90);
  
    

  for(let x=(-width/2);x<=width/2;x+=scl){
    let yOff=0;
    for(let y=(-height);y<=height/2;y+=scl){
      let h= map(noise(xOff+start,yOff+start),0,1,-scl*(level*scale),-scl*1.5);

      push();
      translate(x,y,-h/2);
      texture(img);
      // rotate(map(noise(noise(xOff+start,yOff+start),0,1),0,1,50,100))
      rotate(rotation)
      box(scl,scl,h);
      pop();

      yOff+=.1;
    }
    xOff+=.1;
    rotateY((map(level,0,1,0,10)));
    rotate((map(level,0,1,0,5)));  
  }


}


function mousePressed(){

  if (song.isPlaying()) {
    song.pause(); // Pause the song if it's playing
  } else {
    song.loop(); // Otherwise, play the song
  }

}

function drawMoon() {
  fill(255);
  ellipse(moonX, moonY, moonDiameter, moonDiameter);
}

function updateMoonPhase() {
  // Update moon phase based on time
  moonPhase = (millis() / (29.53 * 24 * 60 * 60 * 1000)) % 1; // 29.53 days for a complete lunar cycle

  // Adjust moon appearance based on moon phase
  let moonColor = lerpColor(color(255), color(0), moonPhase); // New moon to full moon (white to black)
  fill(moonColor);
  noStroke();
  ellipse(moonX, moonY, moonDiameter, moonDiameter);
}


// class Box {
//   constructor(x, y, z, size) {
//     this.x = x;
//     this.y = y;
//     this.z = z;
//     this.size = size;
//     this.velocity = createVector(0, 0); // Initial velocity
//     this.gravity = createVector(0, 0.1); // Gravity force
//     this.buoyancy = createVector(0, -0.05); // Buoyancy force

//   }
//   update(waterLevel){
//      // Apply gravity force
//      this.velocity.add(this.gravity);
    
//      // If the box is below the water level, apply buoyancy force
//      if (this.y + this.size / 2 > waterLevel) {
//        let displacement = this.y + this.size / 2 - waterLevel;
//        let buoyantForce = this.buoyancy.copy().mult(displacement);
//        this.velocity.add(buoyantForce);
//      }
     
//      // Update position based on velocity
//      this.y += this.velocity.y;
     
//      // Prevent the box from sinking too far below the water level
//      if (this.y + this.size / 2 > waterLevel) {
//        this.y = waterLevel - this.size / 2;
//      }

//   }
//   display() {
//     push();
//     translate(this.x, this.y, this.z);
//     box(this.scale);
//     pop();
//   }
// }