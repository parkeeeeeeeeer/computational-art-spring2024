class Cell{
    constructor(x,y,size,angle){
      this.x=x;
      this.y=y;
      this.size=size
    
      this.angle=angle;
      this.hue = map(this.angle, 0, 360, 100, 255);


      this.offsetX = random(-1, 1);
      this.offsetY = random(-1, 1);
      this.offsetRotation = 0;

      this.scaleOffset = 0;
  }

  update() {
      this.angle += .1;
      this.hue = map(this.angle, 0, 360, 100, 255);
      this.hue = (this.hue + 255) % 255;

      this.offsetX += random(-1, 1);
      this.offsetY += random(-1, 1);
      this.offsetRotation += 0.01;

      this.scaleOffset += random(-.01, .01);
  }

  show() {
      let x = cellWidth * this.xIndex + this.offsetX;
      let y = cellHeight * this.yIndex + this.offsetY;

      push();

      translate(x + cellWidth/2, y + cellHeight/2);
      rectMode(CENTER);
      fill(this.hue, 70, 100);
      rotate(this.offsetRotation);
      scale(this.scaleOffset);
      rect(0, 0, cellWidth, cellHeight);
      rotate(this.angle);
      
      pop();
  }
  }