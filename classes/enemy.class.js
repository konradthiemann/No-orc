class Enemy extends MovableObject {
    health = 100;
    enemyIsDead = false;
    otherDirection = true;
    isColliding = false;
    attackAnimationStarted = false;
    dyingAnimationStarted = false;
    autoAttackDmg = 1;
    dyingImageCount = 0;
    hurtAnimationStarted = false;
    fallingDown = false;

    chop_sound = new Audio('./audio/chop.mp3');
    dying_sound = new Audio('./audio/orc-dying.mp3');

    /**
     * makes enemy moving
     */
    enemyRun() {
        setInterval(() => {
            this.chooseDirection();
        }, 20);
    }

    /**
     * chose direction for enemy to walk
     */
    chooseDirection() {
        this.checkForDirectionRight();
        this.checkForDirectionLeft();
    }

    /**
     * check if enemy has to move right
     */
    checkForDirectionRight() {
        if ((this.x / 2 < world.character.x / 2) && this.attackAnimationStarted == false && this.dyingAnimationStarted == false && this.hurtAnimationStarted == false && this.fallingDown == false && this.enemyIsDead == false && world.characterIsFalling == false) {
            this.otherDirection = false;
            if (this.isColliding == false) {
                this.playAnimation(this.IMAGES_WALK);
                this.moveRight();
            }
        }
    }

    /**
     * check if enemy has to move left
     */
    checkForDirectionLeft() {
        if ((this.x / 2 > world.character.x / 2) && this.attackAnimationStarted == false && this.dyingAnimationStarted == false && this.hurtAnimationStarted == false && this.fallingDown == false && this.enemyIsDead == false && world.characterIsFalling == false) {
            this.otherDirection = true;
            if (this.isColliding == false) {
                this.playAnimation(this.IMAGES_WALK);
                this.moveLeft();
            }
        }
    }

    /**
     * starts attack animation of enemy
     * @param {object} enemy 
     */
    attack(enemy) {
        let attackImageCount = 0;
        let enemyAttack = setInterval(() => {
            let path = this.IMAGES_ATTACK[attackImageCount];
            this.img = this.imgCache[path];
            this.checkForHurt(enemy, attackImageCount);
            this.stopAttackAnimation(enemyAttack, attackImageCount);
            attackImageCount++;
        }, 60);
    }

    /**
     * stops attack animation of enemy
     * @param {setInterval} enemyAttack 
     */
    stopAttackAnimation(enemyAttack, attackImageCount) {
        if (attackImageCount == this.IMAGES_ATTACK.length || this.isColliding == false) {
            this.attackAnimationStarted = false;
            attackImageCount = 0;
            this.loadImage(this.IMAGES_ATTACK[0]);
            clearInterval(enemyAttack);
        }
    }

    /**
     * check if character get hurt by enemy
     * @param {object} enemy 
     */
    checkForHurt(enemy, attackImageCount) {
        if (world.character.isColliding(enemy) && world.character.hurtAnimationStarted == false && (attackImageCount == this.IMAGES_ATTACK.length - 6)) {
            world.character.hurtAnimationStarted = true;
            world.character.hurt(enemy.autoAttackDmg);
        }
    }

    /**
     * starts all necessary measures for enemy to die 
     * @param {let} enemyId 
     */
    die(enemyId) {
        playSound(this.dying_sound, false);
        this.dyingAnimationStarted = true;
        world.amountOfDeadEnemys++;
        this.searchForDeadEnemy(enemyId);
    }

    /**
     * search array for enemy with same id 
     * @param {let} enemyId 
     */
    searchForDeadEnemy(enemyId) {
        for (let i = 0; i < world.enemies.length; i++) {
            if (enemyId == world.enemies[i].id) {
                this.startDyingAnimation();
            }
        }
    }

    /**
     * starts dying animation 
     */
    startDyingAnimation() {
        let enemyDying = setInterval(() => {
            let path = this.IMAGES_DYING[this.dyingImageCount];
            this.img = this.imgCache[path];
            this.stopDyingAnimation(enemyDying);
            this.dyingImageCount++;
        }, 80);
    }

    /**
     * stops dying animation
     * @param {boolean} enemyDying 
     */
    stopDyingAnimation(enemyDying) {
        if (this.dyingImageCount == this.IMAGES_DYING.length) {
            pauseSound(this.dying_sound);
            this.enemyIsDead = true;
            this.loadImage(this.IMAGES_DYING[this.IMAGES_DYING.length - 1]);
            this.dropHeart(this.x + this.width / 2, 400);
            clearInterval(enemyDying);
        }
    }

    /**
     * starts hurt animation and set new health value
     * @param {let} enemyId 
     * @param {let} dmg 
     */
    hurt(enemyId, dmg) {
        if (this.hurtAnimationStarted == false && this.dyingAnimationStarted == false && this.enemyIsDead == false) {
            this.health = this.health - dmg;
            let hurtImageCount = 0;
            this.hurtAnimationStarted = true;
            let enemyHurt = setInterval(() => {
                let path = this.IMAGES_HURT[hurtImageCount];
                this.img = this.imgCache[path];
                this.stopHurtAnimation(hurtImageCount, enemyHurt, enemyId);
                hurtImageCount++;
            }, 100);
        }
    }

    /**
     * interrupt hurt animation
     * @param {var} hurtImageCount 
     * @param {boolean} enemyHurt 
     * @param {let} enemyId 
     */
    stopHurtAnimation(hurtImageCount, enemyHurt, enemyId) {
        if (hurtImageCount == this.IMAGES_HURT.length || world.characterIsFalling == true) {
            this.hurtAnimationStarted = false;
            hurtImageCount = 0;
            this.loadImage(this.IMAGES_WALK[1]);
            this.checkEnemyHealth(enemyId);
            clearInterval(enemyHurt);
        }
    }

    /**
     * check if enemy health < 0
     * @param {let} enemyId 
     */
    checkEnemyHealth(enemyId) {
        if (this.health <= 0) {
            this.die(enemyId);
        }
    }

    /**
     * checks if enemy object is dead and run measures 
     */
    checkEnemyDead() {
        setInterval(() => {
            if (this.enemyIsDead && this instanceof EnemyBoss && victoryScreenSet == false) {
                this.showVictoryScreen();
                this.removeObject(this);
            }
            if (this.enemyIsDead == true) {
                this.removeObject(this);
            }
        }, 3000);
    }

    /**
     * show endscreen if player wins
     */
    showVictoryScreen() {
        victoryScreenSet = true;
        pauseSound(ingame_sound_one);
        world.screens.splice(0, world.screens.length)
        let victoryScreen = new VictoryScreen();
        world.screens.push(victoryScreen);
        setTimeout(() => {
            document.getElementById('enterBtn').style.display = "flex";    
        }, 500);
    }

    /**
     * create a number between 0 and 10000
     * @returns let
     */
    createID() {
        return Math.random() * 10000;
    }

    /**
     * drops a heart after a probability
     */
    dropHeart() {
        let dropChance = Math.random();
        if (dropChance > 0.25) {
            let x = this.x;
            let y = this.y + (this.height / 3);
            let newHeart = new Heart(x, y);
            world.hearts.push(newHeart);
        }
    }

    /**
     * removes enemy object
     * @param {object} object 
     */
    removeObject(object) {
        setTimeout(() => {
            for (let i = 0; i < world.enemies.length; i++) {
                if (world.enemies[i] === object) {
                    world.enemies.splice(i, 1);
                }
            }
        }, 3000);
    }
}