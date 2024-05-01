let size = 400; // Size of the grid
let rows = 10; // Number of rows
let cols = 10; // Number of columns
let scl = size / cols; // Scale for each cell

let terrain = []; // Array to store terrain data

function setup() {
  createCanvas(600, 600, WEBGL);

  // Initialize terrain array with random values
  for (let x = 0; x < cols; x++) {
    terrain[x] = [];
    for (let y = 0; y < rows; y++) {
      terrain[x][y] = random(-100, 100);
    }
  }
}

function draw() {
  background(220);
  rotateX(PI / 3);
  translate(-size / 2, -size / 2);

  for (let y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (let x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
}
