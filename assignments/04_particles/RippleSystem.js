class RippleSystem{
    constructor(x,y){
        this.pos=createVector(x,y);
        this.active=false;
        this.speed = -.0009;
        this.ripples=[];
        this.rainDrops=[];
        this.radius = random(10);
        this.rsLifeTime=random(30,200);
        this.active = false;
        this.ground= random(height/2,height-20);
        this.length=random(5,20);
    }

    update(){  
        // Move upward until boomHeight, and then activate the particle instantiation
        if (this.pos.y = this.ground) {
            this.active=true;
        } 
        

        if(this.active){
            this.makeRain();
            this.makeRipple(this.pos.x, this.pos.y);
        }

        this.rsLifeTime--; 
        
        if (0<this.rsLifeTime){
            for (let rain of this.rainDrops) {
                rain.update();
                rain.show();
            }
            for (let ripple of this.ripples) {
                ripple.show();
                ripple.update();
            }
        
            for (let i = this.rainDrops.length - 1; i >= 0; i--) {
                if (this.rainDrops[i].destroy) {
                    this.rainDrops.splice(i, 1);
                }
            }
            for (let i = this.ripples.length - 1; i >= 0; i--) {
                if (this.ripples[i].destroy) {
                    this.ripples.splice(i, 1);
                }
            }
        }     
        
    }
    makeRipple(x,y){
        noFill();
        for (let i=0;i<10;i++){
            this.ripples.push(new Ripple(x, y,this.radius));
        }

    }
    makeRain(){
        this.rainDrops.push(new Rain(this.pos.x,0,this.radius,this.ground,this.length));
    
    }
}

function loops(objectList){
   
}