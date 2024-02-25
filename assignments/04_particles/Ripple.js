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
  constructor(x,y){
    this.rippley=y;
    this.x=x;
    this.y=y;
    this.hitGround=false;
    this.length=random(10,50);
    this.ground =random(height/2,height);
    this.speed=.5;
    this.ripples=[];

    this.radius = random(10);
    this.rsLifeTime=random(30,200);

  }
  
  update(){ 

    if(this.rippley=this.ground){
      this.hitGround=true;
      this.y=10000;
      this.show();
    }
    else{
      this.y+=this.speed;
      this.rippley+=this.speed;
      stroke(0);
      this.show();

    }

    if (this.hitGround){
      this.makeRipple();

    }


    for (let ripple of this.ripples) {
      ripple.show();
      ripple.update();
    }

    for (let i = this.ripples.length - 1; i >= 0; i--) {
      if (this.ripples[i].destroy) {
          this.ripples.splice(i, 1);
      }
  }
  }

  show(){
    
    strokeWeight(this.radius);
    line(this.x, this.y- this.length, this.x, this.y);

  }

  makeRipple(){
    noFill();
    for (let i=0;i<10;i++){
        this.ripples.push(new Ripple(this.x, this.rippley,this.radius));
    }
  }
  
}