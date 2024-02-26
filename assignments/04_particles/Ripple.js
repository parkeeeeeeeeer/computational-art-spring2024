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
  constructor(y){
    this.rippley=y;
    this.x=random(width);
    this.y=y;
    this.hitGround=false;
    this.length=random(10,20);
    this.ground =random(height/2,height-10);
   
    this.speed=4.1;
    
    this.ripples=[];
    this.time=random(10,40);
   
    this.radius = random(10);
    this.rsLifeTime=random(30,200);

  }
  
  update(){ 
    this.y+=this.speed;
    console.log(this.y)
    this.rippley+=this.speed;
    this.show();

    if(this.y>this.ground){
      this.y=10000;
      this.makeRipple();
      for (let i=0;i<this.time;i++){
        for (let ripple of this.ripples) {
          ripple.show();
          ripple.update();
        }
        // this is so it does not excede ripple radius
        for (let i = this.ripples.length - 1; i >= 0; i--) {
          if (this.ripples[i].destroy) {
              this.ripples.splice(i, 1);
          }
        }
      }
    
    }
  }

  show(){
    // console.log(this.y);
    stroke(100);
    fill(0);
    strokeWeight(this.radius);
    line(this.x, this.y, this.x, this.y+this.length);

  }

  makeRipple(){
    noFill();
    for (let i=0;i<20;i++){
        this.ripples.push(new Ripple(this.x, this.ground,this.radius));
    }
  }
  
}