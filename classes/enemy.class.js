class Enemy extends MovableObject{
    health = 100;
    enemyIsDead = false;
    otherDirection = true;
    isColliding = false;
    attackAnimationStarted = false;
    dyingAnimationStarted = false;
    autoAttackDmg = 1;
    dyingImageCount = 0;

    chooseDirection() {

        if ((this.x / 2 < world.character.x / 2 )&& this.attackAnimationStarted == false && this.dyingAnimationStarted == false) {
            this.otherDirection = false;
            if (this.isColliding == false) {
                this.playAnimation(this.IMAGES_WALK);
                this.moveRight();
            }
        }

        if ((this.x / 2 > world.character.x / 2) && this.attackAnimationStarted == false && this.dyingAnimationStarted == false) {
            this.otherDirection = true;
            if (this.isColliding == false) {
                this.playAnimation(this.IMAGES_WALK);
                this.moveLeft();
            }
        }
    }

    attack(enemy) {
        let attackImageCount = 0;
        let enemyAttack = setInterval(() => {
        let path = this.IMAGES_ATTACK[attackImageCount];
        this.img = this.imgCache[path];
            if (attackImageCount == this.IMAGES_ATTACK.length - 6) {
                this.checkForHurt(enemy);
            }
            if (attackImageCount == this.IMAGES_ATTACK.length  || this.isColliding == false) {
                
                this.attackAnimationStarted = false;
                attackImageCount = 0;
                this.loadImage(this.IMAGES_ATTACK[0]);
                
                clearInterval(enemyAttack);
            }
        attackImageCount++;
        }, 60);
    }

    checkForHurt(enemy){
        if (world.character.isColliding(enemy) && world.character.hurtAnimationStarted == false) {
            world.character.hurtAnimationStarted = true;
            world.character.hurt(enemy.autoAttackDmg);
        }
    }

    die(enemyId){
        for (let i = 0; i < world.enemies.length; i++) {
            if (enemyId == world.enemies[i].enemyId) {
                let enemyDying = setInterval(() => {
                    let path = this.IMAGES_DYING[this.dyingImageCount];
                    this.img = this.imgCache[path];
                        if (this.dyingImageCount == this.IMAGES_DYING.length) {
                            this.enemyIsDead = true;
                            this.loadImage(this.IMAGES_DYING[this.IMAGES_DYING.length - 1]);
                            this.dyingImageCount = 0;
                            this.dropHeart();
                            clearInterval(enemyDying);
                        }
                        this.dyingImageCount++;
                    }, 80);
            }
        }
        
    }

    checkEnemyDead(enemy){
        if (this.enemyIsDead == true) {
            this.removeObject(enemy);            
        }
    }

    createID(){
        return Math.random() * 10000;
    }

    dropHeart(){
        let dropChance = Math.random();
        if (dropChance > 0.25) {
            console.log('HEARTS!');
            let x = this.x;
            let y = this.y + (this.height / 3); 
            let newHeart = new Heart(x, y);

            world.hearts.push(newHeart);
        }
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
}