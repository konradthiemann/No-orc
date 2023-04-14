class EnemyTwo extends Enemy{
    height = 250;
    width = 250;
    y = 250;
    
    IMAGES_WALK = [
        './img/Orc-Boss/Walk1.png',
        './img/Orc-Boss/Walk2.png',
        './img/Orc-Boss/Walk3.png',
        './img/Orc-Boss/Walk4.png',
        './img/Orc-Boss/Walk5.png',
        './img/Orc-Boss/Walk6.png',
    ];
    currentIMG = 0;
    constructor(){
        super().loadImage('./img/Orc-Boss/Walk1.png');
        this.loadImages(this.IMAGES_WALK);

        this.x = 200 + Math.random() * 1800;
        this.enemyTwoRun();
    }

    enemyTwoRun(){
        
        setInterval(() => {
            let i = this.currentIMG % this.IMAGES_WALK.length;
            let path = this.IMAGES_WALK[i];
            this.img = this.imgCache[path];

            this.speed = 4 + Math.random() * 0.5;

            this.currentIMG ++;
            this.moveLeft();
        }, 80);
    }
}