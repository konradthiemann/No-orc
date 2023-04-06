class Bird extends MovableObject{
    height = 50;
    width = 50;
    calcBirdSize;

    constructor(){
        super().loadImage('./img/Background/Bright/Bird/frame1.png');
        this.x = Math.random() * 700;
        this.y = Math.random() * 400;

        this.calcBirdSize = Math.random() * 20 + 50;
        this.height = this.calcBirdSize;
        this.width = this.calcBirdSize;
    }
}