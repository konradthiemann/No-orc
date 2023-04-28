class MovableObject {
    x;
    y;
    img;
    imgCache = {};
    speed;
    otherDirection = false;
    currentIMG = 0;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imgCache[path] = img;
        });
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        this.drawFrame(ctx);
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
            ctx.rect(this.x + 35, this.y + 35 , this.width - 70, this.height -55);
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
            ctx.rect(this.x +20, this.y + 15, this.width - 40, this.height - 30);
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
        //Enemys
        if ((mo instanceof EnemyOne || mo instanceof EnemyTwo) && this instanceof Character) {
            return this.x + 30 + this.width - 110 > mo.x + 30 
                && this.y + 60 + this.height - 80 > mo.y + 15
                && this.x + 30 < mo.x + 30 + mo.width - 40
                && this.y + 60 < mo.y + 15 + mo.height - 30;
        }

        //Endboss

        if ((mo instanceof EnemyBoss) && this instanceof Character) {
            return this.x + 30 + this.width - 110 > mo.x  + 35
                && this.y + 60 + this.height - 80> mo.y + 35
                && this.x + 30 < mo.x + 35 + mo.width - 70
                && this.y + 60 < mo.y + 35 + mo.height - 55;
        }

        //Fireball

        if ((mo instanceof EnemyOne || mo instanceof EnemyTwo) && this instanceof AttackOne) {
            return this.x + this.width > mo.x + 20 
                && this.y + this.height  > mo.y + 15
                && this.x < mo.x +20 + mo.width - 40
                && this.y < mo.y + 15 + mo.height - 30;
        }

        if ((mo instanceof EnemyBoss)  && this instanceof AttackOne) {
            return this.x + this.width > mo.x + 35
                && this.y + this.height  > mo.y + 35
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
                && this.y + 60 + this.height - 80> mo.y 
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

    removeObject(object) {
        setTimeout(() => {
            for (let i = 0; i < world.enemies.length; i++) {
                if (world.enemies[i] === object) {
                    world.enemies.splice(i, 1);
                }
            }
        }, 3000);
    }

    removeProjectile(id) {
            for (let i = 0; i < world.projectiles.length; i++) {
                if (world.projectiles[i].id == id) {
                    world.projectiles.splice(i, 1);
                }
            }
    }
}