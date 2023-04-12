class EnemyThree extends Enemy{
    height = 100;
    width = 100;
    y = 350;
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
    currentIMG = 0;

    constructor(){
        super().loadImage('./img/Goblin/Walking/0_Goblin_Walking_000.png');
        this.loadImages(this.IMAGES_WALK);

        this.x = 200 + Math.random() * 1800;
        this.speed = 1 + Math.random() * 0.5;
        
        this.enemyThreeRun();
    }

    enemyThreeRun(){
        this.moveLeft();
        setInterval(() => {
            let i = this.currentIMG % this.IMAGES_WALK.length;
            let path = this.IMAGES_WALK[i];
            this.img = this.imgCache[path];

            this.currentIMG ++;
            // this.x = this.x + 1;
            
        }, 50);
    }
}