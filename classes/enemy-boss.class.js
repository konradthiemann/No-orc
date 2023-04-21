class EnemyBoss extends Enemy{
    height = 170;
    width = 170;
    x = 300;
    y = 295;
    speed = 5;

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

    IMAGES_DEATH = [
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

    constructor(){
        super().loadImage('./img/endboss/Walking/0_Reaper_Man_Walking_000.png');
        this.loadImages(this.IMAGES_WALK);
    }
}