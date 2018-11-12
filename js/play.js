function playComponent(x, y) {
    this.width = 30;
    this.height = 30;
    this.cannonWidth = 15;
    this.cannonHeight = 10;
    this.x = x;
    this.y = y;
    this.color = "Blue";
    this.cannonColor = "BlueViolet";
    this.direction = 1;
    this.speedX = 0;
    this.speedY = 0;
    this.angle = 0;
    //update draw enemy for running
    this.update = function () {
        ctx = myGameArea.context;
        ctx.save();
        //set color and draw center of play
        ctx.rotate(this.angle);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.cannonColor;
        //draw cannon
        switch (this.direction) {
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
        this.x += this.speedX * 2;
        this.y += this.speedY * 2;
    }

    this.move = function () {
        this.newPos();
        this.update();
    }

    this.crashWithEnemy = function (enemyObject) {  
        var myRectEnemy = new MyRect(enemyObject.x, enemyObject.y, enemyObject.width, enemyObject.height);
        return (myRectEnemy.contains(this.x, this.y)
            || myRectEnemy.contains(this.x+this.width, this.y)
            || myRectEnemy.contains(this.x+this.width, this.y + this.height)
            || myRectEnemy.contains(this.x , this.y + this.height)
        );

    }
}