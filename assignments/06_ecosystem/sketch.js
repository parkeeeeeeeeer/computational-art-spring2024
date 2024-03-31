let clouds =[];
let numClouds =10;

let count=0;

let forest=[];
let numTrees= 50;


let rays = []
let numRays= 360/20;

function setup() {
  createCanvas(600,600);

  for (let i =0;i<numTrees;i++){
    forest.push(new tree(random(50,width-50),random(height-125,height)));
  }

  for (let t =0;t<numClouds;t++){
    clouds.push(new Cloud(random(width),random(random(25,50),height-400),random(25,50)));
    console.log(clouds);
  }
  
}

function draw() {
  background(0,100,200);

  // Mountains
  noStroke();
  fill(190, 180, 169);;
  strokeJoin(ROUND);
  triangle(-25,height,30,height-200,90,height);
  triangle(0,height,150,height-300,300,height);
  triangle(200,height,275,height-270,350,height);
  triangle(250,height,400,height-340,550,height);
  triangle(400,height,550,height-380,700,height);

  stroke(0);
  rect(0,height-150,width,height-150);


  for (c of clouds){
    c.update();
    c.show();
  }


  stroke(0);
  for (t of forest){
    
    t.show();
  }
}


class tree{

  constructor(x,y){
    this.x=x;
    this.y=y;

    if (this.y < height-75){
      this.size= random(15,25);
    }
    else{
      this.size=random(25,40);
    }

  }

  show(){
    push();
    translate(this.x,this.y);
    branch(this.size);
    pop();
  }

}

function branch(l) {
  count++;

  strokeWeight(1.5);
  stroke(114,92,66)

  line(0,0,0,-l);

  translate(0, -l);

  l = l * 0.6;

  if (l > 5) {
    push();
    rotate(radians(-20 + map(noise(frameCount * 0.01), 0, 1, -2, 2)));
    branch(l);
    pop();

    push();
    rotate(radians(20 + map(noise(frameCount + 100) * 0.01, 0, 1, -2, 2)));
    branch(l);
    pop();
  } else {
    noStroke();
    fill(0,130,100); 
    ellipse(0, 0, 25);
  }
}

