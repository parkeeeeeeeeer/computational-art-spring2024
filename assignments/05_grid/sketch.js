
function setup() {
    createCanvas(windowWidth,windowHeight);
}

function draw() {
    background(0,0,0);
    // Setting noise for the y
    let yt=0;
    // Length of each square
    let length = 50;;
    // Creating Grid
    shape(1,1);
    for(let y=0;y<innerHeight;y+=length){
        // Setting noise for the x
        let xt=0;
        for(let x=0;x<width;x+=length){
            let r = noise(xt, yt) * 255;
            stroke(255,255,225);
            rect(x,y,length,length);
            push();
            translate(x+length/2,y+length/2);
            stroke(20,80,r,r);
            curvedShape(25*noise(xt,yt),25*noise(xt,yt));
            pop();
            xt+=.3;
        }
        yt+=.3;
    }

}
// This is the shape making function.
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
//   Making a shape that is with curves
  function curvedShape(length,num){
    noFill();
    beginShape();
    for(let i =0;i<360;i+=360/num){
     var x = length* cos(i);
    //  Usage of Sin
     var y = length* sin(i);
     curveVertex(x,y); 
    }
    endShape(CLOSE);
  }
  