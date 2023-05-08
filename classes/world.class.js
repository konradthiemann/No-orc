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

    hpBarBackground = healthBar.barBackground;
    hpPoints = healthBar.point;
    hpBarFront = healthBar.barFront;

    manaBarBackground = manaBar.barBackground;
    manaPoints = manaBar.point;
    manaBarFront = manaBar.barFront;

    canvas;
    keyboard;
    camera_x = 0;
    amountOfDeadEnemys = 0;
    bossSpawned = false;
    characterIsFalling = false;

    collect_heart_sound = new Audio('./audio/collect-heart.mp3');

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

                    if (enemy.attackAnimationStarted == false && jumpOnEnemy == false && enemy.dyingAnimationStarted == false && this.character.dyingAnimationStarted == false && enemy.hurtAnimationStarted == false && enemy.fallingDown == false) {
                        enemy.attackAnimationStarted = true;
                        enemy.attack(enemy.id);
                        if (soundMuted == false) {
                            this.character.hurt_sound.loop = false;
                            this.character.hurt_sound.play();
                            enemy.chop_sound.loop = false;
                            enemy.chop_sound.play();
                        }
                        this.character.hurt(10);
                    }

                    if (enemy.dyingAnimationStarted == false && jumpOnEnemy == true && enemy.hurtAnimationStarted == false) {
                        enemy.hurt(enemy.id, 50);
                        if (soundMuted == false) {
                            this.character.jump_on_enemy_sound.loop = false;
                            this.character.jump_on_enemy_sound.play();
                        }
                            this.character.jumpAnimationCounter = 0;
                            this.character.highJumpAnimationCounter = 0;
                            this.character.highJumpAnimationSet = true;
                        
                        this.character.jump();

                    }
                } else {
                    enemy.isColliding = false;
                }
            });
        }, 10);

        setInterval(() => {
            this.hearts.forEach(heart => {
                if (this.character.isColliding(heart)) {
                    if (soundMuted == false) {
                        this.collect_heart_sound.loop = false;
                        this.collect_heart_sound.play();
                    }
                    if (world.character.health >= 57) {
                        world.character.health = 87;
                    } else {
                        world.character.health = world.character.health + 30;
                    }
                    for (let i = 0; i < world.hearts.length; i++) {
                        if (heart === world.hearts[i]) {
                            world.hearts.splice(i, 1);
                        }
                    }
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
        this.addObjectToMap(this.hpBarBackground);
        this.addObjectToMap(this.hpPoints);
        this.addObjectToMap(this.hpBarFront);
        this.addObjectToMap(this.manaBarBackground);
        this.addObjectToMap(this.manaPoints);
        this.addObjectToMap(this.manaBarFront);
        this.ctx.translate(this.camera_x, 0);

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

            let newOrc;
            if (this.bossSpawned == false && this.amountOfDeadEnemys >= 5) {
                this.bossSpawned = true;
                setTimeout(() => {
                    let newOrc = new EnemyBoss;
                    this.enemies.push(newOrc);
                }, 1000);
                this.changeWorld();

            } else if ((world.enemies.length < 2) && this.bossSpawned == false) {
                let rng = Math.random();
                if (rng < 0.5) {
                    newOrc = new EnemyOne();
                } else {
                    newOrc = new EnemyTwo();
                }
                this.enemies.push(newOrc);
            }
        }, 5000);
    }

    changeWorld() {
        this.characterIsFalling = true;
        this.character.loadImage('./img/Mage/Jump/jump6.png');
        this.enemies.forEach(enemy => {
            enemy.fallingDown = true;
            enemy.loadImage(enemy.fallingDownImage);
        });

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

        this.tileObjectsHell.forEach((backgroundObject) => {
            let moveNewBackground = setInterval(() => {
                backgroundObject.y -= 6;
                if (backgroundObject.y < 420) {
                    backgroundObject.y = 420;
                    this.character.loadImage('./img/Mage/Idle/idle1.png');
                    this.characterIsFalling = false;
                    this.enemies.forEach(enemy => {
                        enemy.fallingDown = false;
                        enemy.loadImage(enemy.fallingDownImage);
                    });
                    clearInterval(moveNewBackground);
                }
            }, 20);
        }
        );

        this.tileObjects.forEach((TileObject) => {
            let timeout = Math.random() * 500;
            setTimeout(() => {
                setInterval(() => {
                    TileObject.y += 2;
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