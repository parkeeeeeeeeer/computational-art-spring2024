// This class uses the ellipse shape with only the outline. 
class Ripple{
  constructor(x,y,radius){
    this.x=x;
    this.y=y;
    this.radius=radius;
    this.radiusMax = random(this.radius,this.radius*3);
    this.hue = random(140,190);
  }
  
  update(){
    noFill();
    stroke(15,90,this.hue);
    this.radius+=1;
    
    ellipse(this.x,this.y,this.radius*3,this.radius*2);

    // if the radius of the ripple is 
    if (this.radiusMax<this.radius) {
      this.destroy = true;
    }

    
  }
  show(){
    ellipse(this.x,this.y,this.radius,this.radius);

  }
  
}

class Rain{
  constructor(x,y,radius,ground,length){
    this.pos = createVector(x,y);
    this.vel=createVector();
    this.radius = radius;
    this.length=length;
    this.ground =ground;
    this.speed=.51;
  }
  
  update(){
    this.pos.add(this.speed);

    if (this.pos.y=this.ground) {
      this.destroy = true;
    }

    
  }
  show(){
    
    stroke(0);
    strokeWeight(this.radius);
    line(this.pos.x,this.pos.y,this.pos.x,this.pos.y-this.length);

  }

}