
function setup() {
    createCanvas(windowWidth,windowHeight);
}

function draw() {
    background(0);
    let t=0;
    let length = 50;;
    let color = random(255);
    for(let y=0;y<innerHeight;y+=length){
        for(let x=0;x<width;x+=length){
            // rotate(frameCount/6);
            rect(x,y,length,length);
            push();
            translate(x+length/2,y+length/2);
            stroke(20,80,color,200);
            shape(25*noise(t),25*noise(t));
            pop();
            t+=.3;
        }
    }

}

function shape(length,num){
    noFill();
    beginShape();
    for(let i =0;i<359;i+=360/num){
     var x = length* cos(i);
     var y = length* sin(i);
     vertex(x,y); 
    }
    endShape(CLOSE);
  }
  function curvedShape(length,num){
    noFill();
    beginShape();
    for(let i =0;i<360;i+=360/num){
     var x = length* tan(i);
     var y = length* tan(i);
     curveVertex(x,y); 
    }
    endShape(CLOSE);
  }
