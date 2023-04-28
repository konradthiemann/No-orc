class World {
    ctx;
    level1 = level1;
    backgroundObjectsHell = level1.backgroundObjectsHell;
    backgroundObjects = level1.backgroundObjects;
    tileObjectsHell = level1.tileObjectsHell;
    tileObjects = level1.tileObjects;
    birds = level1.birds;
    character = new Character();
    enemies = level1.enemies;
    projectiles = level1.projectiles;
    hearts = level1.hearts;
    canvas;
    keyboard;
    camera_x = 0;
    amountOfDeadEnemys = 0;
    bossSpawned = false;

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
                    console.log('colliding with enemy')
                    enemy.isColliding = true;
                    let jumpOnEnemy = this.checkHeightOnCollision();

                    if (enemy.attackAnimationStarted == false && jumpOnEnemy == false && enemy.dyingAnimationStarted == false) {
                        enemy.attackAnimationStarted = true;
                        enemy.attack(enemy.enemyId);
                        this.character.hurt();
                    }

                    if (enemy.dyingAnimationStarted == false && jumpOnEnemy == true) {
                        enemy.dyingAnimationStarted = true;
                        this.amountOfDeadEnemys++;
                        enemy.die(enemy.enemyId);  
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

        setInterval(() => {
            this.hearts.forEach(heart => {
                if (this.character.isColliding(heart)) {
                    console.log('colliging with heart');
                }
            });
        }, 20);
    }

    checkHeightOnCollision() {
        if (this.character.y <= 250 && this.character.speedY < 0) {
            return true;
        } else {
            return false;
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, canvas.width, canvas.height)

        this.ctx.translate(this.camera_x, 0);

        this.addObjectToMap(this.backgroundObjectsHell);
        this.addObjectToMap(this.backgroundObjects);
        this.addObjectToMap(this.tileObjectsHell);
        this.addObjectToMap(this.tileObjects);
        this.addObjectToMap(this.birds);
        this.addObjectToMap(this.hearts);
        this.addToMap(this.character);
        this.addObjectToMap(this.enemies);
        this.addObjectToMap(this.projectiles);
        


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

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    createEnemy() {
        setInterval(() => {
            let newOrc
            if (( world.enemies.lenghs < 20) && this.bossSpawned == false) {
                let rng = Math.random();
                if (rng < 0.5) {
                    newOrc = new EnemyOne();
                } else {
                    newOrc = new EnemyTwo();
                }
                this.enemies.push(newOrc);
            }else if (this.bossSpawned == false && this.amountOfDeadEnemys >= 1){
                this.bossSpawned = true;
                let newOrc = new EnemyBoss;
                this.enemies.push(newOrc);

                this.changeWorld();
            }
        }, 5000);
    }

    changeWorld(){
        this.backgroundObjects.forEach((backgroundObject) => {    
            setInterval(() => {
                backgroundObject.y -= 6;
            }, 20);
        }
        );

        this.backgroundObjectsHell.forEach((backgroundObject) => {    
            let moveNewBackground = setInterval(() => {
                backgroundObject.y -= 6;
                if (backgroundObject.y < 0) {
                    backgroundObject.y = 0;
                    clearInterval(moveNewBackground);
                }
            }, 20);
        }
        );

        this.tileObjects.forEach((TileObject) => {
            let timeout = Math.random() * 2000;
            setTimeout(() => {
                setInterval(() => {
                    TileObject.y += 1;
                }, 20);
            }, timeout);
        });
        
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