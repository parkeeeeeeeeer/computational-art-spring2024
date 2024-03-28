class Fish {

    // constructor(x, y,size) {
    //     this.x = x;
    //     this.y = y;
    //     this.angle = 0; // Starting angle for swimming motion
    //     this.amplitude = 20; // Amplitude of the swimming motion
    //     this.frequency = 0.05; // Frequency of the swimming motion
    //     this.size = size; // Size of the fish
    // }
    

    constructor(x, y,size) {
        // For more detailed comments on how pos, vel, acc, and addForce work

        // this.x=x;
        // this.y=y;
        this.size=size

        this.pos=createVector(x,y);
        this.vel=createVector(1,0);
        this.acc=createVector(0,0);

        this.angle=0;

        this.max=2;
        this.maxForce=0.05;
        this.mass = 1;
        this.hue=0;
        this.angleoffset= random(-180,180);
        // this.bubbleTrail=new Bubbles(x-size,y);
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
       let angle = this.vel.heading();
       rotate(angle);
    //    this.angle += this.angleoffset;
    //    this.bubbleTrail.update();
       this.wrap();
    }

    show(){
        push();

        fill(0)
        translate(this.pos.x,this.pos.y);
     
        
        beginShape();
        vertex(this.size, 0);
        vertex(-this.size, this.size/2);
        vertex(-this.size, -this.size/2);
        endShape(CLOSE);
        translate(this.size/2,0);
        ellipse(0,0,(this.size*2)+10,this.size);
        pop();
        // this.bubbleTrail.show();

        
    }
}



class Bubbles{
    constructor(x,y){
        this.y=y;
        this.x=x;
        this.size=random(10,20);
        // this.g=random(200,255)

        
    }

    update(){
        this.y -= random(2);
        this.x +=random(2);
        // this.wrap();
        
    }
    show(){
        translate(this.x,this.y);
        makeBubbles(this.size);
    }
}

function makeBubbles(len) {
    noFill();
    // rotate(90);
    let size=random(len);
    rect(0,0,size,size);

  if (len > 10) {
    push();
    translate(random(-len,-len/2),random(-len,-len/2));
    makeBubbles(len * 0.75)
    pop();
    push();
    translate(random(-len,-len/2),random(-len,-len/2));
    makeBubbles(len * 0.75)
    pop();  
  }
}