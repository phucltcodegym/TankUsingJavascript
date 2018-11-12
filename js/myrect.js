function MyRect(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;

    this.contains = function (x, y) {
        return this.x <= x && x <= this.x + this.width &&
            this.y <= y && y <= this.y + this.height;
    }
}