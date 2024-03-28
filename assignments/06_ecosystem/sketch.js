let fishy = [];
let numFish = 5;
let target;

let coral=[];
let numCoral=2;

let bubbles=[];
let numBubbles=5;


let size =20;

let res;
let x, y;
let bnc, spd;

let terainVal=[];

let t=0;
let waterImg;

function setup() {
  createCanvas(600, 600);
  pg = createGraphics(width, height);
  angleMode(DEGREES);


  // making the moving pieces
  for(let i = 0; i < numFish; i++) {
    h=random(height);
    w=random(width);
    fishy.push(new Fish(w, h,random(10,40)));
  }

  // for(let i = 0; i < numCoral; i++) {
  //   coral.push(new Coral(random(width), random(height/1.5,height)));
  // }

  for(let i = 0; i < numBubbles; i++) {
    bubbles.push(new Bubbles(random(100,width), random(100,height)));
  }


  // background
  for (let xIndex = 0; xIndex < width*4; xIndex+=10) {
    for (let yIndex = 0; yIndex < height*2; yIndex+=10) {
      if ((yIndex<height/1.5)){
        pg.fill(0,map(noise(xIndex,yIndex),0,1,100,150),map(noise(xIndex,yIndex),0,1,150,255));
        pg.stroke(0,map(noise(xIndex,yIndex),0,1,100,150),map(noise(xIndex,yIndex),0,1,150,255));
    
        pg.rect(xIndex,yIndex,size,size);
      }
      else{
        let r = map(noise(xIndex,yIndex),0,1,225,255);
        let g = map(noise(xIndex,yIndex),0,1,190,220);
        let b= map(noise(xIndex,yIndex),0,1,144,200);
        pg.stroke(r, g, b);
        pg.fill(r, g, b);
        pg.rect(xIndex,yIndex,size,size);
        
      }
      
    }
  }

}



function draw() {
  background(0,100,200);
  image(pg, 0, 0);

  for (let fish of fishy) {
    fish.update();
    fish.show();
  }


  // for (let c of coral) {
  //   c.show();
  // }

  for (let bubble of bubbles) {
    bubble.update();
    bubble.show();
  }
}
