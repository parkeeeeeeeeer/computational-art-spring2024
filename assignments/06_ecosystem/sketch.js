let fishy = [];
let numFish = 1;
let target;

let coral=[];
let numCoral=20;

let rows,cols;
let size =20;
let terainVal=[];
let flowField=[];

let t=0;
let waterImg;

function setup() {
  createCanvas(600, 600);
  pg = createGraphics(width, height);
  angleMode(DEGREES);


  // target = createVector(width/4, height/2);
  for(let i = 0; i < numFish; i++) {
    fishy.push(new Fish(random(width), random(height),random(10,40)));
  }

  for(let i = 0; i < numCoral; i++) {
    coral.push(new Coral(random(width), random(height/1.5,height)));
  }
  console.log(coral);

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
    // console.log(fish);
    fish.update();
    fish.show();
  }
  // for (let c of coral) {
  //   // console.log(fish);
  //   c.show();
  // }
}

