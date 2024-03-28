let res;
let x, y;
let bnc, spd;

function setup() {
	createCanvas(windowWidth * 0.95, windowHeight * 0.95);
	noCursor();
	res = 20;
	spd = 10;
	x = width / res;
	y = height / res;
	bnc = 0;
}

function draw() {
	background(255);

    translate(width/2,height);

    // push()
    // fill(0);
    // translate(width/2,height);
    // branch(10);
    // pop()


    // push()
    // translate(width/2,height);
    // rotate(PI/4);
    // branch(10)
    // pop();

    // push()
    // translate(width/2,height);
    // rotate(-PI/4);
    // branch(10);
    // pop();

    branch(20);

    

    rotate(PI/4);
    branch(20);

    rotate(-PI);
    branch(20);

}

function branch(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 2) {
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