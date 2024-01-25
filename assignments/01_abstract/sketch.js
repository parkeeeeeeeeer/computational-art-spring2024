let portrait;
let newImage = new Image();
newImage.src = 'C:/Users/parke/.vscode/computational-art-spring2024/assignments/01_portrait/self.jpg';

let x = 20;
let y =20;

function setup() {
  createCanvas(1000,1000);

  colorMode(HSB);
  portrait = new Portrait(x,y);
}

function draw() {
  background(0,0,100);
  
  portrait.update();
}

class Portrait{
  constructor(x,y){
    this.hue=0;
    this.position=createVector(x,y);
    this.velocity= createVector(random(-5,5),random(-5,5));
  }

  update(){
    this.position.add(this.velocity);
    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x *= -1;
    }
  
    if (this.position.y > height || this.position.y < 0) {
      this.velocity.y *= -1;
    }
  
    this.hue += 5; // hue = hue + 1;
    let saturation = mouseX / width * 100;
  
    fill(this.hue % 360, saturation, 100);
    newImage(this.position.x, this.position.y, 100);
  }
}
