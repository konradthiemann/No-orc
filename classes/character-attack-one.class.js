class AttackOne extends MovableObject {
    height = 50;
    width = 50;
    speed = 20;
    animationImageCounter = 0;
    otherDirection = false;
    projectileDistance = 0;
    hitTarget = false;
    y = (world.character.y + world.character.height / 2 - 15);
    x = (world.character.x + world.character.width / 2);

    IMAGES_ATTACK = [
        './img/Mage/Fire/fire1.png',
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
        this.chooseDirection();
        this.moveAttack();
        this.checkCollision();
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
        setInterval(() => {
            world.enemies.forEach(enemy => {
                if (this.isColliding(enemy) && this.hitTarget == false && enemy.enemyIsDead == false) {
                    this.hitTarget = true;
                    enemy.isColliding = true;
                    enemy.dyingAnimationStarted = true;
                    this.amountOfDeadEnemys++;
                    enemy.enemyIsDead = true;
                    enemy.die(enemy.enemyId);
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
                this.removeProjectile(this);
                clearInterval(animateAttackOne);
            }

            this.projectileDistance = this.projectileDistance + 1;
            this.animationImageCounter++;
        }, 1000 / 20);
    }
}