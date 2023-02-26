function setup() {
    createCanvas(600, 600,);
}

function draw() {
    background(0,);

    stroke(255);
    // strokeWeight(24);
    // point(0, 300);
    // point(100, 100);
    // point(mouseX, mouseY);
    // point(400, 400);
    // point(600, 300);

    // bezierVertex - allows to keep adding control points and anchor points
    // to create a bezier spline perhaps
    strokeWeight(4);
    // noFill();
    fill(127);
    beginShape();
    vertex(0,300);
    bezierVertex(mouseX, mouseY, 400, 400, 600, 300);
    bezierVertex(400,600,200,100,0,300);
    endShape();
}