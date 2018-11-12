function bulletComponent(x, y, direction, ) {

    this.radius = 5;
    this.x = x;
    this.y = y;
    this.bulletColor = "BlueViolet";
    this.direction = direction;
    this.speed = 4;
    this.angle = 0;

    this.update = function () {
        ctx = myGameArea.context;
        ctx.save();
        ctx.rotate(this.angle);
        ctx.fillStyle = this.bulletColor;
        ctx.fillRect(this.x, this.y, this.radius, this.radius);
        ctx.restore();
    }

    this.newPos = function () {
        switch (this.direction) {
            case 1: //right
                this.x += this.speed * Math.cos(this.angle);
                this.y -= this.speed * Math.sin(this.angle);
                break;
            case 2:  //left
                this.x -= this.speed * Math.cos(this.angle);
                this.y -= this.speed * Math.sin(this.angle);
                break;
            case 3: //top
                this.x += this.speed * Math.sin(this.angle);
                this.y -= this.speed * Math.cos(this.angle);
                break;
            case 4: //bottom
                this.x += this.speed * Math.sin(this.angle);
                this.y += this.speed * Math.cos(this.angle);
                break;
        }
    }

    this.move = function () {
        this.newPos();
        this.update();
    }
}