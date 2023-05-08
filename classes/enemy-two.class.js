class EnemyTwo extends Enemy{
    height = 100;
    width = 100;
    y = 350;
    currentIMG = 0;
    fallingDownImage = './img/Goblin/Falling Down/0_Goblin_Falling Down_000.png';
    IMAGES_WALK = [
        './img/Goblin/Walking/0_Goblin_Walking_000.png',
        './img/Goblin/Walking/0_Goblin_Walking_001.png',
        './img/Goblin/Walking/0_Goblin_Walking_002.png',
        './img/Goblin/Walking/0_Goblin_Walking_003.png',
        './img/Goblin/Walking/0_Goblin_Walking_004.png',
        './img/Goblin/Walking/0_Goblin_Walking_005.png',
        './img/Goblin/Walking/0_Goblin_Walking_006.png',
        './img/Goblin/Walking/0_Goblin_Walking_007.png',
        './img/Goblin/Walking/0_Goblin_Walking_008.png',
        './img/Goblin/Walking/0_Goblin_Walking_009.png',
        './img/Goblin/Walking/0_Goblin_Walking_010.png',
        './img/Goblin/Walking/0_Goblin_Walking_011.png',
        './img/Goblin/Walking/0_Goblin_Walking_012.png',
        './img/Goblin/Walking/0_Goblin_Walking_013.png',
        './img/Goblin/Walking/0_Goblin_Walking_014.png',
        './img/Goblin/Walking/0_Goblin_Walking_015.png',
        './img/Goblin/Walking/0_Goblin_Walking_016.png',
        './img/Goblin/Walking/0_Goblin_Walking_017.png',
        './img/Goblin/Walking/0_Goblin_Walking_018.png',
        './img/Goblin/Walking/0_Goblin_Walking_019.png',
        './img/Goblin/Walking/0_Goblin_Walking_020.png',
        './img/Goblin/Walking/0_Goblin_Walking_021.png',
        './img/Goblin/Walking/0_Goblin_Walking_022.png',
    ];
    IMAGES_ATTACK = [
        './img/Goblin/Slashing/0_Goblin_Slashing_000.png',
        './img/Goblin/Slashing/0_Goblin_Slashing_001.png',
        './img/Goblin/Slashing/0_Goblin_Slashing_002.png',
        './img/Goblin/Slashing/0_Goblin_Slashing_003.png',
        './img/Goblin/Slashing/0_Goblin_Slashing_004.png',
        './img/Goblin/Slashing/0_Goblin_Slashing_005.png',
        './img/Goblin/Slashing/0_Goblin_Slashing_006.png',
        './img/Goblin/Slashing/0_Goblin_Slashing_007.png',
        './img/Goblin/Slashing/0_Goblin_Slashing_008.png',
        './img/Goblin/Slashing/0_Goblin_Slashing_009.png',
        './img/Goblin/Slashing/0_Goblin_Slashing_010.png',
        './img/Goblin/Slashing/0_Goblin_Slashing_011.png',
    ];
    IMAGES_DYING = [
        './img/Goblin/Dying/0_Goblin_Dying_001.png',
        './img/Goblin/Dying/0_Goblin_Dying_000.png',
        './img/Goblin/Dying/0_Goblin_Dying_002.png',
        './img/Goblin/Dying/0_Goblin_Dying_003.png',
        './img/Goblin/Dying/0_Goblin_Dying_004.png',
        './img/Goblin/Dying/0_Goblin_Dying_005.png',
        './img/Goblin/Dying/0_Goblin_Dying_006.png',
        './img/Goblin/Dying/0_Goblin_Dying_007.png',
        './img/Goblin/Dying/0_Goblin_Dying_008.png',
        './img/Goblin/Dying/0_Goblin_Dying_009.png',
        './img/Goblin/Dying/0_Goblin_Dying_010.png',
        './img/Goblin/Dying/0_Goblin_Dying_011.png',
        './img/Goblin/Dying/0_Goblin_Dying_012.png',
        './img/Goblin/Dying/0_Goblin_Dying_013.png',
        './img/Goblin/Dying/0_Goblin_Dying_014.png',
    ];
    IMAGES_HURT = [
        './img/Goblin/Hurt/0_Goblin_Hurt_000.png',
        './img/Goblin/Hurt/0_Goblin_Hurt_001.png',
        './img/Goblin/Hurt/0_Goblin_Hurt_002.png',
        './img/Goblin/Hurt/0_Goblin_Hurt_003.png',
        './img/Goblin/Hurt/0_Goblin_Hurt_004.png',
        './img/Goblin/Hurt/0_Goblin_Hurt_005.png',
        './img/Goblin/Hurt/0_Goblin_Hurt_006.png',
        './img/Goblin/Hurt/0_Goblin_Hurt_007.png',
        './img/Goblin/Hurt/0_Goblin_Hurt_008.png',
        './img/Goblin/Hurt/0_Goblin_Hurt_009.png',
        './img/Goblin/Hurt/0_Goblin_Hurt_010.png',
        './img/Goblin/Hurt/0_Goblin_Hurt_011.png',
    ];

    constructor(){
        super().loadImage('./img/Goblin/Walking/0_Goblin_Walking_000.png');
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