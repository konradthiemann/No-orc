class Bird extends MovableObject{
    height = 50;
    width = 50;
    calcBirdSize;
    direction;
    IMAGES_FLY = [
        './img/Background/Bright/Bird/frame1.png',
        './img/Background/Bright/Bird/frame2.png',
        './img/Background/Bright/Bird/frame3.png',
        './img/Background/Bright/Bird/frame4.png',
        './img/Background/Bright/Bird/frame5.png'
    ];
    currentIMG = 0;

    constructor(){
        super().loadImage('./img/Background/Bright/Bird/frame1.png');
        this.loadImages(this.IMAGES_FLY)
        this.x = (Math.random() * 3000) - 200;
        this.y = Math.random() * 400;

        this.calcBirdSize = Math.random() * 20 + 50;
        this.height = this.calcBirdSize;
        this.width = this.calcBirdSize;

        let randomDirection = Math.random();

        if (randomDirection >= 0.5) {
           this.direction = -8; 
           this.otherDirection = true;
        }else{
            this.direction = +8;
            this.otherDirection = false;
        }
        
        this.moveBird();
    }


    moveBird() {
        let increment = 1;
        setInterval(() => {
            let i = (this.currentIMG + increment) % (this.IMAGES_FLY.length * 2 - 2);
            if (i >= this.IMAGES_FLY.length) {
                i = this.IMAGES_FLY.length - (i % this.IMAGES_FLY.length) - 2;
                increment = -1;
            } else if (i < 0) {
                i = Math.abs(i);
                increment = 1;
            }
            let path = this.IMAGES_FLY[i];
            this.img = this.imgCache[path];
    
            this.currentIMG = i;
            this.x = this.x - this.direction;
        }, 100);
    }
}