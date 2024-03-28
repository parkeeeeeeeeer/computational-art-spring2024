class Coral{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.len=random(10,40);
        this.hue=random(255);
    }
    show(){
        fill(hue,0,hue);
        translate(this.x,this.y);
        branch(this.len);

    
    }
}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
      push();
      rotate(20);
      branch(len * 0.67);
      pop();
      push();
      rotate(-20);
      branch(len * 0.67);
      pop();
    }
}