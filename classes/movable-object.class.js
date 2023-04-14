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
            ctx.rect(this.x , this.y , this.width , this.height);
            ctx.stroke();
        }

        if (this instanceof EnemyOne || this instanceof EnemyThree) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x , this.y , this.width , this.height );
            ctx.stroke();
        }

        if (this instanceof EnemyTwo) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + 50, this.y + 90, this.width - 150, this.height -150);
            ctx.stroke();
        }

        // if (this instanceof Character) {
        //     ctx.beginPath();
        //     ctx.lineWidth = '3';
        //     ctx.strokeStyle = 'blue';
        //     ctx.rect(this.x + 30, this.y + 60, this.width - 110, this.height - 80);
        //     ctx.stroke();
        // }

        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x , this.y , this.width , this.height );
            ctx.stroke();
        }
    }

    isColliding(mo){
        if ((mo instanceof EnemyOne || mo instanceof EnemyThree) && this.otherDirection == false) {
            return this.x  + this.width - 50 > mo.x  
                && this.y  + this.height - 150 > mo.y - 105
                && this.x  < mo.x 
                && this.y < mo.y  + mo.height ;
        }
        if ((mo instanceof EnemyOne || mo instanceof EnemyThree) && this.otherDirection == true) {
            return this.x  + this.width > mo.x  
                && this.y  + this.height - 150 > mo.y - 105 
                && this.x  < mo.x 
                && this.y < mo.y  + mo.height ;
        }

        if (mo instanceof EnemyBoss && this.otherDirection == false) {
            return this.x  + this.width - 50 > mo.x + 50
                && this.y  + this.height - 150 > mo.y - 105
                && this.x  < mo.x + 27  
                && this.y < mo.y  + mo.height ;
        }
        if (mo instanceof EnemyBoss && this.otherDirection == true) {
            return this.x  + this.width > mo.x  
                && this.y  + this.height - 150 > mo.y - 105 
                && this.x  < mo.x 
                && this.y < mo.y  + mo.height ;
        }




        // if (this instanceof Character && this.otherDirection == true) {
        //     return this.x - 15 + this.width -110 > mo.x -20 
        //         && this.y + 60 + this.height - 80 > mo.y  
        //         && this.x - 15 < mo.x -20
        //         && this.y + 60 < mo.y + 20 + mo.height - 30;
        // }


        // if (this instanceof Character) {
        //     return this.x +30 + this.width -110 > mo.x 
        //         && this.y + 60 + this.height - 80 > this.y + 60 
        //         && this.x + 30 < mo.x 
        //         && this.y + 60 < mo.y + mo.height;
        // }
        // if (this instanceof EnemyOne || EnemyThree) {
        //     return this.x + 20 + this.width - 40 > mo.x 
        //         && this.y + 20 + this.height - 30 > this.y +20 
        //         && this.x + 20 < mo.x 
        //         && this.y + 20 < mo.y + mo.height;
        // }
        // if (this instanceof EnemyTwo) {
        //     return this.x + 50 + this.width - 150 > mo.x 
        //         && this.y + 90 + this.height - 150 > this.y +90 
        //         && this.x + 50 < mo.x 
        //         && this.y + 90 < mo.y + mo.height;
        // }
        
    }

    moveRight() {
        this.x = this.x + this.speed;
    }

    moveLeft() {
        this.x = this.x - this.speed;
    }
}