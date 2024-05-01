class Terrain {
    constructor(scl) {
        this.scl=scl;
        this.xOff = 0;
        this.start = frameCount*.0001;
    }
  
    display() {
        translate(0, 0, -400);
        rotateX(80);
        if(this.xOff>11){
            this.xOff=0;
        }

        for (let x = -width / 2; x <= width / 2; x += scl) {
            let yOff = 0;
            for (let y = -height; y <= height / 2; y += scl) {
                let h = map(noise(this.xOff + this.start, yOff + this.start), 0, 1, -this.scl*2, this.scl*2);
                push();
                translate(x, y, -h / 2);
                box(this.scl, this.scl, h);
                pop();
        
                yOff += 0.1;
            }
            this.xOff += 0.1;
            console.log(this.xOff)

        }
    }
  }
  