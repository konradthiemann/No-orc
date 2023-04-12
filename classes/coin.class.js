class Coin extends MovableObject{
    height = 50;
    width = 50;
    x = 100;
    y = 50;

    IMAGES_COIN = [
        './img/Coin/coin.png',
        './img/Coin/coin2.png',
        './img/Coin/coin3.png',
        './img/Coin/coin4.png',
        './img/Coin/coin5.png',
        './img/Coin/coin6.png',
        './img/Coin/coin7.png',
        './img/Coin/coin8.png',
        './img/Coin/coin9.png',
        './img/Coin/coin10.png',
    ];

    constructor(){
        super().loadImage('./img/Coin/coin.png');
        this.loadImages(this.IMAGES_COIN);
    }
}