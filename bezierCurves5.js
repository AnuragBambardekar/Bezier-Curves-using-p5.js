function setup() {
    createCanvas(600, 600,);
    p0 = createVector(0, 300);
    p1 = createVector(300, 0);
    p2 = createVector(400, 0);
    p3 = createVector(600, 300);
}

function draw() {
    background(0,);

    stroke(255);
    strokeWeight(1);
    // line(p0.x, p0.y, p1.x, p1.y);

    p1.x = mouseX;
    p1.y = mouseY;

    let delta = 0.02 // 0.1, 0.5, 0.02
    colorMode(HSB);

    noFill();
    // Quadratic Bezier Curve
    // beginShape();
    for(let t=0; t<=1.00001; t+=delta) { // 1.00001 is a hack to avoid the rounding error and basically so that bezier curve looks good.
        //Lerpception to create Quadratic bezier curve
        // let v1 = quadratic(p0, p1, p2, t);
        // let v2 = quadratic(p1, p2, p3, t);
        // let x = lerp(v1.x, v2.x, t);
        // let y = lerp(v1.y, v2.y, t);
        // vertex(x, y);

        stroke(t*360, 255, 255, 0.5);
        let v = cubic(p0, p1, p2, p3, t);
        // vertex(v.x, v.y);
    }
    // endShape();
}

function cubic(p0, p1, p2, p3, t) {
    let v1 = quadratic(p0, p1, p2, t);
    let v2 = quadratic(p1, p2, p3, t);
    let x = lerp(v1.x, v2.x, t);
    let y = lerp(v1.y, v2.y, t);

    // enable rainbow bezier pattern
    line(v1.x, v1.y, v2.x, v2.y);
    return createVector(x,y);
}

// quadratic bezier math
function quadratic(p0, p1, p2, t) {
    let x1 = lerp(p0.x, p1.x, t);
    let y1 = lerp(p0.y, p1.y, t);
    let x2 = lerp(p1.x, p2.x, t);
    let y2 = lerp(p1.y, p2.y, t);
    let x = lerp(x1, x2, t);
    let y = lerp(y1, y2, t);

    line(x1,y1,x2,y2);

    return createVector(x,y);
}