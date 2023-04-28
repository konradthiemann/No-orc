class Heart extends MovableObject{
    height = 30;
    width = 30;
    x ;
    y ;

    IMAGES_HEART = [
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

    constructor(x , y){
        super().loadImage('./img/Heart/heart.png');
        
        this.loadImages(this.IMAGES_HEART);
        this.x = x;
        this.y = y;
        this.animateHeart();
    }

    animateHeart(){
        setInterval(() => {
            this.playAnimation(this.IMAGES_HEART);
        }, 80);
    }
}