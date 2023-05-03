class TileObject extends MovableObject{
    width = 50;
    height = 60;

    constructor(path, x, y){
        super().loadImage(path);

        this.x = x;
        this.y = y;
    }
}