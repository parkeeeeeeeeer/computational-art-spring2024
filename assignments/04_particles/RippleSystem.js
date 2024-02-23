class RippleSystem{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.particles=[];
        this.active=true;
        this.radius = 50;
        

    }

    update(){
        this.particles.push(new Ripple(this.x, this.y));
        

        for (let particle of this.particles) {
            particle.update();
        }

        for (let i = this.particles.length - 1; i >= 0; i--) {
            if (this.particles[i].destroy) {
                this.particles.splice(i, 1);
            }
        }
    }

}