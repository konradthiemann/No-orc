class EnemyBoss extends Enemy {
    health = 500;
    height = 170;
    width = 170;
    x = 300;
    y = 295;
    speed = 1;
    attackImageCount = 0;
    rangeAttackStarted = false;
    hurtAnimationStarted = false;

    IMAGES_WALK = [
        './img/endboss/Walking/0_Reaper_Man_Walking_000.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_001.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_002.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_003.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_004.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_005.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_006.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_007.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_008.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_009.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_010.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_011.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_012.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_013.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_014.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_015.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_016.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_017.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_018.png',
        './img/endboss/Walking/0_Reaper_Man_Walking_019.png',
    ];

    IMAGES_HURT = [
        './img/endboss/Hurt/0_Reaper_Man_Hurt_000.png',
        './img/endboss/Hurt/0_Reaper_Man_Hurt_001.png',
        './img/endboss/Hurt/0_Reaper_Man_Hurt_002.png',
        './img/endboss/Hurt/0_Reaper_Man_Hurt_003.png',
        './img/endboss/Hurt/0_Reaper_Man_Hurt_004.png',
        './img/endboss/Hurt/0_Reaper_Man_Hurt_005.png',
        './img/endboss/Hurt/0_Reaper_Man_Hurt_006.png',
        './img/endboss/Hurt/0_Reaper_Man_Hurt_007.png',
        './img/endboss/Hurt/0_Reaper_Man_Hurt_008.png',
        './img/endboss/Hurt/0_Reaper_Man_Hurt_009.png',
        './img/endboss/Hurt/0_Reaper_Man_Hurt_010.png',
        './img/endboss/Hurt/0_Reaper_Man_Hurt_011.png'
    ];

    IMAGES_DYING = [
        './img/endboss/Dying/0_Reaper_Man_Dying_000.png',
        './img/endboss/Dying/0_Reaper_Man_Dying_001.png',
        './img/endboss/Dying/0_Reaper_Man_Dying_002.png',
        './img/endboss/Dying/0_Reaper_Man_Dying_003.png',
        './img/endboss/Dying/0_Reaper_Man_Dying_004.png',
        './img/endboss/Dying/0_Reaper_Man_Dying_005.png',
        './img/endboss/Dying/0_Reaper_Man_Dying_006.png',
        './img/endboss/Dying/0_Reaper_Man_Dying_007.png',
        './img/endboss/Dying/0_Reaper_Man_Dying_008.png',
        './img/endboss/Dying/0_Reaper_Man_Dying_009.png',
        './img/endboss/Dying/0_Reaper_Man_Dying_010.png',
        './img/endboss/Dying/0_Reaper_Man_Dying_011.png',
        './img/endboss/Dying/0_Reaper_Man_Dying_012.png',
        './img/endboss/Dying/0_Reaper_Man_Dying_013.png',
        './img/endboss/Dying/0_Reaper_Man_Dying_014.png',
    ];

    IMAGES_ATTACK = [
        './img/endboss/Slashing/0_Reaper_Man_Slashing_000.png',
        './img/endboss/Slashing/0_Reaper_Man_Slashing_001.png',
        './img/endboss/Slashing/0_Reaper_Man_Slashing_002.png',
        './img/endboss/Slashing/0_Reaper_Man_Slashing_003.png',
        './img/endboss/Slashing/0_Reaper_Man_Slashing_004.png',
        './img/endboss/Slashing/0_Reaper_Man_Slashing_005.png',
        './img/endboss/Slashing/0_Reaper_Man_Slashing_006.png',
        './img/endboss/Slashing/0_Reaper_Man_Slashing_007.png',
        './img/endboss/Slashing/0_Reaper_Man_Slashing_008.png',
        './img/endboss/Slashing/0_Reaper_Man_Slashing_009.png',
        './img/endboss/Slashing/0_Reaper_Man_Slashing_010.png',
        './img/endboss/Slashing/0_Reaper_Man_Slashing_011.png',
    ];

    IMAGES_THROW = [
        './img/endboss/Throwing/0_Reaper_Man_Throwing_000.png',
        './img/endboss/Throwing/0_Reaper_Man_Throwing_001.png',
        './img/endboss/Throwing/0_Reaper_Man_Throwing_002.png',
        './img/endboss/Throwing/0_Reaper_Man_Throwing_003.png',
        './img/endboss/Throwing/0_Reaper_Man_Throwing_004.png',
        './img/endboss/Throwing/0_Reaper_Man_Throwing_005.png',
        './img/endboss/Throwing/0_Reaper_Man_Throwing_006.png',
        './img/endboss/Throwing/0_Reaper_Man_Throwing_007.png',
        './img/endboss/Throwing/0_Reaper_Man_Throwing_008.png',
        './img/endboss/Throwing/0_Reaper_Man_Throwing_009.png',
        './img/endboss/Throwing/0_Reaper_Man_Throwing_010.png',
        './img/endboss/Throwing/0_Reaper_Man_Throwing_011.png',
    ];

    constructor() {
        super().loadImage('./img/endboss/Walking/0_Reaper_Man_Walking_000.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_THROW);
        this.loadImages(this.IMAGES_HURT);

        this.enemyBossRun();
        this.checkEnemyDead();
    }

    enemyBossRun() {
        let run = setInterval(() => {
            this.chooseDirection();
        }, 20);

        let checkForRange = setInterval(() => {
            let distanceOne = (world.character.x + this.width / 2) - (this.x + this.width / 2);
            if ((distanceOne < - 150 && distanceOne > - 400 || distanceOne > 150 && distanceOne < 400) && this.rangeAttackStarted == false && this.enemyIsDead == false && this.hurtAnimationStarted == false && this.dyingAnimationStarted == false) {
                clearInterval(run);
                this.rangeAttack();
                clearInterval(checkForRange);
            }
        }, 3000);
    }

    rangeAttack() {
        this.rangeAttackStarted = true;
        this.attackImageCount = 0;

        let animationRangeAttack = setInterval(() => {

            let path = this.IMAGES_THROW[this.attackImageCount];
            this.img = this.imgCache[path];

            if (this.hurtAnimationStarted == true) {
                this.loadImage('./img/endboss/Walking/0_Reaper_Man_Walking_000.png');
                this.rangeAttackStarted = false;
                this.enemyBossRun();
                clearInterval(animationRangeAttack);
            }
            if (this.attackImageCount == 6) {
                let x = this.x + (this.width / 2);
                let y = this.y + (this.height / 2);
                world.projectiles.push(new BossRangeAttack(x, y, this.otherDirection));
            }

            if (this.attackImageCount == this.IMAGES_THROW.length) {
                this.loadImage('./img/endboss/Walking/0_Reaper_Man_Walking_000.png');
                this.rangeAttackStarted = false;
                this.enemyBossRun();
                clearInterval(animationRangeAttack);
            }

            this.attackImageCount++;
        }, 80);
    }
}