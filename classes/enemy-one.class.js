class EnemyOne extends Enemy {
    height = 100;
    width = 100;
    y = 350;

    IMAGES_WALK = [
        './img/Orc/Walking/0_Orc_Walking_000.png',
        './img/Orc/Walking/0_Orc_Walking_001.png',
        './img/Orc/Walking/0_Orc_Walking_002.png',
        './img/Orc/Walking/0_Orc_Walking_003.png',
        './img/Orc/Walking/0_Orc_Walking_004.png',
        './img/Orc/Walking/0_Orc_Walking_005.png',
        './img/Orc/Walking/0_Orc_Walking_006.png',
        './img/Orc/Walking/0_Orc_Walking_007.png',
        './img/Orc/Walking/0_Orc_Walking_008.png',
        './img/Orc/Walking/0_Orc_Walking_009.png',
        './img/Orc/Walking/0_Orc_Walking_010.png',
        './img/Orc/Walking/0_Orc_Walking_011.png',
        './img/Orc/Walking/0_Orc_Walking_012.png',
        './img/Orc/Walking/0_Orc_Walking_013.png',
        './img/Orc/Walking/0_Orc_Walking_014.png',
        './img/Orc/Walking/0_Orc_Walking_015.png',
        './img/Orc/Walking/0_Orc_Walking_016.png',
        './img/Orc/Walking/0_Orc_Walking_017.png',
        './img/Orc/Walking/0_Orc_Walking_018.png',
        './img/Orc/Walking/0_Orc_Walking_019.png',
        './img/Orc/Walking/0_Orc_Walking_020.png',
        './img/Orc/Walking/0_Orc_Walking_021.png',
        './img/Orc/Walking/0_Orc_Walking_022.png',
        './img/Orc/Walking/0_Orc_Walking_023.png',
    ];
    IMAGES_ATTACK = [
        './img/Orc/Slashing/0_Orc_Slashing_000.png',
        './img/Orc/Slashing/0_Orc_Slashing_001.png',
        './img/Orc/Slashing/0_Orc_Slashing_002.png',
        './img/Orc/Slashing/0_Orc_Slashing_003.png',
        './img/Orc/Slashing/0_Orc_Slashing_004.png',
        './img/Orc/Slashing/0_Orc_Slashing_005.png',
        './img/Orc/Slashing/0_Orc_Slashing_006.png',
        './img/Orc/Slashing/0_Orc_Slashing_007.png',
        './img/Orc/Slashing/0_Orc_Slashing_008.png',
        './img/Orc/Slashing/0_Orc_Slashing_009.png',
        './img/Orc/Slashing/0_Orc_Slashing_010.png',
        './img/Orc/Slashing/0_Orc_Slashing_011.png',
    ];
    currentIMG = 0;

    constructor() {
        super().loadImage('./img/Orc/Walking/0_Orc_Walking_000.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ATTACK);

        // this.x = 200 + Math.random() * 1800;
        this.x = 200 + Math.random() * 80;
        this.speed = 1 + Math.random() * 0.5;

        this.enemyOneRun();
    }

    enemyOneRun() {
        setInterval(() => {
            this.chooseDirection();
        }, 20);
    }

    chooseDirection() {
        // console.log(this.isColliding)

        if (this.x / 2 < world.character.x / 2 && this.attackAnimationStarted == false) {
            this.otherDirection = false;
            if (this.isColliding == false) {
                this.playAnimation(this.IMAGES_WALK);
                this.moveRight();
            }
        }

        if (this.x / 2 > world.character.x / 2 && this.attackAnimationStarted == false) {
            this.otherDirection = true;
            if (this.isColliding == false) {
                this.playAnimation(this.IMAGES_WALK);
                this.moveLeft();
            }
        }
    }

    attack() {

        let attackImageCount = 0;
        
        let enemyAttack = setInterval(() => {
        
        let path = this.IMAGES_ATTACK[attackImageCount];
        this.img = this.imgCache[path];

            if (attackImageCount == this.IMAGES_ATTACK.length  || this.isColliding == false) {
                
                this.attackAnimationStarted = false;
                attackImageCount = 0;
                this.loadImage('./img/Orc/Slashing/0_Orc_Slashing_000.png');
                console.log('clearInterval');
                clearInterval(enemyAttack);
            }

            attackImageCount++;

        }, 100);

    }
}