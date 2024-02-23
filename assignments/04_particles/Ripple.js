// This class uses the ellipse shape with only the outline. 
class Ripple{
  constructor(x,y,count){
    this.x=x;
    this.y=y;
    this.radius=random(10,50);
    this.radiusMax = random(75, 400);
    this.hue = random(360);
  }
  
  update(){
    noFill();
    stroke(this.hue);
    this.radius+=1;
    circle(this.x,this.y,this.radius);

    // if the radius of the ripple is 
    if (this.radiusMax<this.radius) {
      this.destroy = true;
    }

    // this.radius -= 0.1;
  }
  
}