class EnemyOne extends Enemy{
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
    currentIMG = 0;

    constructor(){
        super().loadImage('./img/Orc/Walking/0_Orc_Walking_000.png');
        this.loadImages(this.IMAGES_WALK);

        this.x = 200 + Math.random() * 1800;
        this.speed = 1 + Math.random() * 0.5;

        this.enemyOneRun();
    }

    enemyOneRun(){
        this.moveLeft();
        setInterval(() => {
            let i = this.currentIMG % this.IMAGES_WALK.length;
            let path = this.IMAGES_WALK[i];
            this.img = this.imgCache[path];

            this.currentIMG ++;
            // this.x = this.x - 1;
        }, 50);
    }
}