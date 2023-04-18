class MovableObject {
    x;
    y;
    img;
    imgCache = {};
    speed;
    otherDirection = false;

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
    }

    drawFrame(ctx) {
        if (this instanceof EnemyBoss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }

        if (this instanceof EnemyOne || this instanceof EnemyThree) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x , this.y, this.width, this.height);
            ctx.stroke();
        }

        if (this instanceof EnemyTwo) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + 50, this.y + 90, this.width - 150, this.height - 150);
            ctx.stroke();
        }

        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    isColliding(mo) {
        if ((mo instanceof EnemyOne || mo instanceof EnemyThree) && this.otherDirection == false && mo.otherDirection == true) {
            return this.x + this.width - 200 > mo.x - mo.width
                && this.y + this.height - 150 > mo.y - 105
                && this.x  < mo.x + mo.width
                && this.y < mo.y + mo.height;
        }
        if ((mo instanceof EnemyOne || mo instanceof EnemyThree) && this.otherDirection == true && mo.otherDirection == true) {
            return this.x  - 40 < mo.x 
                && this.y + this.height - 150 > mo.y - 105
                && this.x + 40 > mo.x 
                && this.y < mo.y + mo.height;
        }

        if ((mo instanceof EnemyOne || mo instanceof EnemyThree) && this.otherDirection == false && mo.otherDirection == false) {
            return this.x  < mo.x + mo.width - 60
                && this.y + this.height - 150 > mo.y - 105
                && this.x + this.width > mo.x
                && this.y < mo.y + mo.height;
        }
        if ((mo instanceof EnemyOne || mo instanceof EnemyThree) && this.otherDirection == true && mo.otherDirection == false) {
            return this.x - this.width + 110 < mo.x 
                && this.y + this.height - 150 > mo.y - 105
                && this.x > mo.x
                && this.y < mo.y + mo.height;
        }

        // if (mo instanceof EnemyBoss && this.otherDirection == false) {
        //     return this.x + this.width - 50 > mo.x + 50
        //         && this.y + this.height - 150 > mo.y + 99
        //         && this.x < mo.x + 280
        //         && this.y < mo.y + mo.height - 180;
        // }
        // if (mo instanceof EnemyBoss && this.otherDirection == true) {
        //     return this.x + this.width - 50 < mo.x + 350
        //         && this.y + this.height - 150 > mo.y + 99
        //         && this.x > mo.x
        //         && this.y < mo.y + mo.height;
        // }

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
}