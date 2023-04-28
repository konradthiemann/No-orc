class Healthpoint extends MovableObject{
    width = 2;
    height = 15;

    constructor(path, x, y){
        super().loadImage(path);

        this.x = x;
        this.y = y;
    }
}