let terrain = [];
let img;
let backImg;
let imgWidth;
let imgHeight;

let scl = 50;

let mic, fft;
let song;
let time = 0;

class Box {
  constructor(x, y, z, scl, img) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.scl = scl;
    this.img = img;
  }

  display() {
    push();
    translate(this.x, this.y, this.z);
    texture(this.img);
    box(this.scl, this.scl, this.scl);
    pop();
  }
}

// function preload() {
//   // Load your song and images here
//   song = loadSound('wave.wav');
//   img = loadImage('water.jpg');
//   // backImg = loadImage('dusk.png');
// }

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
  noiseDetail(2);

  // amp = new p5.Amplitude();
  // amp.setInput(song);

  // fft = new p5.FFT();
  // fft.setInput(song);

  // Initialize the terrain grid
  for (let x = -width / 2; x <= width / 2; x += scl) {
    for (let y = -height; y <= height / 2; y += scl) {
      let h = 0; // Initial height, you can modify this as needed
      terrain.push(new Box(x, y, -h / 2, scl, img));
    }
  }
}

function draw() {
  background(11, 34, 51);

  // Draw the terrain
  for (let i = 0; i < terrain.length; i++) {
    terrain[i].display();
  }

  // Draw boat or other objects if needed
  drawBoat();
}

function drawBoat() {
  fill(255, 150);
  noStroke();
  let boatPosX = noise(time * 0.2) * width;
  let boatPosY = (height - 40) - noise(100 + time * 0.5) * 80;
  circle(boatPosX, boatPosY, 80);
}

// function mousePressed() {
//   if (song.isPlaying()) {
//     song.pause(); // Pause the song if it's playing
//   } else {
//     song.loop(); // Otherwise, play the song
//   }
// }
