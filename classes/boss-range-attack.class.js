class BossRangeAttack extends MovableObject {
    height = 50;
    width = 50;
    speed = 20;
    hitTarget = false;
    x;
    y;
    checkCollisionInterval;
    electric_sound = new Audio('./audio/electric-spark.mp3');
    IMAGES_ATTACK = [
        './img/magic-effects/tesla_ball/tesla_ball1.png',
        './img/magic-effects/tesla_ball/tesla_ball2.png',
        './img/magic-effects/tesla_ball/tesla_ball3.png',
        './img/magic-effects/tesla_ball/tesla_ball4.png',
        './img/magic-effects/tesla_ball/tesla_ball5.png',
        './img/magic-effects/tesla_ball/tesla_ball6.png',
        './img/magic-effects/tesla_ball/tesla_ball7.png',
        './img/magic-effects/tesla_ball/tesla_ball8.png',
        './img/magic-effects/tesla_ball/tesla_ball9.png',
        './img/magic-effects/tesla_ball/tesla_ball10.png',
        './img/magic-effects/tesla_ball/tesla_ball11.png',
        './img/magic-effects/tesla_ball/tesla_ball12.png',
        './img/magic-effects/tesla_ball/tesla_ball13.png',
        './img/magic-effects/tesla_ball/tesla_ball14.png',
        './img/magic-effects/tesla_ball/tesla_ball15.png',
        './img/magic-effects/tesla_ball/tesla_ball16.png',
        './img/magic-effects/tesla_ball/tesla_ball17.png',
    ];

    constructor(x, y, od) {
        super().loadImage('./img/magic-effects/tesla_ball/tesla_ball1.png');
        this.loadImages(this.IMAGES_ATTACK);
        this.getID();
        this.setStartingPoint(x, y);
        this.chooseDirection(od);
        this.animateAttack();
        this.checkCollision();
        playSound(this.electric_sound, false);
    }

    /**
     * set spawning location coordinates
     * @param {*} x 
     * @param {*} y 
     */
    setStartingPoint(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
    * choose direction for flying animation
    * @param od 
    */
    chooseDirection(od) {
        if (od == true) {
            this.otherDirection = true;
        } else {
            this.otherDirection = false;
        }
    }

    /**
    * check if projectile is colliding character, deals damage to character
    */
    checkCollision() {
        this.checkCollisionInterval = setInterval(() => {
            if (this.isColliding(world.character) && this.hitTarget == false) {
                this.hitTarget = true;
                world.character.hurt(20);
            }
        }, 20);
    }
}