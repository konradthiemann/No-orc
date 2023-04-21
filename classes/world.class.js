class World {
    ctx;
    level1 = level1;
    backgroundObjects = level1.backgroundObjects;
    tileObjects = level1.tileObjects;
    birds = level1.birds;
    character = new Character();
    enemies = level1.enemies;
    canvas;
    keyboard;
    camera_x = 0;
    amountOfDeadEnemys = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.checkCollisions();
        this.createEnemy();
    }

    setWorld() {
        this.character.world = this;
    }

    checkCollisions() {
        setInterval(() => {
            this.enemies.forEach((enemy) => {
                if (this.character.isColliding(enemy)) {
                    enemy.isColliding = true;
                    let jumpOnEnemy = this.checkHeightOnCollision();

                    if (enemy.attackAnimationStarted == false && jumpOnEnemy == false && enemy.dyingAnimationStarted == false) {
                        enemy.attackAnimationStarted = true;
                        enemy.attack(enemy);
                    }

                    if (enemy.dyingAnimationStarted == false && jumpOnEnemy == true) {
                        enemy.dyingAnimationStarted = true;
                        this.amountOfDeadEnemys++;
                        // console.log(this.amountOfDeadEnemys);
                        enemy.die(enemy);    
                        //this.character.highJumpAnimationStarted = true;
                        this.character.jumpAnimationCounter = 0;
                        this.character.highJumpAnimationCounter = 0;
                        this.character.highJumpAnimationSet = true;
                        this.character.jump();
                        
                    }
                }else {
                        enemy.isColliding = false;
                        enemy.checkEnemyDead(enemy);
                }
            });
        }, 20);
    }

    checkHeightOnCollision() {
        if (this.character.y <= 250 && this.character.speedY < 0) {
            // console.log('true');
            // console.log(this.character.y);
            // console.log(this.character.speedY);
            return true;
        } else {
            // console.log('false');
            // console.log(this.character.speedY);
            return false;
        }
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
        //mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    createEnemy() {
        setInterval(() => {
            let newOrc
            if (this.amountOfDeadEnemys < 1 || world.enemies.lenghs < 0) {
                let rng = Math.random();
                if (rng < 0.5) {
                    newOrc = new EnemyOne();
                } else {
                    newOrc = new EnemyTwo();
                }
                // console.log('newOrc');
                this.enemies.push(newOrc);
            }else{
                // console.log('newBoss');
                let newOrc = new EnemyBoss;
                this.enemies.push(newOrc);
            }
        }, 1000);
    }

    flipImage(mo) {
        if (mo instanceof Character) {
            this.ctx.save();
            this.ctx.translate(mo.width - 50, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        } else {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1;
        }
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}