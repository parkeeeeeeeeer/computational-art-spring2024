let count;

function setup() {
	createCanvas(windowWidth * 0.95, windowHeight * 0.95);
    colorMode(HSB);
    rectMode(CENTER);
}

function draw() {
	background(255,100,0,.1);

    translate(width/2,height/2);
    branch(width);
    // branchother(width);
}

function branch(len) {
    count ++;
    rotate(frameCount*.005);

    noStroke();
    fill(360,10,100);
    // shape(len,count);
    circle(len,len,len)
    rect(-len,-len,len,len)

    // translate(len/2,len/2);
    // rect(0,0,len-10,len-10);
    if (len > 1) {
        push();
        branch(len*.80);
        pop();
    
    }
}

// function branchother(len) {
//     count ++;
//     rotate(frameCount*.011);
//     // shape(len,count);
//     trianlgle(len,le-20n,len,len+20,len+20,len)
    
//     if (len > 1) {
//         push();
//         branch(len*.80);
//         pop();
    
//     }
// }
