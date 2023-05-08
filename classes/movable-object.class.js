class MovableObject extends DrawableObject {

    imgCache = {};
    speed;
    otherDirection = false;
    currentIMG = 0;
    id;

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }

    drawFrame(ctx) {
        if (this instanceof EnemyBoss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }

        if (this instanceof EnemyBoss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'yellow';
            ctx.rect(this.x + 35, this.y + 35, this.width - 70, this.height - 55);
            ctx.stroke();
        }

        if (this instanceof EnemyOne || this instanceof EnemyTwo) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }

        if (this instanceof EnemyOne || this instanceof EnemyTwo) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'yellow';
            ctx.rect(this.x + 20, this.y + 15, this.width - 40, this.height - 30);
            ctx.stroke();
        }


        if (this instanceof Character && this.otherDirection == false) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'yellow';
            ctx.rect(this.x + 30, this.y + 60, this.width - 110, this.height - 80);
            ctx.stroke();
        }

        if (this instanceof Character && this.otherDirection == true) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'yellow';
            ctx.rect(this.x + 30, this.y + 60, this.width - 110, this.height - 80);
            ctx.stroke();
        }

        if (this instanceof Heart) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }

        if (this instanceof AttackOne) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    isColliding(mo) {
        //Enemies
        if ((mo instanceof EnemyOne || mo instanceof EnemyTwo) && this instanceof Character) {
            return this.x + 30 + this.width - 110 > mo.x + 30
                && this.y + 60 + this.height - 80 > mo.y + 15
                && this.x + 30 < mo.x + 30 + mo.width - 40
                && this.y + 60 < mo.y + 15 + mo.height - 30;
        }

        //Endboss

        if ((mo instanceof EnemyBoss) && this instanceof Character) {
            return this.x + 30 + this.width - 110 > mo.x + 35
                && this.y + 60 + this.height - 80 > mo.y + 35
                && this.x + 30 < mo.x + 35 + mo.width - 70
                && this.y + 60 < mo.y + 35 + mo.height - 55;
        }

        //Fireball

        if ((mo instanceof EnemyOne || mo instanceof EnemyTwo) && this instanceof AttackOne) {
            return this.x + this.width > mo.x + 20
                && this.y + this.height > mo.y + 15
                && this.x < mo.x + 20 + mo.width - 40
                && this.y < mo.y + 15 + mo.height - 30;
        }

        if ((mo instanceof EnemyBoss) && this instanceof AttackOne) {
            return this.x + this.width > mo.x + 35
                && this.y + this.height > mo.y + 35
                && this.x < mo.x + 35 + mo.width - 70
                && this.y < mo.y + 35 + mo.height - 55;
        }

        //BossRangeAttack

        if (mo instanceof Character && this instanceof BossRangeAttack) {
            return this.x + this.width > mo.x + 30
                && this.y + this.height > mo.y + 70
                && this.x < mo.x + 30 + mo.width - 110
                && this.y < mo.y + 70 + mo.height - 80;
        }

        //Hearts
        if ((mo instanceof Heart) && this instanceof Character) {
            return this.x + 30 + this.width - 110 > mo.x
                && this.y + 60 + this.height - 80 > mo.y
                && this.x + 30 < mo.x + mo.width
                && this.y + 60 < mo.y + mo.height;
        }

    }

    playAnimation(images) {
        let i = this.currentIMG % images.length;
        let path = images[i];
        this.img = this.imgCache[path];

        this.currentIMG++;
    }

    moveRight() {
        this.x = this.x + this.speed;
    }

    moveLeft() {
        this.x = this.x - this.speed;
    }

    /**
    * move projectile to left/right depending on otherDirection variable
    */
    moveProjectile(projectileDistance) {
        if (this.otherDirection == true) {
            this.x = (this.x - projectileDistance);
            this.moveLeft();
        } else {
            this.x = (this.x + projectileDistance);
            this.moveRight();
        }
    }

    /**
    * check for finished animation, removes projectile, stop animation sound, clear intervals
    * @param {*} animationImageCounter
    * @param {*} intervalName
    * @param {*} id
    * @param {*} soundPath
    */
    interruptProjectileMoving(animationImageCounter, intervalName, id, soundPath) {
        if (animationImageCounter == this.IMAGES_ATTACK.length) {
            this.removeProjectile(id);
            clearInterval(intervalName);
            clearInterval(this.checkCollisionInterval);
            pauseSound(soundPath);
        }
    }

     /**
    * move projectile, rotate images
    */
     animateAttack() {
        let animationImageCounter = 0;
        let projectileDistance = 0;
        let animateBossRangeAttack = setInterval(() => {
            let path = this.IMAGES_ATTACK[animationImageCounter];
            this.img = this.imgCache[path];
            this.moveProjectile(projectileDistance);
            this.interruptProjectileMoving(animationImageCounter, animateBossRangeAttack, this.id, this.electric_sound);
            projectileDistance++;
            animationImageCounter++;
        }, 1000 / 20);
    }

    /**
     * remove projectile from array
     * @param {*} id 
     */
    removeProjectile(id) {
        for (let i = 0; i < world.projectiles.length; i++) {
            if (world.projectiles[i].id == id) {
                world.projectiles.splice(i, 1);
            }
        }
    }

    /**
    * give element an id
    */
    getID() {
        this.id = Math.random() * 100000;
    }
}