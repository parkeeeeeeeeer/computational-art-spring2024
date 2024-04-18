let prevTimeStamp;

let kickSample;

let synth;
let loop;

let note = 0;

let amp;
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

  amp = new p5.Amplitude();


  lastTime = millis();
}

function draw() {
  background(255,100,0,.02);

  let level = amp.getLevel();
  let hue = map(level,0,1,100,360);

  prevTimeStamp = millis();

  noFill();
  stroke(hue,hue,100);

 translate(width/2,height/2);

 rotate((frameCount*.002)*360);

  for (let i =0;i<100;i+=7){
    let size = map(level,0,1,0,(width*1.5)-i*4);
    if(i%2==0){
      rotate(tan(frameCount*(i*0.0002))*100);
      rect(0,0,size,size,20);
      rotate(cos(frameCount*(i*0.0002))*100);


    }
    else{
      rotate(sin(frameCount*(i*0.1))*(loopInterval/2));
      rect(0,0,size,size,20);
      rotate(tan(frameCount*(i*0.1))*(loopInterval/2));

      
    }

    

    // rotate(sin(frameCount*(i*0.1))*100);
    // rect(0,0,size,size,20);
    // rotate(tan(frameCount*(i*0.0002))*360);


  }
}

function soundLoop(timeFromNow) {

  synth.play(midiToFreq(map(cos(note),0,1,30,70) + scales[scale][note]), map(cos(frameCount*(note*.002)),-1,1,.1,4), timeFromNow, random(0.1, 0.4));

  
  if (sixteenth % 8 === 0) {
    kickSample.play(timeFromNow);

  }

  note = floor(random(0, scales[scale].length));

  if (random() < 2) {
    synth.play(midiToFreq(map(tan(note),0,1,10,50) + scales[scale][note] + 3), map(sin(frameCount*(note*.1)),-1,1,.1,.9), timeFromNow, random(0.1, 0.4));

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