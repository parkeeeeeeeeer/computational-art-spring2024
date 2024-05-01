let terrain


let scl = 30

let mic, fft
let song

function preload() {
  // Load your song here
  song = loadSound('cord.wav')
}

function setup() {
    createCanvas(400,400, WEBGL)
    angleMode(DEGREES)

    noiseDetail(1)

    fft = new p5.FFT();
    fft.setInput(song);
  
    // Play the song
    song.play();
//     terrain = new Terrain(scl,0);
}

function draw() {
    background(255)

    let spectrum = fft.analyze()


    // translate((-width/2)+scl/2,(-height/2)+scl/2,-400)

    // translate(-width/2,-height/2,-400)

    // for(let x=0;x<cols;x++){
    //   for(let y=0;y<rows;y++){
    //       push()
    //       translate(x*scl,y*scl,0)
    //       box(scl)
    //       pop()
      
    //   }
    // }
    let xOff=0
    let index = 0
    let start = frameCount *0.01

    console.log(start)


    translate(0,0,-400)
    rotateX(80)
    
    for(let x=(-width/2);x<=width/2;x+=scl){
      let yOff=0
      for(let y=(-height);y<=height/2;y+=scl){
        let h= map(spectrum[index], 0, 255, -scl * 2, 0)
        // let h = map(noise(xOff+start,yOff+start),0,1,-scl*2,scl*2)
        push()
        translate(x,y,-h/2)
        box(scl,scl,h)
        pop()

        yOff+=.1
        index += 1
        
      }
      xOff+=.1
      
     
    }

    // terrain.display();

    
}

function mousePressed(){

  if (song.isPlaying()) {
    song.pause(); // Pause the song if it's playing
  } else {
    song.play(); // Otherwise, play the song
  }

}
