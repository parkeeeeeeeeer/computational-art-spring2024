class Cloud {

    constructor(x, y,size) {
        this.size=size

        this.x=x;
        this.y=y;

        this.pos=createVector(x,y);
        this.vel=createVector(1,0);
        this.acc=createVector(0,0);

        this.bobForce=random(-0.1,0.1);
        this.repos=random(25,height-400);

        this.max=random(0.00001,.5);
        this.maxForce=0.05;
        this.mass = random(.5);
        this.hue=0;

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

       if (this.pos.y<height-400){
        this.pos.y+= this.bobForce;
       }
       else{
        this.pos.y=this.repos;
       }
       


       this.wrap();
    }

    show(){
        noStroke();
        fill(255,225,255);

        push();

        
        // translate(this.pos.x,this.pos.y);
     
        ellipse(this.pos.x,this.pos.y,this.size,this.size);// center puff
        circle(this.pos.x-(this.size/2),this.pos.y,this.size);// left puff
        circle(this.pos.x+(this.size/2),this.pos.y,this.size);// right puff
        circle(this.pos.x,this.pos.y-(this.size/2),this.size);// upper puff
        pop();


        
    }
}


