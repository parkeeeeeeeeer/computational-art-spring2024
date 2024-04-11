let prevTimeStamp;

let kickSample;

let synth;
let loop;

let note = 0;

let sixteenth = 0;

let scale = "chinese";
let delay;
let noise=0;

let loopInterval = 1; // Loop interval of 1 second corresponds to 60 BPM

function preload() {
  kickSample = loadSound("./cord.wav");
}

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);

  synth = new p5.PolySynth();

  loop = new p5.SoundLoop(soundLoop, loopInterval/12);
  
  // frameRate(5);

  lastTime = millis();
}

function draw() {
  background(0, 0, 100);

  let deltaTime = millis() - prevTimeStamp;
  // console.log(deltaTime);

  prevTimeStamp = millis();
}

function soundLoop(timeFromNow) {
  if (sixteenth % 6 === 0) {
    kickSample.play(timeFromNow);
  }

  note = floor(random(0, scales[scale].length));

  if (random() < 0.5) {
    synth.play(midiToFreq(60 + scales[scale][note]), map(noise(noise),0,1,0,timeFromNow), timeFromNow, random(0.1, 0.4));
    if (random() < 0.2) {
      synth.play(midiToFreq(60 + scales[scale][note] + 3), random(0.1, 0.9), timeFromNow, random(0.1, 0.4));
    }
  }
  noise+=0.04
  note++;
  note = note % 8;

  sixteenth++;
}

function mousePressed() {
  userStartAudio();
  loop.start(); 
}