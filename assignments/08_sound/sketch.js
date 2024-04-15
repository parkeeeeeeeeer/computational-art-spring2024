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
  createCanvas(600, 600);
  colorMode(HSB);
  angleMode(DEGREES);
  rectMode(CENTER);

  synth = new p5.PolySynth();
  loop = new p5.SoundLoop(soundLoop, loopInterval/4);



  lastTime = millis();

  button = createButton('Play');
  button.mousePressed();
}

function draw() {
  background(255,100,0,.02);

  let deltaTime = millis() - prevTimeStamp;


  prevTimeStamp = millis();

  noFill();
  stroke(0,0,100);

 translate(width/2,height/2);

  for (let i =0;i<200;i++){
    if(i%2==0){
      rotate(tan(frameCount*(i*0.0002))*(loopInterval/4));
    }
    else{
      rotate(sin(frameCount*(i*0.1))*(loopInterval/4));
    }
    rect(0,0,width-i*3,height-i*3,20);

  }
}

function soundLoop(timeFromNow) {

  
  if (sixteenth % 4 === 0) {
    kickSample.play(timeFromNow);

  }

  note = floor(random(0, scales[scale].length));

  if (random() < 0.5) {
    synth.play(midiToFreq(60 + scales[scale][note]), map(cos(frameCount*(note*.0002)),-1,1,.1,4), timeFromNow, random(0.1, 0.4));
    if (random() < 0.2) {
      synth.play(midiToFreq(60 + scales[scale][note] + 3), map(sin(frameCount*(note*.1)),-1,1,.1,.9), timeFromNow, random(0.1, 0.4));
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