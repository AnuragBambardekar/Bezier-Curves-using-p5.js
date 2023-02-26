function setup() {
    createCanvas(600, 600,);
    p0 = createVector(0, 300);
    p1 = createVector(600, 300);
}

function draw() {
    background(0,);

    stroke(255);
    strokeWeight(4);
    // line(p0.x, p0.y, p1.x, p1.y);

    // using formula from wiki - Quadratic Bezier Curve
    beginShape();
    for(let t=0; t<=1; t+=0.1) {
        // all this could be implemented using the lerp() function
        // let x = p0.x + (p1.x - p0.x) * t;
        // let y = p0.y + (p1.y - p0.y) * t;
        let x = lerp (p0.x, p1.x, t);
        let y = lerp (p0.y, p1.y, t);

        // point(x,y);
        vertex(x, y)
    }
    endShape();
}