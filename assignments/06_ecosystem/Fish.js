class Fish {
    constructor(x, y,size) {
        // For more detailed comments on how pos, vel, acc, and addForce work

        this.x=x;
        this.y=y;
        this.size=size

        this.pos=createVector(x,y);
        this.vel=createVector(1,0);
        this.acc=createVector(0,0);

        // this.target=

        this.max=2;
        this.maxForce=0.05;
        this.mass = 1;
        this.hue=0;

        this.bubbles= new Bubbles(this.pos.x-this.size,this.pos.y);

    }

    addForce(force) {
        let forceWithMass = p5.Vector.div(force, this.mass);
        this.acc.add(forceWithMass);
    }

    wrap() {
        this.pos.x = (this.pos.x + width) % width;
        this.pos.y = (this.pos.y + height) % height;
    }


    update() {
       this.vel.add(this.acc);
       this.vel.limit(this.max);
       this.pos.add(this.vel);

       this.bubbles.pos=this.pos;
       this.wrap();
    //    this.acc.set(0,0);
      
    }

    show(){
        fill(0)
        translate(this.x,this.y);
        push();
        
        beginShape();
        vertex(this.size, 0);
        vertex(-this.size, this.size/2);
        vertex(-this.size, -this.size/2);
        endShape(CLOSE);
        translate(this.size/2,0);
        ellipse(0,0,(this.size*2)+10,this.size);
    
        pop();
    }
}

class Bubbles{
    constructor(x,y){
        this.y=y;
        this.x=x;
        this.size=random(10,20);
    }
    // update(){
        
    // }
    show(){
        translate(this.x,this.y);
        makeBubbles(this.size);
    }
}

function makeBubbles(len) {
    rotate(90);
    let size=random(len);
    ellipse(0,0,size,size);

  if (len > 10) {
    push();
    translate(random(-len,-len/2),random(-len,-len/2));
    branch(len * 0.75)
    pop();
    push();
    translate(random(-len,-len/2),random(-len,-len/2));
    branch(len * 0.75)
    pop();  
  }
}