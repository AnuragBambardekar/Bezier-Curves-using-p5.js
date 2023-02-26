function setup() {
    createCanvas(600, 600,);
}

function draw() {
    background(0,);

    stroke(255);
    strokeWeight(24);
    point(0, 300);
    // point(100, 100);
    point(mouseX, mouseY);
    point(400, 400);
    point(600, 300);

    strokeWeight(4);
    noFill();
    bezier(0, 300, mouseX, mouseY, 400, 400, 600, 300);

    strokeWeight(4);
    line(0,300,mouseX,mouseY);
    line(400,400,600,300);
}