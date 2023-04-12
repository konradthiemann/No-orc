class EnemyBoss extends Enemy{
    height = 450;
    width = 450;
    x = 300;
    y = 100;
    speed = 5;

    IMAGES_WALK = [
        './img/dragon/Walk1.png',
        './img/dragon/Walk2.png',
        './img/dragon/Walk3.png',
        './img/dragon/Walk4.png',
        './img/dragon/Walk5.png',
    ];

    IMAGES_IDLE = [
        './img/dragon/Idle1.png',
        './img/dragon/Idle2.png',
        './img/dragon/Idle3.png',
    ];

    IMAGES_HURT = [
        './img/dragon/Hurt1.png',
        './img/dragon/Hurt2.png',
    ];

    IMAGES_DEATH = [
        './img/dragon/Death1.png',
        './img/dragon/Death2.png',
        './img/dragon/Death3.png',
        './img/dragon/Death4.png',
        './img/dragon/Death5.png',
    ];

    IMAGES_ATTACK = [
        './img/dragon/Attack1.png',
        './img/dragon/Attack2.png',
        './img/dragon/Attack3.png',
        './img/dragon/Attack4.png',
    ];

    IMAGES_FIRE = [
        './img/dragon/Fire_Attack1.png',
        './img/dragon/Fire_Attack2.png',
        './img/dragon/Fire_Attack3.png',
        './img/dragon/Fire_Attack4.png',
        './img/dragon/Fire_Attack5.png',
        './img/dragon/Fire_Attack5.png',
    ];

    constructor(){
        super().loadImage('./img/dragon/Walk1.png');
        this.loadImages(this.IMAGES_WALK);
    }
}