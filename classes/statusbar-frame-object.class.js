class StatusBarFrameObject extends DrawableObject{
    width = 180;
    height = 20;

    constructor(path, x, y){
        super().loadImage(path);

        this.x = x;
        this.y = y;
    }

}