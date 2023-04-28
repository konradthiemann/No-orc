class BossRangeAttack extends MovableObject{
    height = 50;
    width = 50;
    speed = 20;
    animationImageCounter = 0;
    otherDirection = false;
    projectileDistance = 0;
    hitTarget = false;
    x;
    y;
    checkCollisionInterval;
    id;
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

    constructor(x, y, od){
        super().loadImage('./img/magic-effects/tesla_ball/tesla_ball1.png');
        this.loadImages(this.IMAGES_ATTACK);
        this.getID();
        this.x = x;
        this.y = y;
        this.chooseDirection(od);
        this.moveAttack();
        this.checkCollision();
    }

    getID(){
        this.id = Math.random() * 100000;
    }

    chooseDirection(od) {
        if (od == true) {
            this.otherDirection = true;
        } else {
            this.otherDirection = false;
        }
    }

    moveAttack() {
        let animateBossRangeAttack = setInterval(() => {
            let path = this.IMAGES_ATTACK[this.animationImageCounter];
            this.img = this.imgCache[path];

            if (this.otherDirection == true) {
                this.x = (this.x - this.projectileDistance);
                this.moveLeft();
            }

            if (this.otherDirection == false) {
                this.x = (this.x + this.projectileDistance);
                this.moveRight();
            }

            if (this.animationImageCounter == this.IMAGES_ATTACK.length) {
                this.removeProjectile(this.id);
                clearInterval(animateBossRangeAttack);
                clearInterval(this.checkCollisionInterval);
            }

            this.projectileDistance ++;
            this.animationImageCounter++;
        }, 1000 / 20);
    }

    checkCollision() {
        this.checkCollisionInterval = setInterval(() => {            
                if (this.isColliding(world.character) && this.hitTarget == false) {
                    this.hitTarget = true;
                    world.character.hurt();
                }            
        }, 20);
    }
}