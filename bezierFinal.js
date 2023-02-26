let points = [];
let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  stroke(255);
  noFill();
  strokeWeight(2);
  
  // Create points for the Bezier curve
  for (let i = 0; i < 360; i += 4) {
    let x = width/2 + 100*cos(i);
    let y = height/2 + 100*sin(i);
    points.push(createVector(x, y));
  }
}

function draw() {
  background(0);
  
  // Update control points
  for (let i = 1; i < points.length - 2; i++) {
    let d = dist(points[i].x, points[i].y, width/2, height/2);
    let offset = map(sin(angle + i*10), -1, 1, -20, 20);
    let xc = (points[i].x + points[i+1].x) / 2 + offset;
    let yc = (points[i].y + points[i+1].y) / 2 + offset;
    points[i] = createVector(xc, yc);
  }
  
  // Draw the Bezier curve
  beginShape();
  vertex(points[0].x, points[0].y);
  for (let i = 1; i < points.length - 2; i++) {
    let xc = (points[i].x + points[i+1].x) / 2;
    let yc = (points[i].y + points[i+1].y) / 2;
    bezierVertex(points[i].x, points[i].y, xc, yc, xc, yc);
  }
  endShape();
  
  // Draw the inner circle
  ellipse(width/2, height/2, 100, 100);
  
  // Update angle for animation
  angle += 5;
}
