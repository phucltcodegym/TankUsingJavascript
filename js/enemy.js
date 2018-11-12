function enemyComponent(color, x, y, direction) {
    this.width = 30;
    this.height = 30;
    this.cannonWidth = 15;
    this.cannonHeight = 10;
    this.x = x;
    this.y = y;
    this.color = color;
    this.direction = direction;
    this.speed = 1;
    this.angle = 0;

    //update draw enemy for running
    this.update = function () {
        ctx = myGameArea.context;
        ctx.save();
        ctx.rotate(this.angle);
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        //draw cannon
        switch (direction) {
            case 1: //right
                ctx.fillRect(this.x + this.width, this.y + this.cannonHeight, this.cannonWidth, this.cannonHeight);
                break;
            case 2:  //left
                ctx.fillRect(this.x - this.cannonWidth, this.y + this.cannonHeight, this.cannonWidth, this.cannonHeight);
                break;
            case 3: //top
                ctx.fillRect(this.x + this.cannonHeight, this.y - this.cannonWidth, this.cannonHeight, this.cannonWidth);
                break;
            case 4: //bottom
                ctx.fillRect(this.x + this.cannonHeight, this.y + this.height, this.cannonHeight, this.cannonWidth);
                break;
        }
        ctx.restore();
    }

    this.newPos = function () {
        switch (direction) {
            case 1: //right
                this.x += this.speed * Math.cos(this.angle);
                this.y -= this.speed * Math.sin(this.angle);
                if (this.x > myGameArea.canvas.width)
                    this.x = 0;

                break;
            case 2:  //left
                this.x -= this.speed * Math.cos(this.angle);
                this.y -= this.speed * Math.sin(this.angle);
                if (this.x <= 0)
                    this.x = myGameArea.canvas.width;
                break;
            case 3: //top
                this.x += this.speed * Math.sin(this.angle);
                this.y -= this.speed * Math.cos(this.angle);
                if (this.y <= 0)
                    this.y = myGameArea.canvas.height;
                break;
            case 4: //bottom
                this.x += this.speed * Math.sin(this.angle);
                this.y += this.speed * Math.cos(this.angle);
                if (this.y >= myGameArea.canvas.height)
                    this.y = 0;
                break;
        }

    }

    this.move = function () {
        this.newPos();
        this.update();
    }

    this.crashWithBullet = function (bullet) {
        var myRectEnemy = new MyRect(this.x, this.y, this.width, this.height);
        return (myRectEnemy.contains(bullet.x, bullet.y));
    }
}
