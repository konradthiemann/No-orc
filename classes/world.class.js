class World {
    ctx;

    backgroundObjects = level1.backgroundObjects;
    tileObjects = level1.tileObjects;
    birds = level1.birds;
    character = new Character();
    enemies = level1.enemies;
    canvas;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    // console.log('collision with character', enemy);
                    enemy.isColliding = true;
                    
                    if (enemy.attackAnimationStarted == false) {
                        enemy.attackAnimationStarted = true;
                        enemy.attack();
                    }

                    if (enemy.attackAnimationStarted == false) {
                        enemy.loadImage(enemy.IMAGES_WALK[0]);
                    }
                    
                }else{
                    enemy.isColliding = false;
                    enemy.attackAnimationStarted = false;
                }
            });
        }, 20);
    }

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)

        this.ctx.translate(this.camera_x, 0);

        this.addObjectToMap(this.backgroundObjects);
        this.addObjectToMap(this.tileObjects);
        this.addObjectToMap(this.birds);
        this.addToMap(this.character);
        this.addObjectToMap(this.enemies);
        

        this.ctx.translate(-this.camera_x, 0);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        if (mo instanceof Character) {
            this.ctx.save();
            this.ctx.translate(mo.width - 50, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        } else {
            this.ctx.save();
            this.ctx.translate(mo.width , 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}