class Coral{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.len=random(5,40);
    }
    show(){
        fill(0);
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