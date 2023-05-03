class AttackOne extends MovableObject {
    height = 50;
    width = 50;
    speed = 15;
    animationImageCounter = 0;
    otherDirection = false;
    projectileDistance = 0;
    checkCollisionInterval;
    hitTarget = false;
    y = (world.character.y + world.character.height / 2 - 15);
    x = (world.character.x + world.character.width / 2);
    id;

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
        this.moveAttack();
        this.checkCollision();
    }

    getID(){
        this.id = Math.random() * 100000;
    }

    chooseDirection() {

        if (world.character.otherDirection == true) {
            this.otherDirection = true;
            this.x = (world.character.x + this.projectileDistance);

        } else {
            this.otherDirection = false;
        }
    }

    checkCollision() {
        this.checkCollisionInterval = setInterval(() => {
            world.enemies.forEach(enemy => {
                if (this.isColliding(enemy) && this.hitTarget == false && enemy.enemyIsDead == false) {
                    this.hitTarget = true;
                    enemy.isColliding = true;
                    enemy.hurt(enemy.enemyId, 100);
                }
            });
        }, 20);
    }

    moveAttack() {
        let animateAttackOne = setInterval(() => {
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
                clearInterval(animateAttackOne);
                clearInterval(this.checkCollisionInterval);
            }

            this.projectileDistance = this.projectileDistance + 1;
            this.animationImageCounter++;
        }, 1000 / 20);
    }
}