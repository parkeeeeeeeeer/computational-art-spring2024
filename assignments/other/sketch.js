fr = 30;
palette = [[228, 219, 201, 255], //tan
    [162, 125, 54, 255], //ochre
    [255, 152, 56, 255], //orange
    [255, 204, 56, 255], //gold
    [245, 70, 55, 255], //campari
    [0, 124, 123, 255], //dark teal
    [255, 149, 132, 255] //rose
    ]

function setup() {
  canvas_x = 800;
  canvas_y = 800;
  createCanvas(canvas_x, canvas_y);
  frameRate(fr);
  
    //create series of points
  pt_size = 40;
  pts = [];
  for(let i=0; i<floor(random(10,30)); i++){
    new_pt = gen_pt(pts, pt_size*2);
    pts.push(new_pt);
  }

  //color index
  c_idx = 0;
  lerp_step = 0.3;
  frame_switch = fr;
  c_bg = [...palette[0]];
  furthest_pts(pts);
}

function draw() {
  clear();

  //apply background
  background(c_bg);

  //actual drawing stuff
  push();

  //move pts
  get_new_pts = frameCount%frame_switch == 0;

  pts.forEach(pt => {
    if(!pt.moving || get_new_pts){
      new_pt = gen_pt([pt], pt_size*8);
      pt.dest_x = new_pt.x;
      pt.dest_y = new_pt.y;
      pt.moving = true;
    }
    pt.x = lerp(pt.x, pt.dest_x, lerp_step);
    pt.y = lerp(pt.y, pt.dest_y, lerp_step);

    draw_indices(pts, pt);
  })

  //frame cleanup
  c_idx = 0;

  pop();
}

function gen_pt(arr, min_dist){
  //checks new point to see if it's greater than the min_dist
  new_pt = {
    x:floor(random(pt_size, canvas_x-pt_size)),
    y:floor(random(pt_size, canvas_y-pt_size)),
    moving:false,
    dest_x:0,
    dest_y:0,
    idxs:[]
  };
  
  arr.every(pt => {
    if(dist(pt.x, pt.y, new_pt.x, new_pt.y)<min_dist){
      new_pt = gen_pt(arr, min_dist);
      return false;
    }
    else{
      return true;
    }
  })

  return new_pt;
}

function furthest_pts(arr){
  arr.forEach(pt => {
    distances=[];
    idxs = [];
    //get distances between all points and pt
    arr.forEach(p => {
      distances.push(dist(p.x, p.y, pt.x, pt.y))
    })

    //find three largest distances between points
    for(let i=0; i<2; i++){
      index = indexOfMax(distances);
      idxs.push(index);
      distances[index] = 0;
    }
    pt.idxs = idxs;
  })
}

function indexOfMax(arr) {
  if (arr.length === 0) {
      return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
      }
  }

  return maxIndex;
}

function draw_indices(pts, pt){
  //draw triangle between pt and two furthest points
  c = palette[c_idx%palette.length]
  c_idx++
  c[3] = 100;
  fill(c);
  noStroke();
  triangle(pts[pt.idxs[0]].x, pts[pt.idxs[0]].y, pts[pt.idxs[1]].x, pts[pt.idxs[1]].y, pt.x, pt.y);
}