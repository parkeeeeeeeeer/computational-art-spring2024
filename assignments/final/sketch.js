let terrain
let img
let backImg
let imgWidth;
let imgHeight

let scl = 50

let mic, fft
let song

function preload() {
  // Load your song here
  song = loadSound('wave.wav')
  img = loadImage('water.jpg')
  // backImg = loadImage('dusk.png')

}

function setup() {
    createCanvas(400,400, WEBGL)
    angleMode(DEGREES)
    noiseDetail(2)
      
    amp = new p5.Amplitude()
    amp.setInput(song)
  
    fft = new p5.FFT()
    fft.setInput(song)
  
    // Play the song
    // song.play();
//     terrain = new Terrain(scl,0);
}

function draw() {
    background(255)
    // image(backImg,-width/2,-height+170)
    

    // img.loadPixels()

    let xOff=0
    let index = 0
    let start = frameCount *.01
    let level = amp.getLevel();
    console.log(start)
    noStroke()
    fill(255)
    // noFill()
    translate(-100,120,-200)
    rotateX(70)
    rotateZ(90)
    
   
    

    for(let x=(-width/2);x<=width/2;x+=scl){
      let yOff=0
      for(let y=(-height);y<=height/2;y+=scl){
        let h= map(noise(xOff+start,yOff+start),0,1,-scl*level*15,-scl)
        // let h = map(sin(xOff + start) * cos(yOff + start), -1, 1, -scl * 5, scl) * level
        
        
        // let r = map(x,-width/2,width/2,0,255)
        // let g = map(y,-height/2,height/2,0,255)
        // let b = map(h,-scl*2,0,0,255)


        // fill(r, g, b, alpha);

        push()
        // fill(r,g,b)
        translate(x,y,-h/2)
        texture(img);
        box(scl,scl,h)
        pop()

        yOff+=.1
        
      }
      xOff+=.1
      
     
    }
}

function mousePressed(){

  if (song.isPlaying()) {
    song.pause(); // Pause the song if it's playing
  } else {
    song.loop(); // Otherwise, play the song
  }

}



        // // let index = (x + y * img.width) * 4;
        // // let r = img.pixels[index];
        // // let g = img.pixels[index+1];
        // // let b = img.pixels[index+2];
        // // let a = img.pixels[index+3];

        // let avg = (r+g+b) / 3;
        // let alpha = 255;
        // // if (avg > 120) {
        // //   alpha = 0;
        // // }