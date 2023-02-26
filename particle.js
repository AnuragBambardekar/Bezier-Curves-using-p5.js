class Particle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.dx = random(-3,3);
        this.dy = random(-3,3);
    }

    update() {
        this.x += this.dx;
        this.y += this.dy;

        if(this.x >= width || this.x < 0) {
            this.dx *= -1;
        }

        if(this.y >= height || this.y <0) {
            this.dy *= -1;
        }
    }
}