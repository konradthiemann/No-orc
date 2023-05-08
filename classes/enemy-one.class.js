class EnemyOne extends Enemy {
    height = 100;
    width = 100;
    y = 350;
    autoAttackDmg = 0.5;
    fallingDownImage = './img/Orc/Falling Down/0_Orc_Falling Down_000.png';
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
    IMAGES_DYING = [
        './img/Orc/Dying/0_Orc_Dying_000.png',
        './img/Orc/Dying/0_Orc_Dying_001.png',
        './img/Orc/Dying/0_Orc_Dying_002.png',
        './img/Orc/Dying/0_Orc_Dying_003.png',
        './img/Orc/Dying/0_Orc_Dying_004.png',
        './img/Orc/Dying/0_Orc_Dying_005.png',
        './img/Orc/Dying/0_Orc_Dying_006.png',
        './img/Orc/Dying/0_Orc_Dying_007.png',
        './img/Orc/Dying/0_Orc_Dying_008.png',
        './img/Orc/Dying/0_Orc_Dying_009.png',
        './img/Orc/Dying/0_Orc_Dying_010.png',
        './img/Orc/Dying/0_Orc_Dying_011.png',
        './img/Orc/Dying/0_Orc_Dying_012.png',
        './img/Orc/Dying/0_Orc_Dying_013.png',
        './img/Orc/Dying/0_Orc_Dying_014.png',
    ];
    IMAGES_HURT = [
        './img/Orc/Hurt/0_Orc_Hurt_000.png',
        './img/Orc/Hurt/0_Orc_Hurt_001.png',
        './img/Orc/Hurt/0_Orc_Hurt_002.png',
        './img/Orc/Hurt/0_Orc_Hurt_003.png',
        './img/Orc/Hurt/0_Orc_Hurt_004.png',
        './img/Orc/Hurt/0_Orc_Hurt_005.png',
        './img/Orc/Hurt/0_Orc_Hurt_006.png',
        './img/Orc/Hurt/0_Orc_Hurt_007.png',
        './img/Orc/Hurt/0_Orc_Hurt_008.png',
        './img/Orc/Hurt/0_Orc_Hurt_009.png',
        './img/Orc/Hurt/0_Orc_Hurt_010.png',
        './img/Orc/Hurt/0_Orc_Hurt_011.png',
    ];
    currentIMG = 0;

    constructor() {
        super().loadImage('./img/Orc/Walking/0_Orc_Walking_000.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_DYING);
        this.loadImages(this.IMAGES_HURT);

        this.getID();
        this.x = 200 + Math.random() * 1800;
        this.speed = 1 + Math.random() * 0.5;

        this.enemyRun();
        this.checkEnemyDead();
    }  
}