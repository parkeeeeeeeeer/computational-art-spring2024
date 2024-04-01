
function setup() {
    createCanvas(600,600);
}

function draw() {
    background(255);

    let len = 20



    translate(width/2,height/2);

    circle(0,0,20);
    ellipse(-20,0,40,20);
    line(0,0,10,-40)
    line(0,0,-10,-40)



    // arc(175, 35, 50, 50, -PI / 6, PI / 6, PIE); // 60 degrees

    // beginShape();
    // curveVertex(0,0,len,0)
    // curveVertex(0,0,len,0)
    // endShape();
 
}

