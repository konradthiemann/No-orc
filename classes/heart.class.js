class Coin extends MovableObject{
    height = 50;
    width = 50;
    x = 100;
    y = 50;

    IMAGES_COIN = [
        './img/Heart/heart.png',
        './img/Heart/heart2.png',
        './img/Heart/heart3.png',
        './img/Heart/heart4.png',
        './img/Heart/heart5.png',
        './img/Heart/heart6.png',
        './img/Heart/heart7.png',
        './img/Heart/heart8.png',
        './img/Heart/heart9.png',
        './img/Heart/heart10.png',
    ];

    constructor(){
        super().loadImage('./img/Heart/heart.png');
        this.loadImages(this.IMAGES_COIN);
    }
}