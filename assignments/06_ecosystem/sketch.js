let fishy = [];
let numFish = 10;
let target;


let cellWidth;
let cellHeight;

let rows,cols;
let size =20;
let terainVal=[];
let flowField=[];
let t=0;
let waterImg;

function setup() {
  createCanvas(600, 600,WEBGL);
  angleMode(DEGREES);

  cellWidth = width / size;
  cellHeight = height / size;
  let landscapeNum=width+height;
  let factor=100;

  flowField = new Array(cel);
  numBlocks = (landscapeNum/size)+1;

  let xOff = 0;
  for (let x=0; x<numBlocks; x++){ 
    flowField[x]=[];
    let yOff=0;
    for (let y=0;y<numBlocks; y++){
      terainVal[x][y]=new Cell;
      yOff+=0.1;
    }
    xOff+=.1;
  }

  let xoff = 0;
  for (let x=0; x<numBlocks; x++){ 
    terainVal[x]=[];
    flowField[x]=[];
    let yoff=0;
    for (let y=0;y<numBlocks; y++){
      terainVal[x][y]=map(noise(xoff,yoff),0,1,-factor,factor);
      yoff+=0.1;
    }
    xoff+=.1;
  }
  
  target = createVector(width/4, height/2);
  for(let i = 0; i < numFish; i++) {
    fishy.push(new Fish(random(width), random(height)));
  }
}

function draw() {
  background(0,100,200);


  // noFill();

  // inspired and adapted from https://www.youtube.com/watch?v=IKB1hWWedMk
  
  rotateX(60); 
  
  // fill(r, g, b);
  translate(-width,-height/2);
  for (let y=0; y<numBlocks; y++){ 
    beginShape(TRIANGLE_STRIP);
    for (let x=0;x<numBlocks; x++){
      let r = map(noise(x,y),0,1,225,255);
      let g = map(noise(x,y),0,1,190,220);
      let b= map(noise(x,y),0,1,144,200);
      stroke(r, g, b);
      fill(r, g, b);
      vertex(x*size,y*size,terainVal[x][y]);
      vertex(x*size,(y+1)*size,terainVal[x][y+1]);
    
    }
    endShape();
  }
  t+=.01;

  // translate(-width,-height);

  for (let xIndex = 0; xIndex < numBlocks; xIndex++) {
    for (let yIndex = 0; yIndex < numBlocks; yIndex++) {
      flowField[xIndex][yIndex].update();
      flowField[xIndex][yIndex].show();
    }
  }
  
}

function makeFish(){
  for (let fish of fishy) {
    fish.update();
    fish.show();
  }
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(random(360));
    branch(len * 0.67);
    pop();
    push();
    rotate(-random(360));
    branch(len * 0.67);
    pop();
  }
}