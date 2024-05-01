


// let dim =32

// function setup() {
//     createCanvas(400,400, WEBGL)
//     angleMode(DEGREES)
// }

// function draw() {
//     background(255)
    

//     translate(width)
//     push()
//     for (let i = 0; i < dim; i++) {
//       for (let j = 0; j < dim; j++) {
//         for (let k = 0; k < dim; k++) {
//           let x = map(i,0,dim,-100,100)
//           let y = map(j,0,dim,-100,100)
//           let z = map(k,0,dim,-100,100)
          
//           stroke(0)
//           point(x,y,z)

//         }

//       }


//     }
  
//   pop()

// }

// function mousePressed(){

// }




// let buff = 50;
// let sizeOfGrid=30;

// let cols, rows;
// let scl = 30;
// let terrain=[];
// let size = 300;

// function setup() {
//     createCanvas(400,400, WEBGL)
//     angleMode(DEGREES)


//     cols = size / scl;
//     rows = size / scl;
  
//     for (var x = 0; x < cols; x++) {
//       terrain[x] = [];
//       for (var y = 0; y < rows; y++) {
//         if(random()<.5){
//           terrain[x][y] = 100; //specify a default value for now

//         }
//         else{terrain[x][y] = 0; }//specify a default value for now
//       }
//     }
// }

// function draw() {
//     background(255)

//     // All of this is to rotate
//     // rotateX((frameCount*.001)*40)
//     // rotateY((frameCount*.001)*20)
//     // rotateZ((frameCount*.001)*90)


//     // rotateX()

//     let wSize = width-buff*2;
//     let hSize = height-buff*2;
//     let numSquares= wSize/sizeOfGrid;

//     push();
//     noFill();
//     rect(-wSize/2,-hSize/2,size-scl,size-scl)

//     translate(-size / 2, -size / 2);
    
//     for (var y = 0; y < rows - 1; y++) {
//         beginShape(TRIANGLE_STRIP);
//         for (var x = 0; x < cols-1; x++) { 
//             vertex(x * scl, y * scl, terrain[x][y]);
//             vertex((x + 1) * scl, (y + 1) * scl, terrain[x + 1][y + 1]); // Bottom-right
//             vertex((x + 1) * scl, y * scl, terrain[x + 1][y]); // Top-right
//             vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);

//         }


//         endShape();
//     }
  
//   pop();

// }

// function mousePressed(){

// }
