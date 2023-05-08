class AttackOne extends MovableObject {
    height = 50;
    width = 50;
    speed = 15;
    hitTarget = false;
    y = (world.character.y + world.character.height / 2 - 15);
    x = (world.character.x + world.character.width / 2);
    fire_sound = new Audio('./audio/fireball.mp3');
    IMAGES_ATTACK = [
        './img/Mage/Fire/fire2.png',
        './img/Mage/Fire/fire3.png',
        './img/Mage/Fire/fire4.png',
        './img/Mage/Fire/fire5.png',
        './img/Mage/Fire/fire6.png',
        './img/Mage/Fire/fire7.png',
        './img/Mage/Fire/fire8.png',
        './img/Mage/Fire/fire9.png',
    ]

    constructor() {
        super().loadImage('./img/Mage/Fire/fire1.png');
        this.loadImages(this.IMAGES_ATTACK);
        this.getID();
        this.chooseDirection();
        this.animateAttack();
        this.checkCollision();
        playSound(this.fire_sound, false);
    }

    /**
    * set direction of flight path
    */
    chooseDirection() {
        if (world.character.otherDirection == true) {
            this.otherDirection = true;
            this.x = world.character.x;
        } else {
            this.otherDirection = false;
        }
    }

    /**
    * check if this element is colliding with an enemy 
    */
    checkCollision() {
        setInterval(() => {
            world.enemies.forEach(enemy => {
                if (this.isColliding(enemy) && this.hitTarget == false && enemy.enemyIsDead == false) {
                    this.hitTarget = true;
                    enemy.isColliding = true;
                    enemy.hurt(enemy.id, 100);
                }
            });
        }, 20);
    }
}